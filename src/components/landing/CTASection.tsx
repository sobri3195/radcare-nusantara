import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className='px-4 pb-16 md:px-6'>
      <div className='mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-800 p-8 text-white shadow-2xl md:p-12'>
        <h3 className='mb-4 text-2xl font-bold md:text-3xl'>Mulai gunakan RADCARE untuk pemantauan radioterapi yang lebih terarah.</h3>
        <Link to='/demo' className='inline-block rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-900 transition hover:scale-105'>
          Coba Demo Sekarang
        </Link>
      </div>
    </section>
  );
}
