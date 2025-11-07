typescript 
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section 1: Bio */}
      <section className="section-hero bg-background pt-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-primary leading-tight">
              About Lucent.AI
            </h1>
            
            <div className="font-body text-lg text-muted-foreground leading-relaxed space-y-6 mb-12">
              <p>
                Rohit Anand is the founder of Lucent.AI and an advisor to organizations transforming toward AI-enabled performance.
              </p>
              <p>
                With 25+ years of global experience at Philips and NTT Data, he has led transformations across supply chain, shared services, and digital enablement — delivering results such as faster cycle times, improved flow, and a $300M reduction in aged inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission Block */}
      <section className="section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-primary">
              Our Mission
            </h2>
            
            <div className="font-body text-xl text-muted-foreground leading-relaxed space-y-6">
              <p>
                We believe technology should empower, not overwhelm.
              </p>
              <p>
                Our mission is to make AI accessible, actionable, and human-led — helping businesses of all sizes find clarity, speed, and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Tagline */}
      <section className="section-standard bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary cyan-glow-text">
              Human-led. AI-enabled.
            </h2>
          </div>
          
          {/* Subtle cyan glow motif behind text */}
          <div className="absolute inset-0 ai-circuit-motif opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
