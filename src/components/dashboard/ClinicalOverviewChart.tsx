import SectionHeader from '../ui/SectionHeader';
export default function ClinicalOverviewChart({ items }: { items: { label: string; value: number; color: string }[] }) {
  const total = Math.max(1, items.reduce((a, b) => a + b.value, 0));
  return <section className='rounded-2xl border border-slate-200 bg-white p-4 shadow-sm'><SectionHeader title='Clinical Overview' subtitle='Distribusi status pasien aktif' /><div className='space-y-3'>{items.map((x)=><div key={x.label}><div className='mb-1 flex justify-between text-xs'><span>{x.label}</span><span className='font-semibold'>{x.value}</span></div><div className='h-2 rounded-full bg-slate-100'><div className={`h-2 rounded-full ${x.color}`} style={{width:`${(x.value/total)*100}%`}}/></div></div>)}</div></section>
}
