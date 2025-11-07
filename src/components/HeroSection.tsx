typescript 
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('what-we-do');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-hero ai-circuit-motif">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10 pt-14">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary fade-in-up">
            Step into the next era of growth — with people leading and AI empowering.
          </h1>
          
          {/* Subheadline */}
          <h3 className="font-body text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up">
            Combine human insight with intelligent automation to build a business that adapts faster, works smarter, and grows stronger.
          </h3>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 fade-in-up">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => window.location.href = '/assessment'}
            >
              Start the AI Readiness Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="btn-secondary text-lg px-8 py-4"
              onClick={scrollToNext}
            >
              Learn More
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
