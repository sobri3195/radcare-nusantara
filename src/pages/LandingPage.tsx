import LandingAISection from '../components/landing/LandingAISection';
import LandingAnalytics from '../components/landing/LandingAnalytics';
import LandingCTA from '../components/landing/LandingCTA';
import LandingDashboardPreview from '../components/landing/LandingDashboardPreview';
import LandingDemoNotice from '../components/landing/LandingDemoNotice';
import LandingFeatures from '../components/landing/LandingFeatures';
import LandingFooter from '../components/landing/LandingFooter';
import LandingHero from '../components/landing/LandingHero';
import LandingNavbar from '../components/landing/LandingNavbar';
import LandingRoleExperience from '../components/landing/LandingRoleExperience';
import LandingRoleSection from '../components/landing/LandingRoleSection';
import LandingWorkflow from '../components/landing/LandingWorkflow';

export default function LandingPage() {
  return (
    <div className='overflow-x-hidden bg-gradient-to-b from-slate-100 via-cyan-50 to-white'>
      <LandingNavbar />
      <LandingHero />
      <LandingRoleSection />
      <LandingFeatures />
      <LandingWorkflow />
      <LandingDashboardPreview />
      <LandingAISection />
      <LandingRoleExperience />
      <LandingAnalytics />
      <LandingDemoNotice />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
}
