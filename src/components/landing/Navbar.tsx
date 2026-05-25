import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Fitur', href: '#fitur' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Demo', href: '#demo' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-white/30 bg-slate-950/60 backdrop-blur-xl'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-white md:px-6'>
        <a href='#beranda' className='text-lg font-semibold tracking-wide'>RADCARE</a>

        <ul className='hidden items-center gap-6 text-sm md:flex'>
          {menuItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='transition hover:text-cyan-300'>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className='hidden md:block'>
          <Link to='/demo' className='rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:scale-105 hover:bg-cyan-300'>
            Coba Demo
          </Link>
        </div>

        <button className='md:hidden' onClick={() => setOpen((v) => !v)} aria-label='toggle menu'>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className='border-t border-white/20 bg-slate-950/95 px-4 py-3 text-white md:hidden'>
          <div className='flex flex-col gap-3'>
            {menuItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className='text-sm'>
                {item.label}
              </a>
            ))}
            <Link to='/demo' onClick={() => setOpen(false)} className='rounded-xl bg-cyan-400 px-4 py-2 text-center text-sm font-semibold text-slate-900'>
              Coba Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
