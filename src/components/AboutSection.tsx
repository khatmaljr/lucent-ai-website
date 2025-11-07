typescript 
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              Human-led. AI-enabled.
            </h2>
            
            <div className="font-body text-lg text-muted-foreground mb-8 leading-relaxed space-y-4">
              <p>
                Founded by transformation leader Rohit Anand, Lucent.AI combines 25+ years of global experience in business excellence and digital operations.
              </p>
              <p>
                We partner with organizations to design simple, measurable steps toward smarter, faster, and more adaptive performance.
              </p>
            </div>
            
            <Button 
              variant="outline"
              className="btn-secondary"
              onClick={() => window.location.href = '/about'}
            >
              Meet Lucent.AI
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Right Side - Logo Watermark */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/images/LucentAI Icon.png" 
                alt="Lucent.AI" 
                className="w-64 h-64 opacity-20 filter grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
