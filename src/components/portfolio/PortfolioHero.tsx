import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const PortfolioHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/lovable-uploads/a0278ce1-b82d-4ed6-a186-14a9503ef65c.png" 
          alt="Portfolio Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Foto Profil Bulat */}
          <FadeIn delay={200}>
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full border border-white/20 bg-white/10 p-1">
                <img
                  src="/images/foto4.jpg"
                  alt="Zidane Romandhon Putra"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </FadeIn>

          {/* Nama */}
          <FadeIn delay={300}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white leading-tight mb-6 text-balance">
              Zidane Romandhon Putra
            </h1>
          </FadeIn>
          
          {/* Headline */}
          <FadeIn delay={400}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-balance">
              Bridging Business Goals with Scalable Tech Solutions
            </p>
          </FadeIn>
          
          {/* Subheadline */}
          <FadeIn delay={500}>
            <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
              Project Manager • Business Analyst • System Analyst • and Cross-functional Team Leadership
            </p>
          </FadeIn>
          
          {/* Buttons */}
          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group"
              >
                <a href="/Zidane Romandhon Putra-CV.pdf" download>
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Download CV
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group"
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Contact Me
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
