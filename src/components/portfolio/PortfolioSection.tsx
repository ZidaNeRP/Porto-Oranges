import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Digitalization System for Logistics Company",
      role: "Project Manager",
      description: "Led the complete digital transformation of a traditional logistics company, implementing modern tracking systems and automated workflows.",
      challenges: [
        "Legacy system integration",
        "Staff training and adoption",
        "Real-time tracking implementation"
      ],
      outcomes: [
        "40% reduction in processing time",
        "Improved customer satisfaction scores",
        "Seamless staff transition to digital workflows"
      ],
      technologies: ["Project Management", "SDLC", "Process Optimization", "Team Leadership"],
      duration: "8 months",
      teamSize: "12 members"
    },
    {
      title: "Government Learning Platform",
      role: "Business Analyst",
      description: "Analyzed requirements and designed user flows for a comprehensive e-learning platform serving government employees nationwide.",
      challenges: [
        "Complex stakeholder requirements",
        "Scalability for nationwide deployment",
        "Accessibility compliance"
      ],
      outcomes: [
        "Served 10,000+ concurrent users",
        "98% user satisfaction rate",
        "Full accessibility compliance achieved"
      ],
      technologies: ["Business Analysis", "UML", "Requirement Gathering", "User Experience Design"],
      duration: "6 months",
      teamSize: "8 members"
    },
    {
      title: "Backend Integration and UI Flow",
      role: "System Analyst",
      description: "Designed and documented comprehensive system architecture for seamless backend integration with intuitive user interface flows.",
      challenges: [
        "Complex API integrations",
        "Performance optimization",
        "Cross-platform compatibility"
      ],
      outcomes: [
        "99.9% system uptime achieved",
        "50% improvement in API response times",
        "Unified user experience across platforms"
      ],
      technologies: ["System Analysis", "API Design", "BPMN", "Technical Documentation"],
      duration: "4 months",
      teamSize: "6 members"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Portfolio & Case Studies</h2>
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
                      <Badge variant="secondary" className="text-sm">
                        {project.role}
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
                    <Button variant="ghost" className="group p-0 h-auto">
                      <span className="mr-2">View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
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