import { Activity, AlertTriangle, CalendarDays, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingHero() {
  return (
    <section id='beranda' className='hero-grid relative overflow-hidden px-4 pb-16 pt-14 md:px-6 md:pb-24 md:pt-20'>
      <div className='hero-blob absolute -left-20 top-10 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl' />
      <div className='hero-blob absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl' />
      <div className='mx-auto grid min-h-[85vh] max-w-7xl items-center gap-10 lg:grid-cols-2'>
        <div className='animate-fade-in space-y-6'>
          <span className='inline-flex rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-semibold text-cyan-700'>Healthcare SaaS Demo Platform</span>
          <h1 className='text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl lg:text-7xl'>RADCARE NUSANTARA</h1>
          <p className='text-xl font-semibold text-slate-700 md:text-2xl'>Smart Radiotherapy Care, Continuous Specialist Monitoring.</p>
          <p className='max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg'>Platform monitoring radioterapi berbasis dashboard untuk membantu pemantauan pasien, Jadwal Terapi, Risiko Klinis, Catatan Klinis spesialis, dan insight operasional secara terstruktur.</p>
          <div className='flex flex-col gap-3 sm:flex-row'>
            <Link to='/login' className='rounded-xl bg-gradient-to-r from-sky-600 to-emerald-500 px-7 py-3 text-center text-base font-semibold text-white shadow-xl transition hover:scale-[1.02]'>Coba Demo</Link>
            <a href='#fitur' className='rounded-xl border border-slate-300 bg-white px-7 py-3 text-center text-base font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700'>Lihat Fitur</a>
          </div>
        </div>

        <div className='relative animate-fade-in-delayed'>
          <div className='rounded-[2rem] border border-slate-700/40 bg-slate-900 p-4 shadow-2xl shadow-cyan-900/40'>
            <div className='grid grid-cols-[72px_1fr] gap-4 rounded-3xl bg-slate-950/80 p-4'>
              <aside className='space-y-3 rounded-2xl bg-slate-900/80 p-3'>
                <div className='h-8 rounded-lg bg-cyan-500/30' />
                <div className='h-8 rounded-lg bg-slate-700' />
                <div className='h-8 rounded-lg bg-slate-700' />
              </aside>
              <div className='space-y-3'>
                <div className='grid grid-cols-2 gap-3'>
                  {['Total Pasien Aktif: 12', 'Jadwal Hari Ini: 15', 'Risiko Tinggi: 4', 'Sesi Selesai: 114'].map((item) => (
                    <div key={item} className='rounded-xl border border-slate-700 bg-slate-800/80 px-3 py-2 text-xs font-medium text-slate-200'>{item}</div>
                  ))}
                </div>
                <div className='rounded-xl border border-cyan-700/60 bg-cyan-500/10 p-3 text-sm text-cyan-100'>
                  <p className='mb-2 inline-flex items-center gap-2 rounded-full bg-cyan-400/20 px-2 py-1 text-[11px] font-semibold text-cyan-200'><Sparkles size={12} /> AI Insight</p>
                  3 pasien membutuhkan evaluasi prioritas hari ini.
                </div>
                <div className='grid grid-cols-2 gap-3'>
                  <div className='rounded-xl bg-slate-800 p-3 text-xs text-slate-300'><p className='mb-2 text-[11px] text-rose-300'>Risk Alert</p><div className='h-2 rounded-full bg-slate-700'><div className='h-2 w-3/4 rounded-full bg-rose-400' /></div></div>
                  <div className='rounded-xl bg-slate-800 p-3 text-xs text-slate-300'><p className='mb-2 text-[11px] text-emerald-300'>Today Schedule</p><div className='h-2 rounded-full bg-slate-700'><div className='h-2 w-4/5 rounded-full bg-emerald-400' /></div></div>
                </div>
              </div>
            </div>
          </div>
          <div className='floating-card -left-6 top-8'><AlertTriangle size={14} className='text-rose-500' /> Pasien Risiko Tinggi: 4</div>
          <div className='floating-card -right-4 top-24'><Sparkles size={14} className='text-cyan-500' /> AI Insight: 3 pasien membutuhkan evaluasi</div>
          <div className='floating-card -left-2 bottom-8'><CalendarDays size={14} className='text-emerald-500' /> Jadwal Hari Ini: 15</div>
          <div className='floating-card right-10 bottom-0'><Activity size={14} className='text-sky-500' /> Sesi Selesai: 114</div>
        </div>
      </div>
    </section>
  );
}
