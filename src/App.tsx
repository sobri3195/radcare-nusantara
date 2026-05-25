import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import PatientsPage from './pages/PatientsPage';
import PatientFormPage from './pages/PatientFormPage';
import PatientDetailPage from './pages/PatientDetailPage';
import SchedulePage from './pages/SchedulePage';
import MonitoringPage from './pages/MonitoringPage';
import TreatmentPage from './pages/TreatmentPage';
import NotesPage from './pages/NotesPage';
import AIAssistantPage from './pages/AIAssistantPage';
import ReportsPage from './pages/ReportsPage';
import DocumentsPage from './pages/DocumentsPage';
import SettingsPage from './pages/SettingsPage';
import AuditLogsPage from './pages/AuditLogsPage';
import LandingPage from './pages/LandingPage';
export default function App(){return <Routes><Route path='/' element={<LandingPage/>}/><Route path='/login' element={<LoginPage/>}/><Route element={<AppLayout/>}><Route path='/dashboard' element={<DashboardPage/>}/><Route path='/patients' element={<PatientsPage/>}/><Route path='/patients/new' element={<PatientFormPage/>}/><Route path='/patients/:id' element={<PatientDetailPage/>}/><Route path='/patients/:id/edit' element={<PatientFormPage/>}/><Route path='/schedule' element={<SchedulePage/>}/><Route path='/monitoring' element={<MonitoringPage/>}/><Route path='/treatment' element={<TreatmentPage/>}/><Route path='/notes' element={<NotesPage/>}/><Route path='/ai-assistant' element={<AIAssistantPage/>}/><Route path='/reports' element={<ReportsPage/>}/><Route path='/documents' element={<DocumentsPage/>}/><Route path='/settings' element={<SettingsPage/>}/><Route path='/audit-logs' element={<AuditLogsPage/>}/></Route><Route path='*' element={<Navigate to='/login'/>}/></Routes>}
