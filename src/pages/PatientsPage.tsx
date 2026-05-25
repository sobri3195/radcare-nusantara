import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteRecord, exportCSV, loadAppData } from '../lib/storage';
import ConfirmDialog from '../components/ui/ConfirmDialog';
import ToastNotification from '../components/ui/ToastNotification';

export default function PatientsPage() {
  const nav = useNavigate();
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('Semua');
  const [risk, setRisk] = useState('Semua');
  const [deleting, setDeleting] = useState<string | null>(null);
  const [toast, setToast] = useState('');
  const [tick, setTick] = useState(0);
  const patients = loadAppData().patients;

  const filtered = useMemo(() => patients.filter((p: any) => {
    const q = query.toLowerCase();
    return (p.name.toLowerCase().includes(q) || p.patientId.toLowerCase().includes(q)) && (status === 'Semua' || p.status === status) && (risk === 'Semua' || p.riskLevel === risk);
  }), [patients, query, status, risk, tick]);

  const doExport = () => {
    const csv = exportCSV('patients');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'radcare-patients.csv';
    a.click();
  };

  return <div className='space-y-4'>
    <div className='rounded-3xl border border-slate-200 bg-white p-5 shadow-sm'>
      <h1 className='text-2xl font-bold text-slate-900'>Daftar Pasien</h1>
      <p className='mt-1 text-sm text-slate-600'>Monitoring pasien radioterapi secara real-time dengan tampilan desktop dan mobile.</p>
      <div className='mt-4 grid gap-2 md:grid-cols-4'>
        <input className='h-11 rounded-xl border border-slate-200 px-3' placeholder='Cari nama / ID pasien' value={query} onChange={e=>setQuery(e.target.value)} />
        <select className='h-11 rounded-xl border border-slate-200 px-3' value={status} onChange={e=>setStatus(e.target.value)}><option>Semua</option><option>Stabil</option><option>Perlu Evaluasi</option><option>Efek Samping</option><option>Selesai</option></select>
        <select className='h-11 rounded-xl border border-slate-200 px-3' value={risk} onChange={e=>setRisk(e.target.value)}><option>Semua</option><option>Rendah</option><option>Sedang</option><option>Tinggi</option></select>
        <div className='grid grid-cols-2 gap-2'><button onClick={doExport} className='h-11 rounded-xl border border-slate-200 text-sm font-medium'>Export CSV</button><Link to='/patients/new' className='grid h-11 place-items-center rounded-xl bg-blue-600 text-sm font-medium text-white'>Tambah</Link></div>
      </div>
    </div>

    <div className='hidden overflow-hidden rounded-3xl border border-slate-200 bg-white lg:block'>
      <table className='w-full text-sm'>
        <thead className='bg-slate-50 text-left text-slate-600'><tr>{['Pasien','Diagnosis','Status','Risiko','Progress','Aksi'].map(h=><th key={h} className='px-4 py-3'>{h}</th>)}</tr></thead>
        <tbody>{filtered.map((p:any)=><tr key={p.id} className='border-t border-slate-100'><td className='px-4 py-3'><div className='font-semibold'>{p.name}</div><div className='text-xs text-slate-500'>{p.patientId}</div></td><td className='px-4 py-3'>{p.cancerType} {p.stage}</td><td className='px-4 py-3'>{p.status}</td><td className='px-4 py-3'>{p.riskLevel}</td><td className='px-4 py-3'><div className='h-2 rounded bg-slate-100'><div className='h-full rounded bg-cyan-500' style={{width:`${p.treatmentProgress}%`}}/></div></td><td className='px-4 py-3'><div className='flex gap-2'><button onClick={()=>nav(`/patients/${p.id}`)}>Detail</button><button onClick={()=>nav(`/patients/${p.id}/edit`)}>Edit</button><button className='text-rose-600' onClick={()=>setDeleting(p.id)}>Hapus</button></div></td></tr>)}</tbody>
      </table>
    </div>

    <div className='grid gap-3 lg:hidden'>{filtered.map((p:any)=><div key={p.id} className='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm'><div className='flex items-start justify-between'><div><p className='font-semibold'>{p.name}</p><p className='text-xs text-slate-500'>{p.patientId}</p></div><span className='rounded-full bg-slate-100 px-2 py-1 text-xs'>{p.riskLevel}</span></div><p className='mt-2 text-sm text-slate-600'>{p.diagnosis}</p><div className='mt-3 h-2 rounded bg-slate-100'><div className='h-full rounded bg-emerald-500' style={{width:`${p.treatmentProgress}%`}}/></div><div className='mt-3 grid grid-cols-3 gap-2 text-sm'><button className='rounded-lg border p-2' onClick={()=>nav(`/patients/${p.id}`)}>Detail</button><button className='rounded-lg border p-2' onClick={()=>nav(`/patients/${p.id}/edit`)}>Edit</button><button className='rounded-lg border border-rose-200 p-2 text-rose-600' onClick={()=>setDeleting(p.id)}>Hapus</button></div></div>)}</div>

    <ConfirmDialog open={!!deleting} title='Hapus pasien?' description='Data pasien akan dihapus dari localStorage.' confirmText='Hapus' onCancel={()=>setDeleting(null)} onConfirm={()=>{ if(deleting){ deleteRecord('patients', deleting); setToast('Data pasien dihapus'); setTick(tick+1);} setDeleting(null); }} />
    {toast && <ToastNotification message={toast} onClose={()=>setToast('')} />}
  </div>;
}
