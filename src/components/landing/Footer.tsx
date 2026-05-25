export function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-white px-4 py-8 md:px-6'>
      <div className='mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-600 md:flex-row'>
        <div>
          <p className='font-semibold text-slate-900'>RADCARE NUSANTARA</p>
          <p>Smart Radiotherapy Care</p>
          <p className='mt-2 text-xs'>© 2026 RADCARE. All rights reserved.</p>
        </div>
        <div className='flex gap-4 text-xs'>
          <a href='#'>Privacy</a><a href='#'>Contact</a><a href='#demo'>Demo</a>
        </div>
      </div>
    </footer>
  );
}
