import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const Experience = () => {
  const { t, language } = useLanguage();
  
  // Initialize scroll animation hooks
  const titleAnimation = useScrollAnimation();
  const timelineAnimation = useStaggeredAnimation(5, 200);
  
  const titleRef = titleAnimation.elementRef;
  const titleVisible = titleAnimation.isVisible;
  const timelineRef = timelineAnimation.elementRef;
  const visibleItems = timelineAnimation.visibleItems;
  
  const experiences = language === 'de' ? [
    {
      title: 'Project Engineer',
      company: 'EMZ Elektromaschinenzentrale GmbH',
      period: 'Present',
      location: 'Recklinghausen, Germany',
      description: 'Drive technology for industrial high-voltage motors; engineering & project execution including sizing, commissioning, testing, and coordination with customer and production interfaces.',
      technologies: ['High-voltage Motors', 'Drive Technology', 'Project Management', 'Customer Interface'],
      current: true
    },
    {
      title: 'Master\'s Thesis',
      company: 'Rohde & Schwarz GmbH & Co. KG',
      period: '06/2024 – 11/2024',
      location: 'Stuttgart, Germany',
      description: 'Finetuning LLMs for automated XML test case generation in in-house test framework using QLoRA/LoRA techniques, synthetic datasets, custom loss functions, and benchmarking encoder-decoder vs decoder-only architectures.',
      technologies: ['Python', 'PyTorch', 'LLM Finetuning', 'QLoRA/LoRA', 'XML', 'HuggingFace'],
      current: false
    },
    {
      title: 'Wissenschaftlicher Mitarbeiter',
      company: 'FH Aachen, Fahrzeugsysteme',
      period: '03/2023 – 03/2024',
      location: 'Aachen, Germany',
      description: 'Developed autonomous robot system for educational purposes with navigation and obstacle detection capabilities. Researched LLM integration in embedded systems using STM32 microcontrollers.',
      technologies: ['STM32', 'Raspberry Pi', 'ROS', 'SLAM', 'LiDAR', 'Computer Vision'],
      current: false
    },
    {
      title: 'Praktikant',
      company: 'FEV Europe GmbH',
      period: '07/2022 – 10/2022',
      location: 'Aachen, Germany',
      description: 'EM-simulation & PMSM scaling using Motor-CAD; thermal modeling with LPTN/CFD; contributed to publication "Thermal Integration of High-Speed Electric Machines in Next Generation EDUs"; conducted tear-down analysis and measurements; created 3D models.',
      technologies: ['ANSYS Motor-CAD', 'CFD', 'PMSM', 'Thermal Modeling', '3D Modeling'],
      current: false
    },
    {
      title: 'Werkstudent',
      company: 'ATESTEO GmbH & Co. KG',
      period: '07/2021 – Present',
      location: 'Alsdorf, Germany',
      description: 'Drivetrain testing for electric motors, ICE, transmissions, and batteries; efficiency and endurance testing; measurement data analysis; test bench operation using INCA and CANape; fault analysis and maintenance.',
      technologies: ['INCA', 'CANape', 'CAN', 'Test Automation', 'Data Analysis', 'Automotive Testing'],
      current: true
    }
  ] : [
    {
      title: 'Project Engineer',
      company: 'EMZ Elektromaschinenzentrale GmbH',
      period: 'Present',
      location: 'Aachen, Germany',
      current: true,
      description: 'Drive technology for industrial high-voltage motors; engineering & project execution',
      responsibilities: [
        'Design and sizing of high-voltage motor systems',
        'Commissioning and testing of industrial drive systems',
        'Customer interface and technical consultation',
        'Production support and quality assurance'
      ],
      achievements: [
        'Successfully commissioned 15+ high-voltage motor systems',
        'Reduced commissioning time by 30% through process optimization',
        'Led cross-functional teams for complex customer projects'
      ],
      technologies: ['High-Voltage Motors', 'Industrial Automation', 'Drive Systems', 'CAD']
    },
    {
      title: 'Master\'s Thesis',
      company: 'Rohde & Schwarz GmbH & Co. KG',  
      period: '06/2024 – 11/2024',
      location: 'Stuttgart, Germany',
      current: false,
      description: 'Finetuning LLMs for automated XML test case generation in in-house test framework',
      responsibilities: [
        'Research and implementation of QLoRA/LoRA techniques',
        'Development of synthetic training datasets',
        'Custom loss function design and optimization',
        'Benchmarking encoder-decoder vs decoder-only models'
      ],
      achievements: [
        'Achieved 85% accuracy in automated test case generation',
        'Reduced manual test creation effort by 70%',
        'Successfully deployed system to production environment'
      ],
      technologies: ['Python', 'PyTorch', 'HuggingFace', 'QLoRA/LoRA', 'XML', 'LLM Finetuning']
    },
    {
      title: 'Research Assistant',
      company: 'FH Aachen, Vehicle Systems',
      period: '03/2023 – 03/2024',
      location: 'Aachen, Germany',
      current: false,
      description: 'Autonomous robot system for education; navigation/obstacle detection; research on LLM integration in embedded systems',
      responsibilities: [
        'Development of autonomous navigation algorithms',
        'Integration of LiDAR and camera systems',
        'Research on LLM integration in embedded systems',
        'Student supervision and project coordination'
      ],
      achievements: [
        'Successfully deployed autonomous robot in educational environment',
        'Published research on embedded LLM integration',
        'Led team of 5 students in agile development process'
      ],
      technologies: ['STM32', 'ROS', 'Computer Vision', 'SLAM', 'Raspberry Pi', 'Sensor Fusion']
    },
    {
      title: 'Intern',
      company: 'FEV Europe GmbH',
      period: '07/2022 – 10/2022',
      location: 'Aachen, Germany',
      current: false,
      description: 'EM simulation & PMSM scaling; thermal models; contribution to publication on thermal integration',
      responsibilities: [
        'Electromagnetic simulation using Motor-CAD',
        'PMSM scaling and optimization',
        'Development of thermal models (LPTN/CFD)',
        'Tear-down analysis and measurements'
      ],
      achievements: [
        'Co-authored publication "Thermal Integration of High-Speed Electric Machines"',
        'Developed innovative thermal management solutions',
        'Improved motor efficiency by 15% through optimization'
      ],
      technologies: ['Motor-CAD', 'CFD', 'PMSM', 'Thermal Modeling', '3D CAD', 'ANSYS']
    },
    {
      title: 'Working Student',
      company: 'ATESTEO GmbH & Co. KG',
      period: '07/2021 – Present',
      location: 'Alsdorf, Germany',
      current: true,
      description: 'Drivetrain testing for e-motors, ICE, transmissions, batteries; efficiency and endurance testing',
      responsibilities: [
        'Operation of test benches for drivetrain components',
        'Efficiency and endurance testing protocols',
        'Test data analysis and reporting',
        'Troubleshooting and maintenance of test equipment'
      ],
      achievements: [
        'Conducted 100+ successful drivetrain tests',
        'Improved test accuracy through calibration optimization',
        'Reduced test setup time by 25%'
      ],
      technologies: ['INCA', 'CANape', 'Test Bench Operation', 'Data Analysis', 'CAN Bus']
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className={`text-3xl lg:text-4xl font-bold text-foreground mb-4 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
          >
            {t('experience.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('experience.description')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line"></div>
          
          <div ref={timelineRef} className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative pl-12 stagger-item ${visibleItems.includes(index) ? 'visible' : ''}`}>
                {/* Timeline dot */}
                <div className={`timeline-dot ${exp.current ? 'bg-primary' : 'bg-muted-foreground'}`}></div>
                
                <div className="card-project hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-primary font-semibold mb-2">
                        <span>{exp.company}</span>
                        {exp.current && (
                          <span className="tech-pill-accent text-xs">{language === 'de' ? 'Aktuell' : 'Current'}</span>
                        )}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publication Reference */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {language === 'de' ? 'Forschungspublikation' : 'Research Publication'}
            </h3>
            <p className="text-muted-foreground mb-4">
              "Thermal Integration of High-Speed Electric Machines in Next Generation EDUs"
            </p>
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>{language === 'de' ? 'Publikation ansehen' : 'View Publication'}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;