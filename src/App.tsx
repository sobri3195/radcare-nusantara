import { Navigate, Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';
import { useAppStore } from './store/useAppStore';
import { dummyPatients } from './data/dummyPatients';
import { generateReportDraft } from './utils/reportGenerator';
import { LandingPage } from './components/landing/LandingPage';

const roles = [
  ['patient', 'Pasien', '/app'],
  ['doctor', 'Dokter Spesialis', '/dashboard'],
  ['physicist', 'Fisikawan Medis', '/physics'],
  ['admin', 'Admin Rumah Sakit', '/admin'],
  ['manager', 'Manajemen', '/admin/analytics'],
] as const;

const Shell = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className='min-h-screen p-4 md:p-6'>
    <h1 className='text-2xl font-bold'>{title}</h1>
    {children}
  </div>
);

const Login = () => {
  const nav = useNavigate();
  const setRole = useAppStore((s) => s.setRole);
  return (
    <Shell title='Login Demo RADCARE'>
      {roles.map(([r, l, p]) => (
        <button key={r} onClick={() => { setRole(r as any); nav(p); }} className='card my-2 block w-full text-left'>
          {`Masuk sebagai ${l}`}
        </button>
      ))}
    </Shell>
  );
};

const Protected = ({ ok, children }: { ok: boolean; children: React.ReactNode }) => (ok ? <>{children}</> : <Navigate to='/login' />);

const Demo = () => (
  <Shell title='RADCARE Demo Dashboard'>
    <div className='mx-auto mt-4 max-w-sm rounded-3xl border border-slate-200 bg-white p-4 shadow-lg'>
      <p className='text-sm font-semibold text-slate-800'>Pasien: Bpk. Dimas R.</p>
      <p className='mt-2 text-xs text-slate-500'>Monitoring: Stabil, keluhan ringan terkendali.</p>
      <p className='mt-1 text-xs text-slate-500'>Jadwal: Selasa, 10:30 WIB.</p>
      <Link to='/login' className='mt-4 inline-block rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-white'>Masuk ke Demo Role</Link>
    </div>
  </Shell>
);

const Patient = () => <Shell title='App Pasien'>{dummyPatients[0].name} - Fraksi {dummyPatients[0].currentFraction}/{dummyPatients[0].totalFractions}</Shell>;
const Patients = () => <Shell title='Daftar Pasien'>{dummyPatients.map((p) => <Link className='card my-2 block' key={p.id} to={`/dashboard/pasien/${p.id}`}>{p.name}</Link>)}</Shell>;
const PatientDetail = () => { const { id } = useParams(); const p = dummyPatients.find((x) => x.id === id)!; return <Shell title={p.name}><p>{p.diagnosis} {p.stadium}</p></Shell>; };
const Reports = () => <Shell title='AI Report Generator'><pre className='card whitespace-pre-wrap'>{generateReportDraft({ diagnosis: 'Kanker Serviks', stadium: 'IIB', technique: 'EBRT', dose: '50Gy', fraction: '25', effects: 'Mual ringan', response: 'Stabil', followUp: 'Kontrol 2 minggu' })}</pre></Shell>;

export default function App() {
  const r = useAppStore((s) => s.selectedRole);
  const is = (arr: string[]) => !!r && arr.includes(r);
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/demo' element={<Demo />} />
      <Route path='/login' element={<Login />} />
      <Route path='/app' element={<Protected ok={is(['patient', 'caregiver'])}><Patient /></Protected>} />
      <Route path='/app/:slug' element={<Protected ok={is(['patient', 'caregiver'])}><Patient /></Protected>} />
      <Route path='/dashboard' element={<Protected ok={is(['doctor', 'nurse', 'therapist'])}><Patients /></Protected>} />
      <Route path='/dashboard/pasien' element={<Protected ok={is(['doctor', 'nurse', 'therapist'])}><Patients /></Protected>} />
      <Route path='/dashboard/pasien/:id' element={<Protected ok={is(['doctor', 'nurse', 'therapist'])}><PatientDetail /></Protected>} />
      <Route path='/dashboard/reports' element={<Protected ok={is(['doctor'])}><Reports /></Protected>} />
      <Route path='/dashboard/:slug' element={<Protected ok={is(['doctor', 'nurse', 'therapist'])}><Shell title='Dashboard Modul'>Modul</Shell></Protected>} />
      <Route path='/physics' element={<Protected ok={is(['physicist'])}><Shell title='Physics Dashboard'>QA</Shell></Protected>} />
      <Route path='/physics/:slug' element={<Protected ok={is(['physicist'])}><Shell title='Physics Modul'>Modul</Shell></Protected>} />
      <Route path='/admin' element={<Protected ok={is(['admin', 'manager'])}><Shell title='Admin Dashboard'>Operasional</Shell></Protected>} />
      <Route path='/admin/:slug' element={<Protected ok={is(['admin', 'manager'])}><Shell title='Admin Modul'>Modul</Shell></Protected>} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
