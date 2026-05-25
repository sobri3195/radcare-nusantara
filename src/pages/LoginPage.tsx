import { ArrowRight, BriefcaseMedical, ShieldPlus, Stethoscope, UserRound, UsersRound } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { createRecord } from '../lib/storage';

type RoleItem = {
  name: string;
  description: string;
  icon: typeof UserRound;
};

const roles: RoleItem[] = [
  { name: 'Pasien', description: 'Pantau jadwal terapi, gejala, dan catatan perawatan.', icon: UserRound },
  { name: 'Dokter Spesialis', description: 'Review pasien, evaluasi risiko, dan catatan klinis.', icon: Stethoscope },
  { name: 'Fisikawan Medis', description: 'Pantau rencana terapi, dosis, dan sesi radioterapi.', icon: ShieldPlus },
  { name: 'Admin Rumah Sakit', description: 'Kelola pasien, jadwal, petugas, dan operasional.', icon: BriefcaseMedical },
  { name: 'Manajemen', description: 'Lihat laporan, performa layanan, dan statistik layanan.', icon: UsersRound },
];

export default function LoginPage() {
  const nav = useNavigate();
  const [toast, setToast] = useState<string | null>(null);

  const handleSelectRole = (role: string) => {
    localStorage.setItem('selectedRole', role);
    createRecord('auditLogs', {
      id: `log-${Date.now()}`,
      date: new Date().toISOString(),
      user: role,
      action: 'LOGIN',
      entity: 'auth',
      description: `${role} masuk ke dashboard demo`,
    });

    setToast(`Berhasil masuk sebagai ${role}`);
    setTimeout(() => nav('/dashboard'), 550);
    setTimeout(() => setToast(null), 1800);
  };

  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-emerald-700 p-6 text-white'>
      <div className='pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:32px_32px]' />

      <div className='relative mx-auto max-w-6xl space-y-6'>
        <div className='rounded-3xl border border-white/30 bg-white/90 p-6 text-slate-900 shadow-2xl backdrop-blur'>
          <span className='inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700'>Demo Mode</span>
          <div className='mt-4 flex items-center gap-3'>
            <Logo />
          </div>
          <h1 className='mt-4 text-3xl font-bold'>Login Demo RADCARE</h1>
          <p className='text-slate-600'>Pilih peran untuk masuk ke dashboard simulasi monitoring radioterapi.</p>
        </div>

        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {roles.map(({ name, description, icon: Icon }) => (
            <button
              key={name}
              onClick={() => handleSelectRole(name)}
              className='group rounded-2xl border border-white/30 bg-white/95 p-5 text-left text-slate-900 shadow-lg transition duration-200 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 active:scale-[0.99]'
            >
              <div className='mb-3 inline-flex rounded-xl bg-slate-100 p-2 text-blue-700'>
                <Icon className='h-5 w-5' />
              </div>
              <h3 className='font-semibold'>{name}</h3>
              <p className='mt-1 text-sm text-slate-600'>{description}</p>
              <span className='mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600'>
                Masuk Dashboard <ArrowRight className='h-4 w-4 transition group-hover:translate-x-1' />
              </span>
            </button>
          ))}
        </div>
      </div>

      {toast && (
        <div className='fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-2xl'>
          {toast}
        </div>
      )}
    </div>
  );
}
