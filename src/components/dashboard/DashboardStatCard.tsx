import { LucideIcon, TrendingUp } from 'lucide-react';
export default function DashboardStatCard({ label, value, icon: Icon, accent, trend, progress }: { label: string; value: number; icon: LucideIcon; accent: string; trend: string; progress: number }) {
  return <article className='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg'>
    <div className='mb-3 flex items-start justify-between'><p className='text-[11px] font-semibold uppercase tracking-wide text-slate-500'>{label}</p><div className={`rounded-xl p-2 ${accent}`}><Icon className='h-5 w-5 text-white' /></div></div>
    <p className='text-3xl font-bold text-slate-900'>{value}</p>
    <div className='mt-2 flex items-center gap-1 text-xs text-emerald-600'><TrendingUp className='h-3.5 w-3.5' />{trend}</div>
    <div className='mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100'><div className='h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-700' style={{ width: `${progress}%` }} /></div>
  </article>;
}
