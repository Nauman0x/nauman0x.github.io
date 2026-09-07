import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsRibbon } from './components/MetricsRibbon';
import { ProjectsSection } from './components/ProjectsSection';
import { VoiceStudio } from './components/VoiceStudio';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ResearchExplorer } from './components/ResearchExplorer';
import { TerminalHUD } from './components/TerminalHUD';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#07060A] text-[#D3CFE0] selection:bg-[#9D72E8] selection:text-white relative bg-grid-pattern overflow-x-hidden">
      {/* Custom magnetic follower cursor */}
      <CustomCursor />

      {/* Top sticky navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Real Production Metrics Ribbon */}
        <MetricsRibbon />

        {/* Flagship & Systems Projects with Filter Tabs & Slide-over Drawer */}
        <ProjectsSection />

        {/* Interactive Voice Call & Speech Lab */}
        <VoiceStudio />

        {/* Work Experience & Field Track Record */}
        <ExperienceTimeline />

        {/* Empirical Research Paper Explorer (Urban Coexistence Study N=406) */}
        <ResearchExplorer />

        {/* Interactive Terminal Command HUD */}
        <TerminalHUD />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
