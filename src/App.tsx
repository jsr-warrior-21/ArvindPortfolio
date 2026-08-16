import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeBanner } from './components/MarqueeBanner';
import { TechStackSection } from './components/TechStackSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { SpotlightBackground } from './components/SpotlightBackground';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { Global3DBackground } from './components/Global3DBackground';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white relative">
      {/* Brand-New Futuristic Cyber Target Mouse Pointer */}
      <CustomCursor />

      {/* Global 3D Interactive Particle Mesh Canvas - Covers Entire Page Top to Bottom! */}
      <Global3DBackground />

      {/* Scroll Progress Bar at Top */}
      <ScrollProgressBar />

      {/* Ambient Spotlight Background */}
      <SpotlightBackground />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenTerminal={() => setTerminalOpen(true)} />
        
        <main className="flex-grow">
          <HeroSection />
          <MarqueeBanner />
          <ProjectsSection />
          <TechStackSection />
          <ExperienceSection />
          <AchievementsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Interactive Developer CLI Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}

export default App;
