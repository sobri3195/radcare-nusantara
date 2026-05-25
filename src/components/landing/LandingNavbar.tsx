import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const navItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'AI Assistant', href: '#ai-assistant' },
  { label: 'Demo', href: '#demo' },
];

export default function LandingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl'>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-6'>
        <a href='#beranda' className='shrink-0'>
          <Logo small />
        </a>

        <nav className='hidden items-center gap-2 md:flex'>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className='rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-700'>
              {item.label}
            </a>
          ))}
        </nav>

        <div className='hidden md:block'>
          <Link to='/login' className='inline-flex items-center rounded-xl bg-gradient-to-r from-sky-600 via-cyan-500 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition duration-300 hover:scale-105'>
            Coba Demo
          </Link>
        </div>

        <button className='inline-flex rounded-lg p-2 text-slate-700 md:hidden' onClick={() => setOpen((v) => !v)} aria-label='Buka menu'>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className='space-y-2 border-t border-slate-200/80 bg-white px-4 py-4 md:hidden'>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)} className='block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100'>
              {item.label}
            </a>
          ))}
          <Link to='/login' onClick={() => setOpen(false)} className='mt-2 block rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white'>
            Coba Demo
          </Link>
        </div>
      )}
    </header>
  );
}
