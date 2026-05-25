export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return <div className='mb-3 flex items-end justify-between gap-3'><div><h3 className='text-base font-bold text-slate-900 md:text-lg'>{title}</h3>{subtitle && <p className='text-xs text-slate-500'>{subtitle}</p>}</div></div>;
}
