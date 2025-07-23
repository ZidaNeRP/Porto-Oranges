import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const PortfolioSection = () => {
  const [activePhotos, setActivePhotos] = useState<string[] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Company Website & Legal Branding System",
      role: "Project Manager & System Analyst",
      at: "PT. Cahaya Trans Utama",
      description: "Led a cross-functional team to design and develop a company website for a logistics firm, including legal and branding components.",
      challenges: [
        "Aligning business needs with technical specifications",
        "Ensuring HAKI (intellectual property) compliance",
        "Managing remote collaboration across teams"
      ],
      outcomes: [
        "Delivered project on-time within 10 months",
        "Completed HAKI registration for brand assets",
        "Improved internal system visibility and digital presence"
      ],
      technologies: ["System Analysis", "UI/UX Design", "Project Coordination", "Legal Documentation"],
      duration: "10 months",
      teamSize: "3 members",
      photos: [
        "/images/project1/foto1.png",
        "/images/project1/foto2.png",
        "/images/project1/foto3.png"
      ]
    },
    {
      title: "PPSDM Migas Learning Animation Project",
      role: "Project Manager",
      at: "PT. Lontong Opus Magnum (Lopus)",
      description: "As Vendor managed the production of educational video content for a national oil and gas training center under the Indonesian Ministry of Energy.",
      challenges: [
        "Gathering diverse training materials from government PICs",
        "Coordinating content production with creative teams",
        "Ensuring deadlines for multiple animation outputs"
      ],
      outcomes: [
        "Completed content delivery within timeline",
        "Received positive feedback from clients",
        "Enhanced team collaboration using project management tools"
      ],
      technologies: ["Content Management", "Project Planning", "Stakeholder Communication", "Davinci Resolve", "Adobe After Effect"],
      duration: "12 months",
      teamSize: "10 members",
      photos: [
        "/images/project2/foto1.jpg",
        "/images/project2/foto2.jpg",
        "/images/project2/foto3.jpg"
      ]
    },
    {
      title: "Public Service Web Template",
      role: "Backend Developer Intern",
      at: "Diskominfo Semarang",
      description: "Contributed to the development of backend systems and responsive web design templates at Semarang City Government’s Communication Office.",
      challenges: [
        "Working with legacy systems and municipal requirements",
        "Designing modern UI while preserving accessibility",
        "Coordinating with limited technical documentation"
      ],
      outcomes: [
        "Delivered functional template used in multiple city apps",
        "Improved backend data integration and response times",
        "Enhanced interface consistency across platforms"
      ],
      technologies: ["PHP", "MySQL", "UI Design", "Responsive Web", "Backend Integration"],
      duration: "1 months",
      teamSize: "7 members",
      photos: [
        "/images/project3/foto1.jpg",
        "/images/project3/foto2.jpg",
        "/images/project3/foto3.jpg"
      ]
    },
    {
      title: "Electrical Product Development",
      role: "R&D Assistant Intern",
      at: "PT. Tata Rapika Globalindo",
      description: "Assisted in the research and development of electrical products from prototype to mass production, collaborating with cross-functional teams.",
      challenges: [
        "Ensuring product design aligned with production capabilities",
        "Collaborating with engineering and marketing to meet market needs",
        "Documenting technical specifications under supervision"
      ],
      outcomes: [
        "Supported development of a new product line from concept to pilot phase",
        "Maintained and updated technical documentation for testing and production",
        "Improved communication between R&D and production units"
      ],
      technologies: ["Electrical Design", "Technical Documentation", "Product Testing", "Cross-functional Coordination"],
      duration: "6 months",
      teamSize: "4 members",
      photos: [
        "/images/project4/foto1.jpg",
        "/images/project4/foto2.jpg",
        "/images/project4/foto3.jpg"
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Showcasing successful projects where business goals meet innovative technical solutions
            </p>
          </div>
        </FadeIn>

        <div className="max-w-7xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={300 + index * 200}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-sm mr-2">
                        {project.role}
                      </Badge>
                      <Badge variant="secondary" className="text-sm">
                        {project.at}
                      </Badge>
                    </div>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>Duration: {project.duration}</span>
                      <span>Team: {project.teamSize}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-destructive">Key Challenges</h4>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-green-600">Outcomes & Results</h4>
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          className="group p-0 h-auto"
                          onClick={() => {
                            setActivePhotos(project.photos || []);
                            setActiveIndex(0);
                          }}
                        >
                          <span className="mr-2">View Photos</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                      </DialogTrigger>

                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle className="text-xl mb-4">Project Photos</DialogTitle>
                        </DialogHeader>
                        {activePhotos && activePhotos.length > 0 ? (
                          <div className="relative">
                            <img
                              src={activePhotos[activeIndex]}
                              alt={`Slide ${activeIndex + 1}`}
                              className="w-full rounded-md object-cover max-h-[500px]"
                            />
                            <div className="flex justify-between mt-4">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  setActiveIndex(
                                    (prev) => (prev - 1 + activePhotos.length) % activePhotos.length
                                  )
                                }
                              >
                                Prev
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  setActiveIndex((prev) => (prev + 1) % activePhotos.length)
                                }
                              >
                                Next
                              </Button>
                            </div>
                            <p className="text-center text-sm text-muted-foreground mt-2">
                              {activeIndex + 1} / {activePhotos.length}
                            </p>
                          </div>
                        ) : (
                          <p className="text-sm text-muted-foreground">No photos available.</p>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
