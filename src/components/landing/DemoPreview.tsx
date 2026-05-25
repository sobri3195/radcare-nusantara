export function DemoPreview() {
  return (
    <section id='demo' className='px-4 py-16 md:px-6'>
      <div className='mx-auto max-w-6xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl'>
        <h2 className='mb-6 text-2xl font-bold text-slate-900'>Demo Preview</h2>
        <div className='mx-auto w-full max-w-sm rounded-[2rem] border-8 border-slate-900 bg-slate-100 p-4 shadow-2xl'>
          <div className='space-y-3 rounded-2xl bg-white p-4'>
            <p className='text-sm font-semibold'>Pasien: Ny. Aulia S.</p>
            <p className='text-xs text-slate-500'>Status monitoring: Stabil</p>
            <p className='text-xs text-slate-500'>Jadwal radioterapi: Senin, 09:00</p>
            <p className='text-xs text-slate-500'>Catatan dokter: Respons baik, lanjut sesi berikutnya.</p>
            <div>
              <p className='mb-1 text-xs text-slate-500'>Progress terapi</p>
              <div className='h-2 rounded-full bg-slate-200'>
                <div className='h-full w-2/3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
