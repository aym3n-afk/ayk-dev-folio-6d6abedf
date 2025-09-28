import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Über mich',
    'nav.experience': 'Erfahrung',
    'nav.projects': 'Projekte',
    'nav.skills': 'Fähigkeiten',
    'nav.education': 'Ausbildung',
    'nav.contact': 'Kontakt',
    'nav.cv': 'Lebenslauf',
    'nav.downloadCv': 'CV herunterladen',

    // Hero
    'hero.title': 'Entwicklungsingenieur Hardware & Software',
'hero.description': `-Kombination aus klassischer Elektrotechnik (HV-Motoren, Prüfstand, Embedded Systems) und innovativer KI-Anwendung (LLM-basierte Testautomatisierung)\n
-Projekterfahrung von Simulation über Auslegung, Inbetriebnahme und Test bis zur Serienreife\n
-Starke Schnittstellenkompetenz zwischen Entwicklung, Produktion und Kunde in internationalen Projekten`,
    'hero.currentRole': 'Projektinginieur bei EMZ Elektromaschinenzentrale GmbH',
    'hero.location': 'Recklinghausen, Germany',
    'hero.download': 'Download CV',
    'hero.contact': 'Kontakt',
    'hero.yearsExperience': 'Jahre Erfahrung',
    'hero.projectsCompleted': 'Projekte abgeschlossen',

    // About
    'about.title': 'Über mich',
    'about.description': 'Technisch versierter Ingenieur mit Fokus auf Embedded-Systeme, Antriebstechnik und industrielle Automatisierung. Erfahrung in Konzeption, Auslegung, Inbetriebnahme, modellbasierter Entwicklung, Softwareintegration und hardwarenaher Programmierung. Praxisorientiert, analytisch, teamerprobt — von der Idee über Prototyp bis zur Serienreife.',
    'about.areasOfFocus': 'Schwerpunkte',
    'about.embeddedSystems': 'Embedded Systems',
    'about.embeddedDesc': 'STM32 Mikrocontroller, Echtzeit-Datenerfassung, hardwarenahe Programmierung',
    'about.driveTechnology': 'Antriebstechnik',
    'about.driveDesc': 'Hochvolt-Motoren, industrielle Automatisierung, Engineering & Projektabwicklung',
    'about.llmTesting': 'LLM-basierte Testautomatisierung',
    'about.llmDesc': 'KI-gesteuerte Testfallgenerierung, maßgeschneiderte neuronale Netzwerk-Optimierung',
    'about.languages': 'Sprachen',
    'about.certifications': 'Zertifizierungen',
    'about.additionalSkills': 'Zusätzliche Fähigkeiten & Interessen',
    'about.leadershipExperience': 'Leadership-Erfahrung',
    'about.leadershipDesc': 'Führung von 5 Studenten in agilen Projektumgebungen, Demonstration von Teamkoordination und Projektmanagement-Fähigkeiten',

    // Experience
    'experience.title': 'Berufserfahrung',
    'experience.description': 'Mein beruflicher Werdegang in der Elektrotechnik, von praktischen Erfahrungen bis hin zu spezialisierten Ingenieurstätigkeiten',
    'experience.present': 'Heute',
    'experience.responsibilities': 'Hauptverantwortlichkeiten',
    'experience.achievements': 'Wichtige Erfolge',

    // Skills
    'skills.title': 'Technische Fähigkeiten',
    'skills.description': 'Umfassende technische Expertise in verschiedenen Engineering-Bereichen',
    'skills.programming': 'Programmiersprachen',
    'skills.simulation': 'Simulation & Design',
    'skills.hardware': 'Hardware & Embedded',
    'skills.ai': 'KI & ML',
    'skills.protocols': 'Protokolle/Tools',
    'skills.yearsExp': 'Jahre Erfahrung',
    'skills.proficiencyLevel': 'Kompetenzniveau',

    // Projects
    'projects.title': 'Ausgewählte Projekte',
    'projects.description': 'Ein Showcase meiner Engineering-Projekte im Bereich Embedded Systems, AI/ML und fortschrittliche Fahrzeugtechnologien',
    'projects.keyResults': 'Wichtige Ergebnisse & Impact:',
    'projects.interestedTitle': 'Interessiert an meiner Arbeit?',
    'projects.interestedDesc': 'Ich freue mich immer darauf, neue Engineering-Herausforderungen und Kooperationsmöglichkeiten zu diskutieren.',
    'projects.getInTouch': 'Kontakt aufnehmen',
    'projects.viewAll': 'Alle Projekte anzeigen',

    // Education
    'education.title': 'Ausbildung',
    'education.description': 'Akademische Grundlage in Elektrotechnik mit Spezialisierung auf Embedded Systems, Automatisierung und künstliche Intelligenz',
    'education.inProgress': 'Laufend',
    'education.specialization': 'Spezialisierung:',
    'education.thesis': 'Abschlussarbeit:',
    'education.keyHighlights': 'Wichtige Highlights:',
    'education.academicAchievements': 'Akademische Erfolge',
    'education.keyCourses': 'Wichtige Kurse',
    'education.languageCerts': 'Sprachzertifikate',
    'education.germanCert': 'Fortgeschrittene Deutschkenntnisse für akademische Studien',

    // Contact
    'contact.title': 'Kontakt aufnehmen',
    'contact.description': 'Interessiert an Zusammenarbeit, neuen Möglichkeiten oder der Diskussion von Engineering-Herausforderungen? Ich würde gerne von Ihnen hören.',
    'contact.contactInfo': 'Kontaktinformationen',
    'contact.professionalLinks': 'Professionelle Links',
    'contact.linkedin': 'Professionelles Netzwerk und Karriere-Updates',
    'contact.gitlab': 'Code Repositories und technische Projekte',
    'contact.cvTitle': 'Lebenslauf',
    'contact.cvDesc': 'Laden Sie meinen vollständigen Lebenslauf mit detaillierten Erfahrungen und Projektinformationen herunter.',
    'contact.downloadCvPdf': 'Lebenslauf herunterladen (PDF)',
    'contact.sendMessage': 'Nachricht senden',
    'contact.fullName': 'Vollständiger Name',
    'contact.email': 'E-Mail-Adresse',
    'contact.message': 'Nachricht',
    'contact.namePlaceholder': 'Ihr vollständiger Name',
    'contact.emailPlaceholder': 'ihre.email@beispiel.com',
    'contact.messagePlaceholder': 'Erzählen Sie mir von Ihrem Projekt, Ihrer Gelegenheit oder Ihrer Frage...',
    'contact.requiredFields': '* Pflichtfelder. Ich antworte innerhalb von 24-48 Stunden.',
    'contact.send': 'Nachricht senden',
    'contact.sending': 'Wird gesendet...',

    // Footer
    'footer.builtWith': 'Erstellt mit React & TypeScript.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',
    'nav.downloadCv': 'Download CV',

    // Hero
    'hero.title': 'Hardware & Software Development Engineer',
    'hero.description': `-Combination of classic electrical engineering (HV motors, test bench, embedded systems) and innovative AI application (LLM-based test automation)\n
-Project experience ranging from simulation to design, commissioning, and testing through to series production readiness\n
-Strong interface expertise between development, production, and customers in international projects`,
    'hero.currentRole': 'Project Engineer at EMZ Elektromaschinenzentrale GmbH',
    'hero.location': 'Recklinghausen, Germany',
    'hero.download': 'Download CV',
    'hero.contact': 'Contact',
    'hero.yearsExperience': 'Years Experience',
    'hero.projectsCompleted': 'Projects Completed',

    // About
    'about.title': 'About Me',
    'about.description': 'Technically adept engineer focused on embedded systems, drive technology, and industrial automation. Experience in conception, design, commissioning, model-based development, software integration, and hardware-near programming. Practice-oriented, analytical, team-tested — from idea through prototype to series readiness.',
    'about.areasOfFocus': 'Areas of Focus',
    'about.embeddedSystems': 'Embedded Systems',
    'about.embeddedDesc': 'STM32 microcontrollers, real-time data acquisition, hardware-near programming',
    'about.driveTechnology': 'Drive Technology',
    'about.driveDesc': 'High-voltage motors, industrial automation, engineering & project execution',
    'about.llmTesting': 'LLM-based Test Automation',
    'about.llmDesc': 'AI-powered test case generation, custom neural network optimization',
    'about.languages': 'Languages',
    'about.certifications': 'Certifications',
    'about.additionalSkills': 'Additional Skills & Interests',
    'about.leadershipExperience': 'Leadership Experience',
    'about.leadershipDesc': 'Led 5 students in agile project environments, demonstrating team coordination and project management skills',

    // Experience
    'experience.title': 'Professional Experience',
    'experience.description': 'My professional journey in electrical engineering, from hands-on experience to specialized engineering roles',
    'experience.present': 'Present',
    'experience.responsibilities': 'Key Responsibilities',
    'experience.achievements': 'Key Achievements',

    // Skills
    'skills.title': 'Technical Skills',
    'skills.description': 'Comprehensive technical expertise across various engineering domains',
    'skills.programming': 'Programming Languages',
    'skills.simulation': 'Simulation & Design',
    'skills.hardware': 'Hardware & Embedded',
    'skills.ai': 'AI & ML',
    'skills.protocols': 'Protocols/Tools',
    'skills.yearsExp': 'Years Experience',
    'skills.proficiencyLevel': 'Proficiency Level',

    // Projects
    'projects.title': 'Featured Projects',
    'projects.description': 'A showcase of my engineering projects spanning embedded systems, AI/ML, and advanced automotive technologies',
    'projects.keyResults': 'Key Results & Impact:',
    'projects.interestedTitle': 'Interested in My Work?',
    'projects.interestedDesc': 'I\'m always excited to discuss new engineering challenges and collaboration opportunities.',
    'projects.getInTouch': 'Get In Touch',
    'projects.viewAll': 'View All Projects',

    // Education
    'education.title': 'Education',
    'education.description': 'Academic foundation in electrical engineering with specialization in embedded systems, automation, and artificial intelligence',
    'education.inProgress': 'In Progress',
    'education.specialization': 'Specialization:',
    'education.thesis': 'Thesis:',
    'education.keyHighlights': 'Key Highlights:',
    'education.academicAchievements': 'Academic Achievements',
    'education.keyCourses': 'Key Coursework',
    'education.languageCerts': 'Language Certifications',
    'education.germanCert': 'Advanced German proficiency certification for academic studies',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'Interested in collaboration, new opportunities, or discussing engineering challenges? I\'d love to hear from you.',
    'contact.contactInfo': 'Contact Information',
    'contact.professionalLinks': 'Professional Links',
    'contact.linkedin': 'Professional network and career updates',
    'contact.gitlab': 'Code repositories and technical projects',
    'contact.cvTitle': 'Curriculum Vitae',
    'contact.cvDesc': 'Download my complete CV with detailed experience and project information.',
    'contact.downloadCvPdf': 'Download CV (PDF)',
    'contact.sendMessage': 'Send a Message',
    'contact.fullName': 'Full Name',
    'contact.email': 'Email Address',
    'contact.message': 'Message',
    'contact.namePlaceholder': 'Your full name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.messagePlaceholder': 'Tell me about your project, opportunity, or question...',
    'contact.requiredFields': '* Required fields. I\'ll respond within 24-48 hours.',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',

    // Footer
    'footer.builtWith': 'Built with React & TypeScript.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};