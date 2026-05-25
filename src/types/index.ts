export type Role = 'Pasien' | 'Dokter Spesialis' | 'Fisikawan Medis' | 'Admin Rumah Sakit' | 'Manajemen';
export type RiskLevel = 'Rendah' | 'Sedang' | 'Tinggi' | string;
export type PatientStatus = 'Stabil' | 'Perlu Evaluasi' | 'Efek Samping' | 'Selesai' | 'Sedang terapi' | 'Perlu evaluasi' | string;
export interface Patient { [key:string]: any; id?:string; patientId?:string; name?:string; age?:number; gender?:string; diagnosis?:string; cancerType?:string; stage?:string; doctorName?:string; status?:PatientStatus; riskLevel?:RiskLevel; treatmentProgress?:number; totalSessions?:number; completedSessions?:number; nextSchedule?:string; createdAt?:string; }

export interface JourneyPhase { id:string; patientId:string; phase:string; status:'pending'|'current'|'done'; note?:string; }
export interface RiskHeatmapItem { patientId:string; patientName:string; diagnosis:string; riskScore:number; riskLevel:'Rendah'|'Sedang'|'Tinggi'|'Kritis'; factors:string[]; }
export interface AdherenceScore { patientId:string; score:number; category:'Baik'|'Perlu Perhatian'|'Risiko Dropout'; factors:string[]; }
export interface SideEffectTrend { id:string; patientId:string; date:string; symptom:string; severity:number; }
export interface PriorityQueueItem { id:string; patientId:string; score:number; priority:'Tinggi'|'Sedang'|'Rendah'; reasons:string[]; reviewed:boolean; assignee?:string; note?:string; }
export interface SymptomDiaryEntry { id:string; patientId:string; date:string; pain:number; nausea:number; fatigue:number; appetite:string; sleepQuality:string; note:string; }
export interface FollowUpReminder { id:string; patientId:string; title:string; dueDate:string; priority:'Tinggi'|'Sedang'|'Rendah'; status:'todo'|'done'|'snoozed'; }
export interface TherapyMilestone { id:string; patientId:string; badge:string; achievedAt:string; progress:number; }
export interface DoseChecklist { id:string; patientId:string; planId:string; completedItems:string[]; qaStatus:'Pending'|'Checked'|'Approved'; technicalNote:string; }
export interface CapacityPlan { id:string; date:string; room:string; capacity:number; used:number; delayedCount:number; }
export interface NoShowRecord { id:string; patientId:string; scheduleId:string; date:string; reason:string; type:'No-Show'|'Delay'; }
export interface ReviewBoardItem { id:string; patientId:string; title:string; reviewerRole:string; status:'Menunggu'|'Sedang Direview'|'Perlu Revisi'|'Selesai'; comments:string[]; }
export interface AICaseSummary { id:string; patientId:string; summary:string; riskLevel:string; followUp:string; createdAt:string; }
export interface RedFlagAlert { id:string; patientId:string; reasons:string[]; severity:'High'|'Medium'; acknowledged:boolean; reviewer?:string; }
export interface EducationArticle { id:string; title:string; category:string; readingTime:number; content:string; shared:boolean; }
export interface CaregiverSummary { id:string; patientId:string; nextSchedule:string; progress:number; reminder:string; facilityContact:string; }
export interface TimelineEvent { id:string; patientId:string; date:string; type:string; title:string; critical:boolean; }
export interface BottleneckInsight { id:string; date:string; score:number; title:string; recommendation:string; trend:'Naik'|'Turun'|'Stabil'; }
export interface ConsentRecord { id:string; patientId:string; status:'Belum Ada'|'Draft'|'Perlu Review'|'Lengkap'|'Diarsipkan'; docId?:string; updatedAt:string; }
export interface ContinuityScore { id:string; patientId:string; score:number; category:'Baik'|'Perlu Perhatian'|'Risiko Terputus'; gaps:string[]; }

export interface AppData { [key:string]: any; patients:any[]; users:any[]; schedules:any[]; treatmentPlans:any[]; treatmentSessions:any[]; monitoringNotes:any[]; doctorNotes:any[]; physicsNotes:any[]; sideEffects:any[]; documents:any[]; reports:any[]; auditLogs:any[]; aiInsights:any[]; settings:any; innovation:{ symptomDiary:SymptomDiaryEntry[]; followUpReminders:FollowUpReminder[]; therapyMilestones:TherapyMilestone[]; doseChecklists:DoseChecklist[]; capacityPlans:CapacityPlan[]; noShowRecords:NoShowRecord[]; reviewBoardItems:ReviewBoardItem[]; redFlagAlerts:RedFlagAlert[]; educationArticles:EducationArticle[]; consentRecords:ConsentRecord[]; continuityScores:ContinuityScore[]; caregiverSummaries:CaregiverSummary[]; timelineEvents:TimelineEvent[]; bottleneckInsights:BottleneckInsight[]; aiCaseSummaries:AICaseSummary[]; } }
