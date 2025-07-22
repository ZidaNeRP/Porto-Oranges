import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const PortfolioHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img 
          src="/lovable-uploads/a0278ce1-b82d-4ed6-a186-14a9503ef65c.png" 
          alt="Portfolio Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn delay={200}>
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center text-4xl font-bold text-white">
                  ZRP
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={300}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white leading-tight mb-6 text-balance">
              Zidane Romandhon Putra
            </h1>
          </FadeIn>
          
          <FadeIn delay={400}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto text-balance">
              Bridging Business Goals with Scalable Tech Solutions
            </p>
          </FadeIn>
          
          <FadeIn delay={500}>
            <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
              Project Manager • Business Analyst • System Analyst specializing in SDLC, process optimization, and cross-functional team leadership
            </p>
          </FadeIn>
          
          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <a
                  href="/Zidane Romandhon Putra-CV.pdf"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors border rounded-md bg-white text-black hover:bg-gray-200 group"
                >
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" className="group">
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