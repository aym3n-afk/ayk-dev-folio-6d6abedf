import { ExternalLink, Code, Zap, Brain, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const { t } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: projectsRef, visibleItems } = useStaggeredAnimation(4, 200);
  
  const projects = [
    {
      title: 'KI-basierte Testfallautomatisierung',
      subtitle: 'Rohde & Schwarz',
      description: 'Entwicklung eines LLM-basierten Systems zur automatischen Generierung von XML-Testfällen für In-House-Testframework. Implementierung von QLoRA/LoRA-Techniken, synthetischen Datensätzen und custom loss functions.',
      impact: [
        'Reduzierte manuelle Fehler um 80%',
        'Beschleunigte Testfallproduktion um 60%',
        'Verbesserte Testabdeckung durch AI-generierte Edge Cases'
      ],
      technologies: ['Python', 'PyTorch', 'HuggingFace', 'QLoRA/LoRA', 'XML', 'Transformers'],
      icon: Brain,
      color: 'from-purple-500/10 to-pink-500/10 border-purple-500/20',
      link: '#'
    },
    {
      title: 'STM32 Temperaturregelung',
      subtitle: 'Embedded Systems Project',
      description: 'Entwicklung eines präzisen Temperaturregelsystems mit Peltier-Element und NTC-Sensoren. Implementierung von Hardware-nahem C-Code, Simulation in Simulink und Schaltplanentwurf in Altium Designer.',
      impact: [
        '±0.1°C Temperaturgenauigkeit erreicht',
        'Echtzeitregelung mit <100ms Reaktionszeit',
        'Energieeffiziente PWM-Steuerung implementiert'
      ],
      technologies: ['STM32', 'C/C++', 'MATLAB/Simulink', 'Altium Designer', 'PWM', 'PID Control'],
      icon: Cpu,
      color: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20',
      link: 'https://git.fh-aachen.de/ak3198s/stm32_sub'
    },
    {
      title: 'Autonomes Robotersystem',
      subtitle: 'SLAM & Navigation',
      description: 'Entwicklung eines autonomen Robotersystems mit SLAM-Technologie für Hinderniserkennung und Navigation. Integration von LiDAR, IMU und Ultraschallsensoren mit STM32 und Raspberry Pi.',
      impact: [
        'Autonome Navigation in komplexen Umgebungen',
        'Echtzeit-Kartenerstellung und Lokalisierung',
        'Kollisionsfreie Pfadplanung implementiert'
      ],
      technologies: ['STM32', 'Raspberry Pi', 'ROS', 'SLAM', 'LiDAR', 'Computer Vision', 'Sensorfusion'],
      icon: Zap,
      color: 'from-green-500/10 to-emerald-500/10 border-green-500/20',
      link: '#'
    },
    {
      title: 'Thermal Integration Study',
      subtitle: 'High-Speed E-Machines',
      description: 'Forschung zur thermischen Integration von Hochgeschwindigkeits-E-Maschinen in EDUs. Entwicklung von thermischen Modellen mit LPTN/CFD und Beitrag zur wissenschaftlichen Publikation.',
      impact: [
        'Verbesserung der Kühlungseffizienz um 25%',
        'Optimierung der Motorleistung bei hohen Drehzahlen',
        'Wissenschaftliche Publikation veröffentlicht'
      ],
      technologies: ['ANSYS Motor-CAD', 'CFD', 'PMSM', 'Thermal Modeling', '3D CAD', 'LPTN'],
      icon: Code,
      color: 'from-orange-500/10 to-red-500/10 border-orange-500/20',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className={`text-3xl lg:text-4xl font-bold text-foreground mb-4 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
          >
            {t('projects.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className={`card-project bg-gradient-to-br ${project.color} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 stagger-item ${visibleItems.includes(index) ? 'visible' : ''}`}>
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  {project.link !== '#' && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-60 hover:opacity-100"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">{t('projects.keyResults')}</h4>
                  <ul className="space-y-2">
                    {project.impact.map((item, impactIndex) => (
                      <li key={impactIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-pill text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('projects.interestedTitle')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('projects.interestedDesc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="btn-hero" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                {t('projects.getInTouch')}
              </Button>
              <Button variant="outline" size="lg" className="btn-outline flex items-center space-x-2">
                <ExternalLink className="h-4 w-4" />
                <span>{t('projects.viewAll')}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;