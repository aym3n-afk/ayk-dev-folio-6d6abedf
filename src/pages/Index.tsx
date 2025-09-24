import { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-foreground font-semibold">Aymen Kouki</p>
              <p className="text-sm text-muted-foreground">Entwicklungsingenieur Hardware & Software</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a
                href="https://linkedin.com/in/aymenkouki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://git.fh-aachen.de/ak3198s/stm32_sub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitLab
              </a>
              <a
                href="mailto:aymen.kouki@alumni.fh-aachen.de"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Email
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2024 Aymen Kouki. Built with React & TypeScript.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
