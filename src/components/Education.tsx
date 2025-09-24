import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Education = () => {
  const { t } = useLanguage();
  const education = [
    {
      degree: 'M.Eng. Elektrotechnik',
      institution: 'FH Aachen',
      period: '03/2023 – 02/2025',
      location: 'Aachen, Germany',
      specialization: 'Informations- & Kommunikationstechnologien',
      thesis: 'Optimierung von LLMs für automatisierte XML-Testfallgenerierung',
      grade: '1.4 (sehr gut)',
      current: true,
      highlights: [
        'Schwerpunkt: Informations- & Kommunikationstechnologien',
        'Fokus auf KI/ML und Embedded Systems',
        'Master\'s Thesis bei Rohde & Schwarz',
        'Spezialisierung in LLM Finetuning'
      ]
    },
    {
      degree: 'B.Eng. Elektrotechnik',
      institution: 'FH Aachen',
      period: '03/2019 – 03/2023',
      location: 'Aachen, Germany',
      specialization: 'Automatisierung & elektrische Fahrzeugsysteme',
      thesis: 'SLAM auf 4-Rad-Roboter mit Kollisionsvermeidung',
      grade: '2.2 (gut)',
      current: false,
      highlights: [
        'Schwerpunkt: Automatisierung & elektrische Fahrzeugsysteme',
        'Fokus auf Embedded Systems und Robotik',
        'Bachelor\'s Thesis in autonomer Navigation',
        'Praktische Erfahrung in Fahrzeugsystemen'
      ]
    }
  ];

  const academicAchievements = [
    {
      title: 'Magna Cum Laude',
      description: 'Master\'s degree with distinction (1.4)',
      icon: Award
    },
    {
      title: 'Research Publication',
      description: 'Co-author: "Thermal Integration of High-Speed Electric Machines"',
      icon: GraduationCap
    },
    {
      title: 'Project Leadership',
      description: 'Led 5-student team in agile development projects',
      icon: Award
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {t('education.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('education.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="timeline-line"></div>
              
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className={`timeline-dot ${edu.current ? 'bg-primary' : 'bg-accent'}`}></div>
                    
                    <div className="card-project">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {edu.degree}
                          </h3>
                          <div className="flex items-center space-x-2 text-primary font-semibold mb-2">
                            <span>{edu.institution}</span>
                            {edu.current && (
                              <span className="tech-pill-accent text-xs">In Progress</span>
                            )}
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{edu.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-4 lg:mt-0">
                          <span className="tech-pill-accent font-semibold">{edu.grade}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Specialization:</h4>
                          <p className="text-muted-foreground">{edu.specialization}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Thesis:</h4>
                          <p className="text-muted-foreground italic">"{edu.thesis}"</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Key Highlights:</h4>
                          <ul className="space-y-2">
                            {edu.highlights.map((highlight, highlightIndex) => (
                              <li key={highlightIndex} className="flex items-start space-x-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Achievements */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Academic Achievements
                </h3>
                <div className="space-y-4">
                  {academicAchievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className="card-interactive">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {achievement.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key Courses */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Key Coursework
                </h3>
                <div className="space-y-3">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Master's Program</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="tech-pill text-xs">Machine Learning</span>
                      <span className="tech-pill text-xs">Digital Signal Processing</span>
                      <span className="tech-pill text-xs">Advanced Control Systems</span>
                      <span className="tech-pill text-xs">Embedded AI</span>
                    </div>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Bachelor's Program</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="tech-pill text-xs">Microprocessor Systems</span>
                      <span className="tech-pill text-xs">Automotive Electronics</span>
                      <span className="tech-pill text-xs">Control Theory</span>
                      <span className="tech-pill text-xs">Power Electronics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Language Certifications */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Language Certifications
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="font-medium text-foreground">DSH2 (German)</span>
                    <span className="tech-pill">C1</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Advanced German proficiency certification for academic studies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;