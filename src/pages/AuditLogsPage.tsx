import { loadAppData } from '../lib/storage';

export default function AuditLogsPage(){
  const d=loadAppData();
  return <div className='space-y-4'><div className='rounded-3xl border bg-white p-5 shadow-sm'><h1 className='text-2xl font-bold'>AuditLogs</h1><p className='text-sm text-slate-600'>Dashboard operasional modul AuditLogs untuk RADCARE NUSANTARA.</p></div><div className='grid gap-3 md:grid-cols-3'>{Object.entries({Pasien:d.patients.length,Jadwal:d.schedules.length,Catatan:d.monitoringNotes.length}).map(([k,v])=><div key={k} className='rounded-2xl border bg-white p-4'><p className='text-xs text-slate-500'>{k}</p><p className='text-2xl font-bold'>{v as number}</p></div>)}</div><div className='rounded-2xl border bg-white p-5'><p className='font-medium'>Konten utama</p><p className='text-sm text-slate-600'>Halaman ini sudah ditingkatkan dengan hierarki visual, summary card, dan konten utama siap dikembangkan lanjut.</p></div></div>
}
