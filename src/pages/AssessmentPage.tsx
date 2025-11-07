typescript 
import Header from '@/components/Header';
import ScoreAppAssessment from '@/components/ScoreAppAssessment';
import FooterSection from '@/components/FooterSection';

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Assessment Section */}
      <section className="section-standard bg-background pt-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              AI Readiness Assessment
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Discover where your business stands and unlock your personalized AI transformation playbook.
            </p>
          </div>
          
          <ScoreAppAssessment />
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
