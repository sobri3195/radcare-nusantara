const stats = ['24/7 Monitoring', '100% Structured Records', 'Faster Clinical Review', 'Secure Patient Notes'];

export function StatsSection() {
  return (
    <section className='px-4 py-10 md:px-6'>
      <div className='mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {stats.map((item) => (
          <div key={item} className='rounded-2xl border border-cyan-100 bg-white p-5 text-center shadow-sm'>
            <p className='text-sm font-semibold text-slate-700'>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
