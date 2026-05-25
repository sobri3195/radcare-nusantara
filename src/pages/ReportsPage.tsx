import { loadAppData } from '../lib/storage';
export default function ReportsPage(){const d=loadAppData(); return <div className='rounded-2xl bg-white p-4 shadow'>Reports page modern. Total data: {Object.keys(d).length}</div>}
