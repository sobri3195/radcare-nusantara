import { loadAppData } from '../lib/storage';
export default function SchedulePage(){const d=loadAppData(); return <div className='rounded-2xl bg-white p-4 shadow'>Schedule page modern. Total data: {Object.keys(d).length}</div>}
