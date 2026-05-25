import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ToastNotification from '../components/ui/ToastNotification';
import { createRecord, loadAppData, updateRecord } from '../lib/storage';
import { makeId } from '../lib/id';

export default function PatientFormPage() {
  const { id } = useParams();
  const nav = useNavigate();
  const existing = loadAppData().patients.find((x: any) => x.id === id);
  const [toast, setToast] = useState('');
  const [error, setError] = useState('');
  const [f, setF] = useState<any>(existing || { patientId: '', name: '', age: 45, gender: 'Perempuan', diagnosis: '', cancerType: '', stage: 'II', doctorName: '', status: 'Stabil', riskLevel: 'Rendah', treatmentProgress: 0, totalSessions: 25, completedSessions: 0, nextSchedule: new Date().toISOString().slice(0,10), createdAt: new Date().toISOString() });

  const submit = (e: any) => {
    e.preventDefault();
    if (!f.name || !f.patientId || !f.diagnosis) return setError('Nama, ID Pasien, dan diagnosis wajib diisi.');
    setError('');
    id ? updateRecord('patients', id, f) : createRecord('patients', { ...f, id: makeId('p') });
    setToast(id ? 'Data pasien diperbarui.' : 'Pasien baru berhasil ditambahkan.');
    setTimeout(() => nav('/patients'), 600);
  };

  const fields = ['patientId','name','age','gender','diagnosis','cancerType','stage','doctorName','status','riskLevel','totalSessions','completedSessions','treatmentProgress','nextSchedule'];
  return <form onSubmit={submit} className='space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm'>
    <div><h1 className='text-2xl font-bold'>{id ? 'Edit Pasien' : 'Tambah Pasien'}</h1><p className='text-sm text-slate-600'>Lengkapi data utama pasien untuk kebutuhan dashboard monitoring radioterapi.</p></div>
    {error && <div className='rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700'>{error}</div>}
    <div className='grid gap-3 md:grid-cols-2'>{fields.map(k => <div key={k}><label className='mb-1 block text-xs font-semibold uppercase text-slate-500'>{k}</label><input type={k.includes('age')||k.includes('Sessions')||k.includes('Progress') ? 'number' : 'text'} className='h-11 w-full rounded-xl border border-slate-200 px-3' value={f[k]} onChange={e=>setF({...f,[k]:e.target.value})} placeholder={`Masukkan ${k}`} /></div>)}</div>
    <button className='h-12 w-full rounded-xl bg-blue-600 font-semibold text-white'>{id ? 'Simpan Perubahan' : 'Simpan Pasien'}</button>
    {toast && <ToastNotification message={toast} onClose={()=>setToast('')} />}
  </form>;
}
