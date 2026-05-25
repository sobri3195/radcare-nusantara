import { ArrowRight, BrainCircuit, CalendarCheck2, ShieldAlert, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingHero() {
  return <section id='beranda' className='relative overflow-hidden px-4 pb-16 pt-14 md:px-6 md:pt-20'>
    <div className='hero-grid pointer-events-none absolute inset-0 opacity-50' />
    <div className='hero-blob absolute -left-24 top-8 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl' />
    <div className='hero-blob absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl' />
    <div className='mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 lg:grid-cols-2'>
      <div className='animate-[fadeIn_.7s_ease-out]'>
        <span className='inline-flex rounded-full border border-cyan-200 bg-white/70 px-4 py-1 text-xs font-semibold text-cyan-800'>Healthcare SaaS Demo Platform</span>
        <h1 className='mt-4 text-4xl font-black leading-tight text-slate-900 md:text-6xl'>RADCARE NUSANTARA</h1>
        <p className='mt-3 text-lg font-medium text-sky-900'>Smart Radiotherapy Care, Continuous Specialist Monitoring.</p>
        <p className='mt-5 max-w-2xl text-slate-600'>Platform monitoring radioterapi berbasis dashboard untuk membantu pemantauan pasien, jadwal terapi, risiko klinis, catatan spesialis, dan insight operasional secara terstruktur.</p>
        <div className='mt-8 flex flex-wrap gap-3'>
          <Link to='/login' className='rounded-2xl bg-gradient-to-r from-sky-700 to-cyan-500 px-6 py-3 font-semibold text-white shadow-xl transition hover:scale-105'>Coba Demo</Link>
          <a href='#fitur' className='rounded-2xl border border-slate-300 bg-white/80 px-6 py-3 font-semibold text-slate-700 transition hover:scale-105'>Lihat Fitur</a>
        </div>
      </div>
      <div className='relative'>
        <div className='rounded-3xl border border-white/60 bg-white/60 p-4 shadow-2xl backdrop-blur-xl'>
          <div className='grid gap-3 sm:grid-cols-2'>
            {['Total Pasien Aktif: 12', 'Jadwal Hari Ini: 15', 'Risiko Tinggi: 4', 'Sesi Selesai: 114'].map((x) => <div key={x} className='rounded-2xl border border-slate-100 bg-white p-3 text-sm font-semibold text-slate-700'>{x}</div>)}
          </div>
          <div className='mt-3 rounded-2xl bg-slate-900 p-4 text-sm text-slate-200'>AI Insight: 3 pasien membutuhkan evaluasi prioritas hari ini.</div>
        </div>
        <div className='absolute -left-6 top-8 hidden rounded-2xl bg-white p-3 shadow-xl md:block animate-[float_5s_ease-in-out_infinite]'><Users className='mb-1 text-cyan-700'/><p className='text-xs font-semibold'>Status Pasien</p></div>
        <div className='absolute -right-4 top-24 hidden rounded-2xl bg-white p-3 shadow-xl md:block animate-[float_6s_ease-in-out_infinite]'><CalendarCheck2 className='mb-1 text-emerald-700'/><p className='text-xs font-semibold'>Jadwal Terapi</p></div>
        <div className='absolute -bottom-4 right-12 hidden rounded-2xl bg-white p-3 shadow-xl md:block animate-[float_7s_ease-in-out_infinite]'><ShieldAlert className='mb-1 text-rose-600'/><p className='text-xs font-semibold'>Pasien Risiko Tinggi</p></div>
        <div className='absolute bottom-20 left-10 hidden rounded-2xl bg-slate-900 p-3 text-white shadow-xl md:block animate-[float_8s_ease-in-out_infinite]'><BrainCircuit className='mb-1 text-cyan-300'/><p className='text-xs'>AI Assistant</p></div>
      </div>
    </div>
  </section>;
}
