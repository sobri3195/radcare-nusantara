import { Activity, AlertTriangle, BookOpen, Bot, CalendarClock, CheckSquare, ClipboardCheck, Flame, GitBranch, HeartPulse, ListOrdered, Map, ShieldAlert, TimerReset, Users, ScanSearch, Route, Building2, FileCheck2, GaugeCircle } from 'lucide-react';
export const innovationFeatures=[
{slug:'journey-map',name:'Journey Map',category:'Patient Experience',icon:Map,description:'Perjalanan terapi end-to-end.'},
{slug:'risk-heatmap',name:'Risk Heatmap',category:'Clinical Intelligence',icon:Flame,description:'Skor risiko dan heatmap pasien.'},
{slug:'adherence-score',name:'Adherence Score',category:'Clinical Intelligence',icon:GaugeCircle,description:'Skor kepatuhan terapi pasien.'},
{slug:'side-effect-trend',name:'Side Effect Trend',category:'Clinical Intelligence',icon:HeartPulse,description:'Tren efek samping mingguan.'},
{slug:'priority-queue',name:'Priority Queue',category:'Operational Insight',icon:ListOrdered,description:'Antrean prioritas klinis otomatis.'},
{slug:'symptom-diary',name:'Symptom Diary',category:'Patient Experience',icon:ClipboardCheck,description:'Jurnal gejala harian pasien.'},
{slug:'follow-up-reminder',name:'Follow-Up Reminder',category:'Safety & Compliance',icon:CalendarClock,description:'Pengingat follow-up cerdas.'},
{slug:'therapy-milestone',name:'Therapy Milestone',category:'Patient Experience',icon:CheckSquare,description:'Badge milestone terapi.'},
{slug:'dose-checklist',name:'Dose Checklist',category:'Safety & Compliance',icon:ScanSearch,description:'Checklist dose plan fisikawan.'},
{slug:'capacity-planner',name:'Capacity Planner',category:'Operational Insight',icon:Building2,description:'Planner kapasitas ruangan.'},
{slug:'no-show-tracker',name:'No-Show Tracker',category:'Operational Insight',icon:TimerReset,description:'Tracker no-show dan delay.'},
{slug:'review-board',name:'Review Board',category:'Safety & Compliance',icon:Users,description:'Review lintas profesi berbasis kanban.'},
{slug:'ai-case-summary',name:'AI Case Summary',category:'AI Simulation',icon:Bot,description:'Generator ringkasan kasus rule-based.'},
{slug:'red-flag-alert',name:'Red Flag Alert',category:'Safety & Compliance',icon:ShieldAlert,description:'Deteksi alert kondisi kritikal.'},
{slug:'education-library',name:'Education Library',category:'Patient Experience',icon:BookOpen,description:'Library edukasi pasien.'},
{slug:'caregiver-view',name:'Caregiver View',category:'Patient Experience',icon:Users,description:'Dashboard pendamping keluarga.'},
{slug:'timeline-replay',name:'Timeline Replay',category:'Clinical Intelligence',icon:Route,description:'Replay timeline klinis terintegrasi.'},
{slug:'bottleneck-insight',name:'Bottleneck Insight',category:'Operational Insight',icon:Activity,description:'Insight hambatan operasional.'},
{slug:'consent-tracker',name:'Consent Tracker',category:'Safety & Compliance',icon:FileCheck2,description:'Pelacak kelengkapan consent.'},
{slug:'continuity-score',name:'Continuity Score',category:'Clinical Intelligence',icon:AlertTriangle,description:'Skor kesinambungan perawatan.'},
]
export const categories=['All','Patient Experience','Clinical Intelligence','Operational Insight','Safety & Compliance','AI Simulation']
