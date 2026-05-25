import { Activity, FolderKanban, HeartPulse, UsersRound } from 'lucide-react';
import { CTASection } from './CTASection';
import { DemoPreview } from './DemoPreview';
import { FeatureCard } from './FeatureCard';
import { Footer } from './Footer';
import { HeroSection } from './HeroSection';
import { Navbar } from './Navbar';
import { StatsSection } from './StatsSection';
import { WorkflowSection } from './WorkflowSection';

const features = [
  {
    icon: Activity,
    title: 'Continuous Monitoring',
    description: 'Pemantauan kondisi pasien radioterapi secara berkelanjutan dengan ringkasan status harian.',
  },
  {
    icon: FolderKanban,
    title: 'Radiotherapy Workflow',
    description: 'Alur radioterapi terdokumentasi rapi dari registrasi hingga evaluasi lanjutan.',
  },
  {
    icon: HeartPulse,
    title: 'Patient Progress Tracking',
    description: 'Progress terapi dan respons pasien divisualisasikan untuk keputusan klinis cepat.',
  },
  {
    icon: UsersRound,
    title: 'Specialist Coordination',
    description: 'Kolaborasi dokter spesialis, fisikawan medis, dan tim klinis dalam satu dashboard.',
  },
];

export function LandingPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-cyan-950'>
      <Navbar />
      <HeroSection />
      <main className='rounded-t-[2.5rem] bg-slate-50 pt-12'>
        <section id='fitur' className='px-4 py-16 md:px-6'>
          <div className='mx-auto max-w-6xl'>
            <h2 className='mb-3 text-3xl font-bold text-slate-900'>Fitur Utama RADCARE</h2>
            <p className='mb-8 max-w-2xl text-sm text-slate-600 md:text-base'>
              Solusi modern healthcare untuk memastikan proses radioterapi lebih aman, terukur, dan terkoordinasi.
            </p>
            <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>
        <StatsSection />
        <WorkflowSection />
        <DemoPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
