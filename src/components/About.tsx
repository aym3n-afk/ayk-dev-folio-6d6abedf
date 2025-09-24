import { Award, Globe, Users, Zap } from 'lucide-react';

const About = () => {
  const languages = [
    { name: 'Deutsch', level: 'C1' },
    { name: 'Englisch', level: 'C1' },
    { name: 'Französisch', level: 'B2' },
    { name: 'Arabisch', level: 'C2' }
  ];

  const certifications = [
    'DSH2 (C1)',
    'DGUV I209-93 Hochvolt-Systeme',
    'Learning Altium'
  ];

  const interests = [
    'Robotics & Autonomous Systems',
    'Team Leadership',
    'Football',
    'Table Tennis'
  ];

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technisch versierter Ingenieur mit Fokus auf Embedded-Systeme, Antriebstechnik und 
            industrielle Automatisierung. Erfahrung in Konzeption, Auslegung, Inbetriebnahme, 
            modellbasierter Entwicklung, Softwareintegration und hardwarenaher Programmierung. 
            Praxisorientiert, analytisch, teamerprobt — von der Idee über Prototyp bis zur Serienreife.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Areas of Focus */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Areas of Focus</span>
              </h3>
              <div className="space-y-4">
                <div className="card-interactive">
                  <h4 className="font-semibold text-foreground mb-2">Embedded Systems</h4>
                  <p className="text-muted-foreground text-sm">
                    STM32 microcontrollers, real-time data acquisition, hardware-near programming
                  </p>
                </div>
                <div className="card-interactive">
                  <h4 className="font-semibold text-foreground mb-2">Drive Technology</h4>
                  <p className="text-muted-foreground text-sm">
                    High-voltage motors, industrial automation, engineering & project execution
                  </p>
                </div>
                <div className="card-interactive">
                  <h4 className="font-semibold text-foreground mb-2">LLM-based Test Automation</h4>
                  <p className="text-muted-foreground text-sm">
                    AI-powered test case generation, custom neural network optimization
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>Languages</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="tech-pill">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Interests */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <span>Certifications</span>
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-secondary rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Additional Skills & Interests</span>
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-secondary rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Leadership Experience</h4>
                  <p className="text-muted-foreground text-sm">
                    Led 5 students in agile project environments, demonstrating team coordination and project management skills
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span key={index} className="tech-pill">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;