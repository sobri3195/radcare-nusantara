import { Navigate, Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/landing/LandingPage';
import { DemoHome, MonitoringPage, NewPatientPage, PatientDetailPage, PatientsPage, ReportsPage, SchedulePage, SettingsPage } from './pages/demo/DemoPages';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/demo' element={<DemoHome />} />
      <Route path='/demo/patients' element={<PatientsPage />} />
      <Route path='/demo/patients/new' element={<NewPatientPage />} />
      <Route path='/demo/patients/:id' element={<PatientDetailPage />} />
      <Route path='/demo/schedule' element={<SchedulePage />} />
      <Route path='/demo/monitoring' element={<MonitoringPage />} />
      <Route path='/demo/reports' element={<ReportsPage />} />
      <Route path='/demo/settings' element={<SettingsPage />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}
