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
    <header className='sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6'>
        <a href='#beranda'><Logo small /></a>
        <nav className='hidden items-center gap-6 md:flex'>
          {navItems.map((item) => <a key={item.label} href={item.href} className='text-sm text-slate-700 transition hover:text-cyan-700'>{item.label}</a>)}
        </nav>
        <div className='hidden md:block'>
          <Link to='/login' className='rounded-xl bg-gradient-to-r from-sky-600 to-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105'>Coba Demo</Link>
        </div>
        <button className='md:hidden' onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className='space-y-3 border-t border-white/60 bg-white/95 px-4 py-4 md:hidden'>{navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)} className='block text-sm text-slate-700'>{item.label}</a>)}<Link to='/login' className='block rounded-xl bg-slate-900 px-4 py-2 text-center text-sm font-semibold text-white'>Coba Demo</Link></div>}
    </header>
  );
}
