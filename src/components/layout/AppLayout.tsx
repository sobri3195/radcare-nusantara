import { Activity, Bell, Bot, CalendarDays, ClipboardList, FileText, LayoutDashboard, LogOut, Settings, ShieldCheck, Stethoscope, UserRound, Users } from 'lucide-react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import AvatarInitials from '../ui/AvatarInitials';

const menus = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },{ to: '/patients', label: 'Pasien', icon: Users },{ to: '/schedule', label: 'Jadwal Terapi', icon: CalendarDays },{ to: '/monitoring', label: 'Monitoring', icon: Activity },{ to: '/treatment', label: 'Rencana Terapi', icon: ShieldCheck },{ to: '/notes', label: 'Catatan Klinis', icon: ClipboardList },{ to: '/ai-assistant', label: 'AI Assistant', icon: Bot },{ to: '/reports', label: 'Laporan', icon: FileText },{ to: '/documents', label: 'Dokumen', icon: FileText },{ to: '/settings', label: 'Pengaturan', icon: Settings },{ to: '/audit-logs', label: 'Audit Log', icon: Stethoscope },
];
const mobileMenus = [{ to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },{ to: '/patients', label: 'Pasien', icon: Users },{ to: '/schedule', label: 'Jadwal', icon: CalendarDays },{ to: '/ai-assistant', label: 'AI', icon: Bot },{ to: '/reports', label: 'Laporan', icon: FileText }];

export default function AppLayout() {
  const role = localStorage.getItem('selectedRole') || 'Dokter Spesialis';
  const location = useLocation(); const nav = useNavigate();
  const today = new Date().toLocaleDateString('id-ID', { dateStyle: 'full' });
  return <div className='min-h-screen bg-slate-50 text-slate-800 lg:flex'>
    <aside className='hidden w-80 border-r border-slate-200 bg-white/95 p-4 lg:flex lg:flex-col'>
      <Logo />
      <div className='mt-4 rounded-2xl border border-cyan-100 bg-gradient-to-r from-slate-50 to-cyan-50 p-4 shadow-sm'><p className='text-xs text-slate-500'>Role Aktif</p><p className='font-semibold text-slate-900'>{role}</p></div>
      <nav className='mt-4 flex-1 space-y-1.5'>{menus.map(({ to, label, icon: Icon }) => {const active = location.pathname === to; return <Link key={to} to={to} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${active ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md' : 'text-slate-700 hover:bg-slate-100'}`}><Icon className='h-4 w-4' />{label}</Link>;})}</nav>
      <div className='mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600'><p>Mode Demo</p><p>LocalStorage Active</p></div>
      <button onClick={() => nav('/login')} className='mt-3 flex h-11 items-center justify-center gap-2 rounded-xl border border-rose-200 bg-white text-rose-600 transition hover:scale-[1.01] hover:bg-rose-50'><LogOut className='h-4 w-4' />Keluar Demo</button>
    </aside>
    <main className='flex-1 pb-28 lg:pb-6'>
      <header className='sticky top-0 z-10 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur lg:px-6'><div className='flex items-center justify-between gap-4'><div><div className='lg:hidden'><Logo small /></div><p className='hidden text-sm text-slate-600 lg:block'>Continuous Specialist Monitoring</p><p className='hidden text-xs text-slate-500 md:block'>{today}</p></div><div className='flex items-center gap-2'><span className='hidden rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-700 md:inline-flex'>Demo Mode</span><span className='hidden rounded-full bg-slate-100 px-3 py-1 text-xs md:inline-flex'><UserRound className='mr-1 h-3.5 w-3.5' />{role}</span><button className='rounded-full border border-slate-200 p-2'><Bell className='h-4 w-4'/></button><AvatarInitials name='Dokter Spesialis'/></div></div></header>
      <div className='p-4 lg:p-6'><Outlet /></div>
      <nav className='fixed bottom-0 left-0 right-0 z-20 grid grid-cols-5 border-t border-slate-200 bg-white/95 px-2 py-2 backdrop-blur lg:hidden'>{mobileMenus.map(({ to, label, icon: Icon }) => { const active = location.pathname === to; return <Link key={to} to={to} className={`flex min-h-11 flex-col items-center gap-1 rounded-xl py-2 text-[11px] ${active ? 'text-blue-600' : 'text-slate-500'}`}><Icon className={`h-4 w-4 ${active ? 'scale-110' : ''}`} />{label}</Link>;})}</nav>
    </main></div>;
}
