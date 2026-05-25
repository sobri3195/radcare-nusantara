export type Role = 'Pasien' | 'Dokter Spesialis' | 'Fisikawan Medis' | 'Admin Rumah Sakit' | 'Manajemen';
export type RiskLevel = 'Rendah' | 'Sedang' | 'Tinggi' | string;
export type PatientStatus = 'Stabil' | 'Perlu Evaluasi' | 'Efek Samping' | 'Selesai' | 'Sedang terapi' | 'Perlu evaluasi' | string;
export interface Patient { [key:string]: any; id?:string; patientId?:string; name?:string; age?:number; gender?:string; diagnosis?:string; cancerType?:string; stage?:string; doctorName?:string; status?:PatientStatus; riskLevel?:RiskLevel; treatmentProgress?:number; totalSessions?:number; completedSessions?:number; nextSchedule?:string; createdAt?:string; }
export interface AppData { [key:string]: any; patients:any[]; users:any[]; schedules:any[]; treatmentPlans:any[]; treatmentSessions:any[]; monitoringNotes:any[]; doctorNotes:any[]; physicsNotes:any[]; sideEffects:any[]; documents:any[]; reports:any[]; auditLogs:any[]; aiInsights:any[]; settings:any }
