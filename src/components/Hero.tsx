import { ArrowDown, Download, ExternalLink, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aymenProfile from '@/assets/aymen-profile.jpg';

const Hero = () => {
  const highlights = [
    'Embedded Systems & Drive Tech',
    'KI-gestützte Testautomatisierung (LLM)',
    'STM32, Motor-CAD, MATLAB/Simulink',
    'Multilingual (DE/EN/FR/AR)'
  ];

  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={aymenProfile}
                  alt="Aymen Kouki - Entwicklungsingenieur Hardware & Software"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -top-6 -left-6 stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="absolute -bottom-6 -right-6 stat-card">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">
                  Aymen Kouki
                </h1>
                <p className="text-xl lg:text-2xl text-primary font-semibold mb-4">
                  Entwicklungsingenieur Hardware & Software
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                  Technisch versierter Ingenieur mit Fokus auf Embedded-Systeme, Antriebstechnik und 
                  industrielle Automatisierung; erfahren in modellbasierter Entwicklung, 
                  hardwarenaher Programmierung und Systemintegration von Prototyp bis zur Serienreife.
                </p>
              </div>

              {/* Current Role */}
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground">
                <Briefcase className="h-5 w-5" />
                <span>Project Engineer bei EMZ Elektromaschinenzentrale GmbH</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Aachen, Germany</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Button size="lg" className="btn-hero flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download CV</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="btn-outline flex items-center space-x-2"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Contact</span>
                </Button>
              </div>

              {/* Quick Links */}
              <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
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
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-1"
                >
                  <span>GitLab</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Strip */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="tech-pill-accent text-center py-3">
                {highlight}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to next section"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;