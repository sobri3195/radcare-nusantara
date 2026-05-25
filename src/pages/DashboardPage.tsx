import { Activity, AlertTriangle, CalendarClock, FileClock, HeartPulse, ShieldAlert, Stethoscope, UserCheck } from 'lucide-react';
import AIInsightCard from '../components/dashboard/AIInsightCard';
import ClinicalOverviewChart from '../components/dashboard/ClinicalOverviewChart';
import DashboardHero from '../components/dashboard/DashboardHero';
import DashboardStatCard from '../components/dashboard/DashboardStatCard';
import HighRiskPatients from '../components/dashboard/HighRiskPatients';
import QuickActions from '../components/dashboard/QuickActions';
import RecentActivityTimeline from '../components/dashboard/RecentActivityTimeline';
import TodaySchedule from '../components/dashboard/TodaySchedule';
import TreatmentProgressOverview from '../components/dashboard/TreatmentProgressOverview';
import { getRoleFocus } from '../components/dashboard/RoleBasedDashboard';
import { loadAppData } from '../lib/storage';

const iconMap = [UserCheck, CalendarClock, ShieldAlert, Activity, FileClock, AlertTriangle, HeartPulse, Stethoscope];
const accents = ['bg-blue-600','bg-cyan-600','bg-rose-600','bg-emerald-600','bg-indigo-600','bg-amber-600','bg-fuchsia-600','bg-slate-700'];

export default function DashboardPage() {
  const d = loadAppData();
  const role = localStorage.getItem('selectedRole') || 'Dokter Spesialis';
  const today = new Date().toISOString().slice(0, 10);
  const patientMap = Object.fromEntries(d.patients.map((p: any) => [p.id, p]));
  const stats = [
    ['Total Pasien Aktif', d.patients.filter((p: any) => p.status !== 'Selesai').length],
    ['Jadwal Hari Ini', d.schedules.filter((s: any) => s.date === today).length],
    ['Pasien Risiko Tinggi', d.patients.filter((p: any) => p.riskLevel === 'Tinggi').length],
    ['Sesi Terapi Selesai', d.treatmentSessions.length],
    ['Catatan Belum Direview', d.monitoringNotes.filter((x: any) => !x.reviewed).length],
    ['Jadwal Ditunda', d.schedules.filter((x: any) => x.status === 'Ditunda').length],
    ['Efek Samping Aktif', d.patients.filter((p: any) => p.status === 'Efek Samping').length],
    ['Review Spesialis', d.doctorNotes.length],
  ];
  const insight = `${stats[2][1]} pasien memiliki risiko tinggi. ${stats[5][1]} jadwal tertunda perlu ditinjau. Prioritaskan review pasien dengan efek samping berat.`;
  const clinical = ['Stabil','Perlu Evaluasi','Efek Samping','Selesai'].map((s, i)=>({label:s,value:d.patients.filter((p:any)=>p.status===s).length,color:['bg-emerald-500','bg-amber-500','bg-rose-500','bg-blue-500'][i]}));
  const highRisk = d.patients.filter((p:any)=>p.riskLevel==='Tinggi').slice(0,4);
  const todaySchedules = d.schedules.filter((s:any)=>s.date===today).slice(0,5);
  const avgProgress = Math.round(d.patients.reduce((a:number,b:any)=>a+(b.treatmentProgress||0),0)/Math.max(1,d.patients.length));

  return <div className='space-y-4 md:space-y-5'>
    <DashboardHero role={role} focus={getRoleFocus(role)} />
    <section className='grid gap-3 md:grid-cols-2 xl:grid-cols-4'>{stats.map(([k, v], i) => {const I = iconMap[i]; return <DashboardStatCard key={String(k)} label={String(k)} value={Number(v)} icon={I} accent={accents[i]} trend='+2.3% dari minggu lalu' progress={Math.min(100, 35 + i * 8)} />;})}</section>
    <QuickActions />
    <section className='grid gap-4 xl:grid-cols-3'><div className='space-y-4 xl:col-span-2'><ClinicalOverviewChart items={clinical as any} /><TreatmentProgressOverview progress={avgProgress} completed={d.treatmentSessions.length} delayed={stats[5][1]} topPatients={d.patients.slice(0,3).map((p:any)=>({name:p.name,value:p.treatmentProgress||0}))} /><TodaySchedule items={todaySchedules} patientMap={patientMap} /></div><div className='space-y-4'><AIInsightCard text={insight} /><HighRiskPatients patients={highRisk} /><RecentActivityTimeline items={(d.auditLogs?.length?d.auditLogs:[{id:'x1',action:'Sinkronisasi demo',description:'Audit log lokal aktif'}]).slice(0,6)} /></div></section>
  </div>;
}
