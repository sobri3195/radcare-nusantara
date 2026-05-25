import { useMemo, useState } from 'react';
import { createRecord, deleteRecord, loadAppData, updateRecord } from '../lib/storage';
import { makeId } from '../lib/id';

export default function SchedulePage() {
  const [tick, setTick] = useState(0);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('Semua');
  const d = loadAppData();
  const schedules = d.schedules;
  const patients = d.patients;
  const today = new Date().toISOString().slice(0, 10);

  const rows = useMemo(() => schedules.filter((s: any) => {
    const patient = patients.find((p: any) => p.id === s.patientId);
    const n = patient?.name?.toLowerCase() || '';
    return n.includes(query.toLowerCase()) && (status === 'Semua' || s.status === status);
  }), [tick, query, status]);

  const markDone = (id: string) => {
    const row = schedules.find((x: any) => x.id === id);
    if (!row) return;
    updateRecord('schedules', id, { status: 'Selesai' });
    const p = patients.find((x: any) => x.id === row.patientId);
    if (p) updateRecord('patients', p.id, { completedSessions: Math.min(p.totalSessions, p.completedSessions + 1), treatmentProgress: Math.min(100, p.treatmentProgress + 5) });
    createRecord('auditLogs', { id: makeId('audit'), action: 'MARK_SCHEDULE_DONE', entity: 'schedules', description: `Jadwal ${id} ditandai selesai`, createdAt: new Date().toISOString() });
    setTick(tick + 1);
  };

  return <div className='space-y-4'>
    <div className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm'>
      <h1 className='text-2xl font-bold'>Jadwal Terapi</h1>
      <p className='text-sm text-slate-600'>Kelola jadwal radioterapi pasien hari ini dan minggu ini.</p>
      <div className='mt-3 grid gap-2 md:grid-cols-4'>
        <input className='h-11 rounded-xl border px-3' value={query} onChange={e=>setQuery(e.target.value)} placeholder='Cari pasien' />
        <select className='h-11 rounded-xl border px-3' value={status} onChange={e=>setStatus(e.target.value)}><option>Semua</option><option>Terjadwal</option><option>Berlangsung</option><option>Selesai</option><option>Ditunda</option></select>
        <button onClick={() => { const p = patients[0]; if (!p) return; createRecord('schedules', { id: makeId('sch'), patientId: p.id, date: today, time: '09:00', room: 'LINAC-A', doctor: p.doctorName, physicist: 'drf. Maya', status: 'Terjadwal', notes: 'Jadwal baru' }); setTick(tick + 1); }} className='h-11 rounded-xl bg-blue-600 text-white'>Tambah Jadwal</button>
      </div>
    </div>
    <div className='grid gap-3 md:grid-cols-5'>{['Total Jadwal','Terjadwal Hari Ini','Selesai','Ditunda','Berlangsung'].map((k, i) => {
      const val = i===0?schedules.length:i===1?schedules.filter((x:any)=>x.date===today).length:i===2?schedules.filter((x:any)=>x.status==='Selesai').length:i===3?schedules.filter((x:any)=>x.status==='Ditunda').length:schedules.filter((x:any)=>x.status==='Berlangsung').length;
      return <div key={k} className='rounded-2xl bg-white p-4 shadow-sm border'><p className='text-xs text-slate-500'>{k}</p><p className='text-2xl font-bold'>{val}</p></div>;
    })}</div>

    <div className='hidden overflow-hidden rounded-2xl border bg-white lg:block'><table className='w-full text-sm'><thead className='bg-slate-50'><tr>{['Pasien','Tanggal','Jam','Ruang','Dokter','Fisikawan','Status','Aksi'].map(h=><th key={h} className='px-3 py-2 text-left'>{h}</th>)}</tr></thead><tbody>{rows.map((s:any)=><tr key={s.id} className='border-t'><td className='px-3 py-2'>{patients.find((p:any)=>p.id===s.patientId)?.name}</td><td>{s.date}</td><td>{s.time||'08:00'}</td><td>{s.room||'LINAC-A'}</td><td>{s.doctor||'-'}</td><td>{s.physicist||'-'}</td><td>{s.status}</td><td className='space-x-2'><button onClick={()=>markDone(s.id)}>Selesai</button><button onClick={()=>updateRecord('schedules',s.id,{status:'Ditunda'})}>Tunda</button><button className='text-rose-600' onClick={()=>{deleteRecord('schedules',s.id);setTick(tick+1);}}>Hapus</button></td></tr>)}</tbody></table></div>
    <div className='grid gap-3 lg:hidden'>{rows.map((s:any)=><div key={s.id} className='rounded-2xl border bg-white p-4'><p className='font-semibold'>{patients.find((p:any)=>p.id===s.patientId)?.name}</p><p className='text-xs text-slate-500'>{s.date} {s.time||'08:00'} • {s.room||'LINAC-A'}</p><p className='mt-2 text-sm'>{s.status}</p></div>)}</div>
  </div>;
}
