import { Building2, Stethoscope, User, UserCog, ShieldPlus } from 'lucide-react';

const roles = [
  { title: 'Pasien', icon: User, desc: 'Memantau progress terapi, Jadwal Terapi, dan Monitoring efek samping secara mudah.' },
  { title: 'Dokter Spesialis', icon: Stethoscope, desc: 'Meninjau Risiko Klinis, Catatan Klinis, dan rekomendasi tindak lanjut pasien.' },
  { title: 'Fisikawan Medis', icon: ShieldPlus, desc: 'Memonitor kepatuhan rencana dosis serta validasi alur teknis radioterapi.' },
  { title: 'Admin Rumah Sakit', icon: UserCog, desc: 'Mengelola data operasional Demo Mode, jadwal, dan koordinasi lintas tim.' },
  { title: 'Manajemen', icon: Building2, desc: 'Melihat dashboard KPI, insight operasional, serta kualitas layanan radioterapi.' },
];
export default function LandingRoleSection() {return <section className='section-wrap'><div className='section-head'><h2>Dirancang untuk seluruh ekosistem radioterapi</h2><p>Setiap peran mendapatkan tampilan Dashboard Klinis yang fokus, jelas, dan siap mendukung keputusan.</p></div><div className='grid gap-5 md:grid-cols-2 lg:grid-cols-5'>{roles.map(({title,icon:Icon,desc})=><article key={title} className='premium-card'><Icon className='h-9 w-9 text-cyan-600'/><h3>{title}</h3><p>{desc}</p></article>)}</div></section>}
