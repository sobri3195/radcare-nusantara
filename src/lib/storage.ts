import { seedData } from '../data/seed';
const KEY='radcare_nusantara_app_data';
const clone=(x:any)=>JSON.parse(JSON.stringify(x));
const ensure=(data:any)=>({
  ...data,
  innovation:{
    symptomDiary:[],followUpReminders:[],therapyMilestones:[],doseChecklists:[],capacityPlans:[],noShowRecords:[],reviewBoardItems:[],redFlagAlerts:[],educationArticles:[],consentRecords:[],continuityScores:[],
    caregiverSummaries:[],timelineEvents:[],bottleneckInsights:[],aiCaseSummaries:[],
    ...(data?.innovation||{})
  }
});
export const loadAppData=()=>{const raw=localStorage.getItem(KEY); if(!raw){const s=clone(seedData); localStorage.setItem(KEY,JSON.stringify(s)); return s;} try{return ensure(JSON.parse(raw));}catch{return clone(seedData);}};
export const saveAppData=(data:any)=>localStorage.setItem(KEY,JSON.stringify(ensure(data)));
export const resetAppData=()=>saveAppData(clone(seedData));
export const exportJSON=()=>JSON.stringify(loadAppData(),null,2);
export const importJSON=(txt:string)=>saveAppData(ensure(JSON.parse(txt)));
export const createRecord=(entity:string,payload:any)=>{const d=loadAppData(); d[entity]=d[entity]||[]; d[entity].push(payload); saveAppData(d); return payload;};
export const updateRecord=(entity:string,id:string,payload:any)=>{const d=loadAppData(); d[entity]=(d[entity]||[]).map((x:any)=>x.id===id?{...x,...payload,updatedAt:new Date().toISOString()}:x); saveAppData(d);};
export const deleteRecord=(entity:string,id:string)=>{const d=loadAppData(); d[entity]=(d[entity]||[]).filter((x:any)=>x.id!==id); saveAppData(d);};

export const exportCSV=(entity:string)=>{const rows=loadAppData()[entity]||[]; if(!rows.length) return ''; const keys=Object.keys(rows[0]); return [keys.join(','),...rows.map((r:any)=>keys.map(k=>JSON.stringify(r[k]??'')).join(','))].join('\n');};
export const getRecordById=(entity:string,id:string)=>loadAppData()[entity]?.find((x:any)=>x.id===id);
export const addAuditLog=(action:string,entity:string,entityId:string,description:string)=>{const d=loadAppData(); d.auditLogs=d.auditLogs||[]; d.auditLogs.unshift({id:`audit_${Date.now()}`,timestamp:new Date().toISOString(),role:d.settings?.selectedRole||'Admin Rumah Sakit',action,entity,entityId,description}); saveAppData(d);};
