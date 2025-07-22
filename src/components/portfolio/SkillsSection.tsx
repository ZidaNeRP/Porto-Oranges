import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Project Management",
      skills: ["SDLC", "Agile Methodology", "Scrum", "Project Planning", "Risk Management", "Team Leadership"]
    },
    {
      title: "Business Analysis",
      skills: ["Requirement Gathering", "Process Mapping", "Stakeholder Management", "User Story Creation", "Gap Analysis"]
    },
    {
      title: "System Analysis",
      skills: ["BPMN", "UML", "System Design", "Technical Documentation", "API Integration", "Database Design"]
    },
    {
      title: "Tools & Software",
      skills: ["Trello", "Asana", "Microsoft Excel", "Figma", "DaVinci Resolve", "Confluence", "JIRA"]
    }
  ];

  const certifications = [
    {
      title: "Google Project Management Certificate",
      issuer: "Google",
      year: "2023",
      type: "Professional Certificate"
    },
    {
      title: "PWC Data-Driven Decision Making",
      issuer: "PricewaterhouseCoopers",
      year: "2023",
      type: "Professional Development"
    },
    {
      title: "CCNA - Cisco Certified Network Associate",
      issuer: "Cisco",
      year: "2022",
      type: "Technical Certification"
    },
    {
      title: "HAKI Registration Handling",
      issuer: "Ministry of Law and Human Rights",
      year: "2023",
      type: "Specialized Training"
    }
  ];

  const achievements = [
    "Successfully managed 15+ cross-functional projects",
    "Led digital transformation initiatives saving 40% processing time",
    "Designed systems serving 10,000+ concurrent users",
    "Achieved 98% stakeholder satisfaction rate",
    "Reduced system integration time by 50%"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Skills & Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Technical expertise and professional certifications that drive successful project delivery
            </p>
          </div>
        </FadeIn>

        <div className="max-w-7xl mx-auto space-y-12">
          {/* Skills */}
          <FadeIn delay={300}>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Core Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skillCategories.map((category, index) => (
                    <div key={category.title} className="space-y-4">
                      <h3 className="font-semibold text-lg text-primary">{category.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Certifications */}
          <FadeIn delay={400}>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  Certifications & Training
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <div key={cert.title} className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-background/50">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">{cert.year}</Badge>
                          <Badge variant="outline" className="text-xs">{cert.type}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Key Achievements */}
          <FadeIn delay={500}>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Key Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;