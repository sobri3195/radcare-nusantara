import { Bot, CalendarDays, DatabaseBackup, FileText, PlusCircle, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../ui/SectionHeader';
const items = [
  { to: '/patients/new', title: 'Tambah Pasien', desc: 'Buat data pasien baru', icon: PlusCircle },
  { to: '/schedule', title: 'Lihat Jadwal', desc: 'Pantau jadwal terapi', icon: CalendarDays },
  { to: '/monitoring', title: 'Tambah Monitoring', desc: 'Input monitoring harian', icon: Stethoscope },
  { to: '/ai-assistant', title: 'Buka AI Assistant', desc: 'Lihat insight klinis', icon: Bot },
  { to: '/reports', title: 'Export Laporan', desc: 'Ringkasan untuk manajemen', icon: FileText },
  { to: '/settings', title: 'Backup Data', desc: 'Amankan data localStorage', icon: DatabaseBackup },
];
export default function QuickActions(){return <section><SectionHeader title='Aksi Cepat' subtitle='Akses proses utama lebih cepat' /><div className='grid gap-3 sm:grid-cols-2 xl:grid-cols-3'>{items.map(({to,title,desc,icon:Icon})=><Link key={title} to={to} className='group rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md'><Icon className='h-5 w-5 text-cyan-600 transition group-hover:scale-110' /><p className='mt-3 font-semibold'>{title}</p><p className='text-xs text-slate-500'>{desc}</p></Link>)}</div></section>}
