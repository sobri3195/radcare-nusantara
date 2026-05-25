import { Activity, BarChart3, BrainCircuit, CalendarClock, ClipboardList, Gauge, ShieldAlert, Stethoscope } from 'lucide-react';
import LandingFeatureCard from './LandingFeatureCard';
const items=[
['Patient Monitoring','Pemantauan kondisi pasien dan monitoring gejala pasca terapi secara berkelanjutan.','Clinical Core',Activity],
['Treatment Progress','Visualisasi Progress terapi per pasien agar evaluasi lebih cepat dan akurat.','Clinical Core',Gauge],
['Jadwal Radioterapi','Manajemen Jadwal Terapi harian, tertunda, dan prioritas secara ringkas.','Operations',CalendarClock],
['Risk Scoring','Skoring Risiko Klinis berbasis indikator untuk deteksi dini prioritas pasien.','Safety',ShieldAlert],
['Side Effect Tracking','Monitoring efek samping terstruktur untuk mempercepat tindakan klinis.','Clinical Review',ClipboardList],
['Specialist Review','Kolaborasi Catatan Klinis antar dokter spesialis dalam satu workspace.','Collaboration',Stethoscope],
['AI Assistant Lokal','AI Assistant berbasis rule lokal untuk insight demo yang aman.','Intelligence',BrainCircuit],
['Reports & Analytics','Laporan dan analytics operasional untuk evaluasi layanan radioterapi.','Management',BarChart3],
] as const;
export default function LandingFeatures(){return <section id='fitur' className='section-wrap'><div className='section-head'><h2>Fitur utama untuk monitoring radioterapi berkelanjutan</h2><p>Fitur dirancang untuk menghubungkan kebutuhan klinis, operasional, dan manajemen dalam satu platform.</p></div><div className='grid gap-5 md:grid-cols-2 xl:grid-cols-4'>{items.map(([title,desc,badge,icon])=><LandingFeatureCard key={title} title={title} desc={desc} badge={badge} icon={icon}/>)}</div></section>}
