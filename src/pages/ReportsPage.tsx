import { useRef } from 'react';
import { addAuditLog, exportJSON, importJSON, loadAppData, resetAppData } from '../lib/storage';

export default function ReportsPage() {
  const d = loadAppData();
  const fileRef = useRef<HTMLInputElement>(null);
  const today = new Date().toISOString().slice(0, 10);
  const avg = Math.round((d.treatmentPlans || []).reduce((a:number,b:any)=>a+((b.completedSessions||0)/(b.totalSessions||1))*100,0) / Math.max(1, (d.treatmentPlans || []).length));

  return <div className='space-y-4'>
    <div className='rounded-3xl border bg-white p-5'>
      <h1 className='text-2xl font-bold'>Laporan & Analytics</h1>
    </div>
    <div className='grid gap-3 md:grid-cols-4'>
      {[['Total pasien aktif',d.patients.filter((p:any)=>p.status!=='Selesai').length],['Total pasien selesai terapi',d.patients.filter((p:any)=>p.status==='Selesai').length],['Total jadwal hari ini',d.schedules.filter((s:any)=>s.date===today).length],['Total jadwal tertunda',d.schedules.filter((s:any)=>s.status==='Ditunda').length]].map(([k,v]) => <div key={String(k)} className='rounded-2xl border bg-white p-4'><p className='text-xs'>{k}</p><p className='text-2xl font-bold'>{v as any}</p></div>)}
    </div>
    <div className='rounded-2xl border bg-white p-4'>
      <p className='text-sm mb-2'>Progress terapi rata-rata: {avg}%</p>
      <div className='h-2 rounded bg-slate-200'><div className='h-2 rounded bg-cyan-500' style={{width:`${avg}%`}} /></div>
    </div>
    <div className='flex flex-wrap gap-2'>
      <button className='h-11 rounded-xl bg-slate-900 px-4 text-white' onClick={()=>{const blob=new Blob([exportJSON()],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='radcare-backup.json';a.click();addAuditLog('Backup data','reports','-','Export JSON');}}>Export JSON</button>
      <button className='h-11 rounded-xl bg-blue-600 px-4 text-white' onClick={()=>fileRef.current?.click()}>Restore JSON</button>
      <button className='h-11 rounded-xl bg-rose-600 px-4 text-white' onClick={()=>{if(confirm('Reset data demo?')){resetAppData();addAuditLog('Reset data','reports','-','Reset dari reports');location.reload();}}}>Reset Data Demo</button>
      <input ref={fileRef} type='file' className='hidden' accept='application/json' onChange={async e=>{const f=e.target.files?.[0];if(!f)return;importJSON(await f.text());addAuditLog('Restore data','reports','-','Import JSON');location.reload();}} />
    </div>
  </div>;
}
