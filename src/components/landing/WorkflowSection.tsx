const steps = ['Registrasi pasien', 'Monitoring terapi', 'Evaluasi spesialis', 'Laporan berkelanjutan'];

export function WorkflowSection() {
  return (
    <section id='workflow' className='px-4 py-16 md:px-6'>
      <div className='mx-auto max-w-6xl'>
        <h2 className='mb-8 text-3xl font-bold text-slate-900'>Workflow Klinis Terstruktur</h2>
        <div className='grid gap-4 md:grid-cols-4'>
          {steps.map((step, index) => (
            <div key={step} className='rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'>
              <p className='mb-2 text-xs font-semibold text-cyan-700'>Langkah {index + 1}</p>
              <p className='text-sm font-medium text-slate-700'>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
