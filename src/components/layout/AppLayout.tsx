import { Activity, Bot, CalendarDays, ClipboardList, FileText, LayoutDashboard, LogOut, Settings, ShieldCheck, Stethoscope, UserRound, Users } from 'lucide-react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../Logo';

const menus = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/patients', label: 'Pasien', icon: Users },
  { to: '/schedule', label: 'Jadwal Terapi', icon: CalendarDays },
  { to: '/monitoring', label: 'Monitoring', icon: Activity },
  { to: '/treatment', label: 'Rencana Terapi', icon: ShieldCheck },
  { to: '/notes', label: 'Catatan Klinis', icon: ClipboardList },
  { to: '/ai-assistant', label: 'AI Assistant', icon: Bot },
  { to: '/reports', label: 'Laporan', icon: FileText },
  { to: '/documents', label: 'Dokumen', icon: FileText },
  { to: '/settings', label: 'Pengaturan', icon: Settings },
  { to: '/audit-logs', label: 'Audit Log', icon: Stethoscope },
];

const mobileMenus = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/patients', label: 'Pasien', icon: Users },
  { to: '/schedule', label: 'Jadwal', icon: CalendarDays },
  { to: '/ai-assistant', label: 'AI', icon: Bot },
  { to: '/reports', label: 'Laporan', icon: FileText },
];

export default function AppLayout() {
  const role = localStorage.getItem('selectedRole') || 'Tim Klinis';
  const location = useLocation();
  const nav = useNavigate();

  return <div className='min-h-screen bg-slate-50 text-slate-800 lg:flex'>
    <aside className='hidden w-80 border-r border-slate-200 bg-white/95 px-4 py-5 lg:flex lg:flex-col'>
      <Logo />
      <div className='mt-4 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-cyan-50 p-3'>
        <p className='text-xs text-slate-500'>Role Aktif</p><p className='font-semibold'>{role}</p>
      </div>
      <nav className='mt-5 flex-1 space-y-1'>
        {menus.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to;
          return <Link key={to} to={to} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${active ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}`}>
            <Icon className='h-4 w-4' />{label}
          </Link>;
        })}
      </nav>
      <button onClick={() => nav('/login')} className='flex h-11 items-center justify-center gap-2 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50'><LogOut className='h-4 w-4' />Keluar Demo</button>
    </aside>

    <main className='flex-1 pb-28 lg:pb-6'>
      <header className='sticky top-0 z-10 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur lg:px-6'>
        <div className='flex items-center justify-between'><div className='lg:hidden'><Logo small /></div><div className='hidden lg:block text-sm text-slate-600'>Continuous Specialist Monitoring</div><div className='inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs'><UserRound className='h-3.5 w-3.5' />{role}</div></div>
      </header>
      <div className='p-4 lg:p-6'><Outlet /></div>

      <nav className='fixed bottom-0 left-0 right-0 z-20 grid grid-cols-5 border-t border-slate-200 bg-white/90 px-2 py-2 backdrop-blur lg:hidden'>
        {mobileMenus.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to;
          return <Link key={to} to={to} className={`flex flex-col items-center gap-1 rounded-xl py-2 text-[11px] ${active ? 'text-blue-600' : 'text-slate-500'}`}><Icon className={`h-4 w-4 ${active ? 'scale-110' : ''}`} />{label}</Link>;
        })}
      </nav>
    </main>
  </div>;
}
