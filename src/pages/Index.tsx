import { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import BackgroundVideo from '@/components/BackgroundVideo';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLoaded(true);
    
    // Smooth scroll behavior for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <>
      <BackgroundVideo />
      <ScrollProgress />
      <div className={`relative z-10 min-h-screen transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <Header />
        <main className="space-y-0">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
      
        {/* Footer */}
        <footer className="relative bg-card/50 backdrop-blur-sm border-t border-border py-8">
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
                © 2024 Aymen Kouki. {t('footer.builtWith')}
              </p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
};

export default Index;
