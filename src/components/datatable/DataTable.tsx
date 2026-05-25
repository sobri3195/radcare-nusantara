import { useMemo, useState } from 'react';

type Column<T> = { key: keyof T | string; label: string; render?: (row: T) => React.ReactNode };

export default function DataTable<T extends Record<string, any>>({ rows, columns, searchKeys = [] }: { rows: T[]; columns: Column<T>[]; searchKeys?: string[] }) {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => !q ? rows : rows.filter((r) => searchKeys.some((k) => String(r[k] ?? '').toLowerCase().includes(q.toLowerCase()))), [rows, q, searchKeys]);
  return <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><input className="mb-3 h-11 w-full rounded-xl border px-3" placeholder="Cari data..." value={q} onChange={(e) => setQ(e.target.value)} /><div className="hidden md:block overflow-auto"><table className="w-full text-sm"><thead className="sticky top-0 bg-slate-50"><tr>{columns.map((c) => <th key={String(c.key)} className="px-3 py-2 text-left font-semibold text-slate-700">{c.label}</th>)}</tr></thead><tbody>{filtered.map((row, i) => <tr key={i} className="border-t hover:bg-slate-50">{columns.map((c) => <td key={String(c.key)} className="px-3 py-2">{c.render ? c.render(row) : String(row[c.key as string] ?? '-')}</td>)}</tr>)}</tbody></table></div><div className="md:hidden space-y-3">{filtered.map((row, i) => <div key={i} className="rounded-xl border p-3">{columns.slice(0, 4).map((c) => <div key={String(c.key)} className="text-sm"><span className="text-slate-500">{c.label}: </span>{c.render ? c.render(row) : String(row[c.key as string] ?? '-')}</div>)}</div>)}</div></div>;
}
