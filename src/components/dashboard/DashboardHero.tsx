import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
export default function DashboardHero({ role, focus }: { role: string; focus: string }) {
  const date = new Date().toLocaleDateString('id-ID', { dateStyle: 'full' });
  return <section className='grid gap-4 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-800 to-cyan-600 p-5 text-white shadow-2xl md:grid-cols-3 md:p-6'>
    <div className='md:col-span-2'>
      <span className='inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold'>Smart Radiotherapy Care</span>
      <h1 className='mt-3 text-2xl font-bold md:text-3xl'>Selamat datang, {role}</h1><p className='text-sm text-blue-100'>Ringkasan operasional radioterapi hari ini.</p><p className='mt-1 text-xs text-cyan-100'>{date}</p><p className='mt-3 text-xs text-cyan-100'>{focus}</p>
      <div className='mt-4 flex flex-wrap gap-2 text-xs'>{[['/patients?risk=high','Lihat Pasien Risiko Tinggi'],['/schedule','Buka Jadwal Hari Ini'],['/ai-assistant','Generate AI Insight']].map(([to,l])=><Link key={l} to={to} className='min-h-11 rounded-xl bg-white/15 px-3 py-2 font-semibold backdrop-blur transition hover:scale-[1.02] hover:bg-white/25'>{l}</Link>)}</div>
    </div>
    <div className='space-y-2'><div className='rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur'><p className='text-xs'>Mini AI Insight</p><p className='text-sm font-semibold'>3 jadwal ditunda perlu tindak lanjut.</p></div><div className='rounded-2xl border border-white/20 bg-white/10 p-3'><p className='text-xs'>Progress Terapi</p><p className='text-sm font-semibold'>74% rata-rata sesi selesai</p></div><div className='rounded-2xl border border-cyan-300/40 bg-slate-900/30 p-3'><p className='flex items-center gap-2 text-xs'><Sparkles className='h-3.5 w-3.5'/>Risk Indicator</p><p className='text-sm font-semibold'>4 pasien risiko tinggi</p></div></div>
  </section>;
}
