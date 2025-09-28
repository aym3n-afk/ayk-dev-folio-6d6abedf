import { Award, Globe, Users, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { t, language } = useLanguage();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { elementRef: skillsRef, visibleItems } = useStaggeredAnimation(6, 150);
  
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

  const interests = language === 'de' ? [
    'Robotik & Autonome Systeme',
    'Teamführung',
    'Fußball',
    'Tischtennis'
  ] : [
    'Robotics & Autonomous Systems',
    'Team Leadership',
    'Football',
    'Table Tennis'
  ];

  return (
    <section id="about" className="section-padding bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className={`text-3xl lg:text-4xl font-bold text-foreground mb-4 scroll-fade-in ${titleVisible ? 'visible' : ''}`}
          >
            {t('about.title')}
          </h2>
          <p 
            ref={contentRef}
            className={`text-lg text-muted-foreground max-w-3xl mx-auto scroll-fade-in ${contentVisible ? 'visible' : ''}`}
          >
            {t('about.description')}
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Areas of Focus */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>{t('about.areasOfFocus')}</span>
              </h3>
              <div className="space-y-4">
                <div className={`card-interactive hover:shadow-lg hover:-translate-y-1 transition-all duration-300 stagger-item ${visibleItems.includes(0) ? 'visible' : ''}`}>
                  <h4 className="font-semibold text-foreground mb-2">{t('about.embeddedSystems')}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t('about.embeddedDesc')}
                  </p>
                </div>
                <div className={`card-interactive hover:shadow-lg hover:-translate-y-1 transition-all duration-300 stagger-item ${visibleItems.includes(1) ? 'visible' : ''}`}>
                  <h4 className="font-semibold text-foreground mb-2">{t('about.driveTechnology')}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t('about.driveDesc')}
                  </p>
                </div>
                <div className={`card-interactive hover:shadow-lg hover:-translate-y-1 transition-all duration-300 stagger-item ${visibleItems.includes(2) ? 'visible' : ''}`}>
                  <h4 className="font-semibold text-foreground mb-2">{t('about.llmTesting')}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t('about.llmDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span>{t('about.languages')}</span>
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
                <span>{t('about.certifications')}</span>
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
                <span>{t('about.additionalSkills')}</span>
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-secondary rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">{t('about.leadershipExperience')}</h4>
                  <p className="text-muted-foreground text-sm">
                    {t('about.leadershipDesc')}
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