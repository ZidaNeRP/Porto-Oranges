import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, FileText, Target } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Computer Engineering graduate from Universitas Diponegoro with strong technical foundation"
    },
    {
      icon: Target,
      title: "Project Coordination",
      description: "Proven track record in leading cross-functional teams and delivering complex technical projects"
    },
    {
      icon: FileText,
      title: "System Documentation",
      description: "Expert in creating comprehensive technical documentation and process workflows"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Skilled in facilitating communication between technical and business stakeholders"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn delay={200}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Passionate technology professional with expertise in bridging the gap between business requirements and technical solutions
            </p>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto">
          <FadeIn delay={300}>
            <Card className="mb-12 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  As a Computer Engineering graduate from Universitas Diponegoro, I bring a unique blend of technical expertise and business acumen to every project. My experience spans across project management, business analysis, and system analysis, where I've consistently delivered innovative solutions that align business objectives with scalable technology implementations.
                </p>
                <br />
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I excel in coordinating cross-functional teams, creating comprehensive system documentation, and facilitating seamless communication between technical and business stakeholders. My approach combines analytical thinking with practical problem-solving, ensuring that every solution not only meets current requirements but is designed for future scalability.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <FadeIn key={highlight.title} delay={400 + index * 100}>
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <highlight.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;