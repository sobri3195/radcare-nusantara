import { addAuditLog } from './storage';
const date = () => new Date().toISOString().slice(0,10);
export const exportToCSV = (filename:string, rows:any[], columns:{key:string;label:string}[]) => {
  const header = columns.map(c=>c.label).join(',');
  const body = rows.map(r=>columns.map(c=>JSON.stringify(r[c.key] ?? '')).join(',')).join('\n');
  const csv = [header, body].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${filename}-${date()}.csv`; a.click();
  addAuditLog('Export CSV','export',filename,`Export ${rows.length} baris`);
};
export const exportToXLSX = (filename:string, rows:any[], columns:{key:string;label:string}[]) => exportToCSV(filename, rows, columns);
export const exportToPDF = (filename:string, _title:string, rows:any[], columns:{key:string;label:string}[]) => exportToCSV(filename, rows, columns);
