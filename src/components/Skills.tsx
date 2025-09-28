import { Code, Cpu, Zap, Brain, Settings, GitBranch } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const { t, language } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: skillsRef, visibleItems } = useStaggeredAnimation(6, 100);
  
  const skillCategories = language === 'de' ? [
    {
      title: 'Programmiersprachen',
      icon: Code,
      skills: ['Python', 'C/C++', 'MATLAB/Simulink'],
      color: 'text-blue-600'
    },
    {
      title: 'Simulation & Design',
      icon: Settings,
      skills: ['MATLAB/Simulink', 'ANSYS Motor-CAD', 'CST Studio', 'AutoCAD', 'Altium Designer'],
      color: 'text-green-600'
    },
    {
      title: 'Hardware & Embedded',
      icon: Cpu,
      skills: ['STM32', 'Raspberry Pi', 'Sensorintegration', 'Echtzeit-Datenerfassung', 'Datenbusse'],
      color: 'text-purple-600'
    },
    {
      title: 'KI & Machine Learning',
      icon: Brain,
      skills: ['LLM Finetuning (LoRA, QLoRA)', 'Custom Loss Functions', 'HuggingFace', 'PyTorch'],
      color: 'text-orange-600'
    },
    {
      title: 'Protokolle & Tools',
      icon: Zap,
      skills: ['CAN', 'UART', 'SPI', 'I²C', 'INCA', 'Vector CANape'],
      color: 'text-red-600'
    },
    {
      title: 'Entwicklung & Methodik',
      icon: GitBranch,
      skills: ['Git', 'Scrum', 'Agile Development', 'Teamführung'],
      color: 'text-indigo-600'
    }
  ] : [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'C/C++', 'MATLAB/Simulink'],
      color: 'text-blue-600'
    },
    {
      title: 'Simulation & Design',
      icon: Settings,
      skills: ['MATLAB/Simulink', 'ANSYS Motor-CAD', 'CST Studio', 'AutoCAD', 'Altium Designer'],
      color: 'text-green-600'
    },
    {
      title: 'Hardware & Embedded',
      icon: Cpu,
      skills: ['STM32', 'Raspberry Pi', 'Sensor Integration', 'Real-time Data Acquisition', 'Data Buses'],
      color: 'text-purple-600'
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['LLM Finetuning (LoRA, QLoRA)', 'Custom Loss Functions', 'HuggingFace', 'PyTorch'],
      color: 'text-orange-600'
    },
    {
      title: 'Protocols & Tools',
      icon: Zap,
      skills: ['CAN', 'UART', 'SPI', 'I²C', 'INCA', 'Vector CANape'],
      color: 'text-red-600'
    },
    {
      title: 'Development & Methodology',
      icon: GitBranch,
      skills: ['Git', 'Scrum', 'Agile Development', 'Team Leadership'],
      color: 'text-indigo-600'
    }
  ];

  const certifications = [
    { name: 'DSH2', level: 'C1', category: 'Language' },
    { name: 'DGUV I209-93', level: 'Certified', category: 'Safety' },
    { name: 'Altium Designer', level: 'Learning', category: 'Design' }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className={`text-3xl lg:text-4xl font-bold text-foreground mb-4 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
          >
            {t('skills.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('skills.description')}
          </p>
        </div>

        {/* Skill Categories */}
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className={`card-project group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 stagger-item ${visibleItems.includes(index) ? 'visible' : ''}`}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center ${category.color}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="tech-pill hover:bg-accent-light transition-all duration-200 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency Levels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            {language === 'de' ? 'Kompetenzübersicht' : 'Proficiency Overview'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">{language === 'de' ? 'Experte' : 'Expert'}</div>
              <div className="text-sm text-muted-foreground mb-3">{language === 'de' ? '5+ Jahre' : '5+ Years'}</div>
              <div className="flex flex-wrap gap-1 justify-center">
                <span className="tech-pill text-xs">STM32</span>
                <span className="tech-pill text-xs">C/C++</span>
                <span className="tech-pill text-xs">MATLAB</span>
              </div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">{language === 'de' ? 'Fortgeschritten' : 'Advanced'}</div>
              <div className="text-sm text-muted-foreground mb-3">{language === 'de' ? '3-5 Jahre' : '3-5 Years'}</div>
              <div className="flex flex-wrap gap-1 justify-center">
                <span className="tech-pill text-xs">Python</span>
                <span className="tech-pill text-xs">Motor-CAD</span>
                <span className="tech-pill text-xs">CAN</span>
              </div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-secondary/10 border border-secondary/20">
              <div className="text-3xl font-bold text-muted-foreground mb-2">{language === 'de' ? 'Mittelstufe' : 'Intermediate'}</div>
              <div className="text-sm text-muted-foreground mb-3">{language === 'de' ? '1-3 Jahre' : '1-3 Years'}</div>
              <div className="flex flex-wrap gap-1 justify-center">
                <span className="tech-pill text-xs">PyTorch</span>
                <span className="tech-pill text-xs">LLM Finetuning</span>
                <span className="tech-pill text-xs">Altium</span>
              </div>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-warning/5 to-warning/10 border border-warning/20">
              <div className="text-3xl font-bold text-warning mb-2">{language === 'de' ? 'Lernend' : 'Learning'}</div>
              <div className="text-sm text-muted-foreground mb-3">{language === 'de' ? '< 1 Jahr' : '< 1 Year'}</div>
              <div className="flex flex-wrap gap-1 justify-center">
                <span className="tech-pill text-xs">CST Studio</span>
                <span className="tech-pill text-xs">Advanced CFD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            {language === 'de' ? 'Zertifizierungen & Qualifikationen' : 'Certifications & Qualifications'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="card-interactive text-center">
                <h4 className="font-semibold text-foreground mb-2">{cert.name}</h4>
                <div className="tech-pill-accent mb-2">{cert.category}</div>
                <div className="text-sm text-muted-foreground">{cert.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;