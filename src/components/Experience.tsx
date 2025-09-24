import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Project Engineer',
      company: 'EMZ Elektromaschinenzentrale GmbH',
      period: 'Present',
      location: 'Aachen, Germany',
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
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my professional journey in embedded systems, 
            drive technology, and industrial automation
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline dot */}
                <div className={`timeline-dot ${exp.current ? 'bg-primary' : 'bg-muted-foreground'}`}></div>
                
                <div className="card-project">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-primary font-semibold mb-2">
                        <span>{exp.company}</span>
                        {exp.current && (
                          <span className="tech-pill-accent text-xs">Current</span>
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
              Research Publication
            </h3>
            <p className="text-muted-foreground mb-4">
              "Thermal Integration of High-Speed Electric Machines in Next Generation EDUs"
            </p>
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span>View Publication</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;