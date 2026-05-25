import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section id='beranda' className='relative overflow-hidden px-4 pb-16 pt-16 md:px-6 md:pt-24'>
      <div className='pointer-events-none absolute -left-20 top-8 h-72 w-72 animate-pulse rounded-full bg-cyan-300/30 blur-3xl' />
      <div className='pointer-events-none absolute -right-16 bottom-0 h-80 w-80 animate-pulse rounded-full bg-blue-400/30 blur-3xl [animation-delay:900ms]' />
      <div className='mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2'>
        <div className='animate-[fadeIn_700ms_ease-out] space-y-6'>
          <p className='inline-flex rounded-full border border-cyan-200/40 bg-white/10 px-4 py-1 text-xs font-medium text-cyan-100'>
            Smart Oncology Platform
          </p>
          <h1 className='text-4xl font-bold leading-tight text-white md:text-6xl'>RADCARE NUSANTARA</h1>
          <p className='text-lg text-cyan-100'>Smart Radiotherapy Care, Continuous Specialist Monitoring.</p>
          <p className='max-w-xl text-sm text-slate-200 md:text-base'>
            Platform pemantauan pasien radioterapi secara cerdas, terstruktur, dan berkelanjutan untuk mendukung koordinasi klinis yang lebih efisien.
          </p>
          <div className='flex flex-wrap gap-3'>
            <Link to='/demo' className='inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-900 transition hover:scale-105'>
              Coba Demo <ArrowRight size={18} />
            </Link>
            <a href='#fitur' className='inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-3 font-semibold text-white transition hover:scale-105'>
              Lihat Fitur <PlayCircle size={18} />
            </a>
          </div>
        </div>

        <div className='rounded-3xl border border-white/30 bg-white/15 p-6 shadow-2xl backdrop-blur-xl'>
          <div className='space-y-4 rounded-2xl bg-white p-5 text-slate-800'>
            <p className='text-sm font-semibold text-slate-500'>Live Monitoring Snapshot</p>
            <div className='flex items-center justify-between'>
              <span className='text-sm'>Pasien aktif</span>
              <span className='rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700'>32 monitored</span>
            </div>
            <div className='h-2 rounded-full bg-slate-100'>
              <div className='h-full w-4/5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600' />
            </div>
            <p className='text-xs text-slate-500'>Koordinasi dokter, fisikawan, dan tim terapi dalam satu alur data terstruktur.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
