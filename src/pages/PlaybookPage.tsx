typescript 
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';

export default function PlaybookPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section 1: Banner */}
      <section className="section-hero bg-background pt-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Left Side - Image */}
              <div className="flex justify-center">
                <img 
                  src="/images/Screenshot 2025-11-05 at 7.54.59 PM.png" 
                  alt="AI-Ready Enterprise Transformation Playbook" 
                  className="max-w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Right Side - Content */}
              <div className="text-center lg:text-left">
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
                  Unlock the Playbook after your assessment.
                </h1>
                
                <div className="font-body text-xl text-muted-foreground mb-12 leading-relaxed space-y-4">
                  <p>
                    The AI-Ready Enterprise Transformation Playbook reveals how small and mid-sized businesses can simplify work, connect data, and apply AI intelligently — one step at a time.
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="btn-primary text-lg px-8 py-4"
                  onClick={() => window.open('https://scoreapp.com', '_blank')}
                >
                  Take the AI Readiness Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why It Matters */}
      <section className="section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-primary">
              Why this Playbook stands out
            </h2>
            
            <div className="font-body text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                Designed by practitioners with real-world results — including $300M inventory reduction and faster cycle times — the Playbook translates enterprise-level methods into practical, scalable steps for small and mid-sized companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
