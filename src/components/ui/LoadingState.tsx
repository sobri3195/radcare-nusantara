export default function LoadingState({ label = 'Memuat data...' }: { label?: string }) {
  return <div className='rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500'>{label}</div>;
}
