import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { innovationFeatures } from './config';
import { addAuditLog, loadAppData, saveAppData } from '../../lib/storage';
import { exportToCSV, exportToPDF, exportToXLSX } from '../../lib/export';

type Props = { forcedSlug?: string };

const map: Record<string, string> = {
  'symptom-diary': 'symptomDiary',
  'follow-up-reminder': 'followUpReminders',
  'therapy-milestone': 'therapyMilestones',
  'dose-checklist': 'doseChecklists',
  'capacity-planner': 'capacityPlans',
  'no-show-tracker': 'noShowRecords',
  'review-board': 'reviewBoardItems',
  'red-flag-alert': 'redFlagAlerts',
  'education-library': 'educationArticles',
  'consent-tracker': 'consentRecords',
  'caregiver-view': 'caregiverSummaries',
  'timeline-replay': 'timelineEvents',
  'bottleneck-insight': 'bottleneckInsights',
  'ai-case-summary': 'aiCaseSummaries',
};

export default function InnovationFeaturePage({ forcedSlug }: Props) {
  const { slug: routeSlug = '' } = useParams();
  const slug = forcedSlug ?? routeSlug;
  const feature = innovationFeatures.find((x) => x.slug === slug);
  const [tick, setTick] = useState(0);
  const data = loadAppData();
  const rows = useMemo(
    () =>
      map[slug]
        ? (data.innovation?.[map[slug]] || [])
        : data.patients.map((p: any) => ({ patient: p.name, progress: p.treatmentProgress, risk: p.riskLevel })),
    [slug, tick],
  );

  if (!feature) return <div>Fitur tidak ditemukan.</div>;

  const addSample = () => {
    if (!map[slug]) return;
    const d = loadAppData();
    d.innovation[map[slug]].unshift({ id: `${slug}-${Date.now()}`, title: `${feature.name} item`, createdAt: new Date().toISOString(), status: 'Menunggu' });
    saveAppData(d);
    addAuditLog('Tambah data', 'innovation', slug, `Tambah item ${feature.name}`);
    setTick((v) => v + 1);
  };

  const cols = rows[0] ? Object.keys(rows[0]).slice(0, 6).map((k) => ({ key: k, label: k })) : [];
  return <div className='space-y-4 pb-24'><div><h1 className='text-2xl font-bold'>{feature.name}</h1><p className='text-slate-600'>{feature.description} — modul inovasi klinis dengan localStorage dan data dummy.</p></div><div className='grid grid-cols-1 gap-3 md:grid-cols-3'>{['Total Data', 'Aksi Prioritas', 'Status'].map((x, i) => <div key={x} className='rounded-2xl border bg-white p-4 shadow-sm'><p className='text-xs text-slate-500'>{x}</p><p className='text-2xl font-semibold'>{i === 0 ? rows.length : i === 1 ? Math.max(1, Math.round(rows.length / 3)) : 'Aktif'}</p></div>)}</div><div className='flex flex-wrap gap-2'><button onClick={addSample} className='min-h-11 rounded-xl bg-blue-600 px-3 py-2 text-sm text-white'>CTA Utama: Tambah Data</button><button onClick={() => exportToCSV(feature.slug, rows, cols)} className='min-h-11 rounded-xl border px-3 py-2 text-sm'>Export CSV</button><button onClick={() => exportToXLSX(feature.slug, rows, cols)} className='min-h-11 rounded-xl border px-3 py-2 text-sm'>Export XLSX</button><button onClick={() => exportToPDF(feature.slug, feature.name, rows, cols)} className='min-h-11 rounded-xl border px-3 py-2 text-sm'>Export PDF</button></div><div className='hidden overflow-hidden rounded-2xl border bg-white md:block'><table className='w-full text-sm'><thead className='bg-slate-50'>{cols.map((c) => <th key={c.key} className='px-3 py-2 text-left'>{c.label}</th>)}</thead><tbody>{rows.slice(0, 20).map((r: any, i: number) => <tr key={i} className='border-t'>{cols.map((c) => <td key={c.key} className='px-3 py-2'>{String(r[c.key] ?? '-')}</td>)}</tr>)}</tbody></table></div><div className='space-y-2 md:hidden'>{rows.slice(0, 20).map((r: any, i: number) => <div key={i} className='rounded-2xl border bg-white p-3'>{cols.map((c) => <p key={c.key} className='text-sm'><span className='text-slate-500'>{c.label}: </span>{String(r[c.key] ?? '-')}</p>)}</div>)}</div>{rows.length === 0 && <div className='rounded-2xl border border-dashed p-6 text-center text-slate-500'>Belum ada data. Gunakan CTA untuk menambah data dummy.</div>}</div>;
}
