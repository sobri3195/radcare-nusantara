import { Activity, AlertTriangle, CalendarClock, FileClock, HeartPulse, ShieldAlert, Stethoscope, UserCheck } from 'lucide-react';
import { loadAppData } from '../lib/storage';

const iconMap = [UserCheck, CalendarClock, ShieldAlert, Activity, FileClock, AlertTriangle, HeartPulse, Stethoscope];
export default function DashboardPage() {
  const d = loadAppData();
  const stats = [
    ['Total Pasien Aktif', d.patients.filter((p: any) => p.status !== 'Selesai').length],
    ['Jadwal Hari Ini', d.schedules.filter((s: any) => s.date === new Date().toISOString().slice(0, 10)).length],
    ['Pasien Risiko Tinggi', d.patients.filter((p: any) => p.riskLevel === 'Tinggi').length],
    ['Sesi Terapi Selesai', d.patients.reduce((a: number, b: any) => a + (b.completedSessions || 0), 0)],
    ['Catatan Belum Direview', d.monitoringNotes.filter((x: any) => !x.reviewed).length],
    ['Jadwal Ditunda', d.schedules.filter((x: any) => x.status === 'Ditunda').length],
    ['Efek Samping Aktif', d.patients.filter((p: any) => p.status === 'Efek Samping').length],
    ['Review Spesialis', d.doctorNotes.length],
  ];

  return <div className='space-y-4'>
    <section className='rounded-3xl bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-600 p-6 text-white shadow-2xl'>
      <p className='text-sm text-cyan-100'>Smart Radiotherapy Care</p>
      <h1 className='mt-1 text-3xl font-bold'>Selamat datang, {localStorage.getItem('selectedRole') || 'Tim RADCARE'}</h1>
      <p className='mt-2 text-sm text-blue-100'>Ringkasan operasional radioterapi tanggal {new Date().toLocaleDateString('id-ID', { dateStyle: 'full' })}.</p>
    </section>
    <section className='grid gap-3 md:grid-cols-2 xl:grid-cols-4'>{stats.map(([k,v], i)=>{ const I=iconMap[i]; return <div key={String(k)} className='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg'><div className='mb-2 flex items-center justify-between'><p className='text-xs font-semibold uppercase text-slate-500'>{k}</p><I className='h-4 w-4 text-blue-600'/></div><p className='text-3xl font-bold text-slate-900'>{v as any}</p><p className='mt-1 text-xs text-emerald-600'>+2.3% dari minggu lalu</p></div>;})}</section>
  </div>;
}
