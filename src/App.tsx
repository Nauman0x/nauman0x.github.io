import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { MetricsRibbon } from './components/MetricsRibbon';
import { ProjectsSection } from './components/ProjectsSection';
import { VoiceStudio } from './components/VoiceStudio';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ResearchExplorer } from './components/ResearchExplorer';
import { TerminalHUD } from './components/TerminalHUD';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const TICKER_ITEMS = [
  'AI ENGINEER',
  'FULL-STACK DEV',
  'SHIPS TO PRODUCTION',
  '5 EU COUNTRIES',
  '2X NATIONAL CHAMPION',
  '95% BOOKING ACCURACY',
];

export function App() {
  return (
    <div className="min-h-screen bg-[#F5F0E4] text-[#171310] selection:bg-[#FFC300] selection:text-black relative bg-grid-pattern overflow-x-hidden">
      {/* Custom magnetic follower cursor */}
      <CustomCursor />

      {/* Top sticky navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Scrolling accolade ticker */}
        <Marquee items={TICKER_ITEMS} />

        {/* Real Production Metrics Ribbon */}
        <MetricsRibbon />

        {/* Work Experience & Field Track Record */}
        <ExperienceTimeline />

        {/* Flagship & Systems Projects with Filter Tabs & Slide-over Drawer */}
        <ProjectsSection />

        {/* Interactive Voice Call & Speech Lab */}
        <VoiceStudio />

        {/* Empirical Research Paper Explorer (Urban Coexistence Study N=406) */}
        <ResearchExplorer />

        {/* Interactive Terminal Command HUD */}
        <TerminalHUD />

        {/* Contact / Let's Talk */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
