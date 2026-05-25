import { LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className='group rounded-2xl border border-slate-200/70 bg-white/90 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl'>
      <div className='mb-4 inline-flex rounded-xl bg-cyan-50 p-3 text-cyan-700 transition group-hover:bg-cyan-100'>
        <Icon size={22} />
      </div>
      <h3 className='mb-2 text-lg font-semibold text-slate-900'>{title}</h3>
      <p className='text-sm leading-relaxed text-slate-600'>{description}</p>
    </article>
  );
}
