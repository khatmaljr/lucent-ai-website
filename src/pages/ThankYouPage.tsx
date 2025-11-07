typescript 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Calendar, BookOpen, BarChart3, TrendingUp, Target } from 'lucide-react';
import Footer from '@/components/Footer';

export default function ThankYouPage() {
  const playbookFeatures = [
    {
      title: "Current State Overview",
      description: "Understand where you stand today.",
      icon: <BarChart3 className="h-6 w-6 text-accent" />
    },
    {
      title: "Practical Steps", 
      description: "Simple, doable actions for immediate gains.",
      icon: <Target className="h-6 w-6 text-accent" />
    },
    {
      title: "Metrics & Flow Gains",
      description: "How to measure and sustain progress.",
      icon: <TrendingUp className="h-6 w-6 text-accent" />
    },
    {
      title: "Growth Roadmap",
      description: "How to move from pilot to scale.",
      icon: <BookOpen className="h-6 w-6 text-accent" />
    }
  ];

  const metrics = [
    {
      metric: "10 days → 4 days",
      description: "Cycle time reduced"
    },
    {
      metric: "€300M",
      description: "Inventory down via flow optimization"
    },
    {
      metric: "AI-driven decisions",
      description: "Improving speed & quality"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="container mx-auto">
          <div className="flex items-center">
            <img 
              src="/images/LucentAI Logo 2.png" 
              alt="Lucent.AI" 
              className="h-6"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-accent text-accent-foreground font-heading mb-6">
              ASSESSMENT COMPLETE
            </Badge>
            
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-primary">
              You're One Step Closer to Smarter, Faster Operations.
            </h1>
            
            <div className="font-body text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed space-y-4">
              <p>
                Your personalized AI Readiness Playbook has been sent to your inbox.
              </p>
              <p>
                It's your roadmap to simplifying workflows, connecting data, and automating what matters most.
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-6"
              onClick={() => {
                // This would typically open the playbook PDF
                console.log('Open playbook');
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Open My Playbook
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1 - Inside Your Playbook */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-primary">
                Inside Your Playbook
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {playbookFeatures.map((feature, index) => (
                <Card key={index} className="card-elegant text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="font-heading text-lg text-primary">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-body text-sm text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Ready to Take the Next Step */}
      <section className="section-padding cyan-glow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-primary">
              Turn Your Playbook Into Action.
            </h2>
            
            <div className="font-body text-lg text-muted-foreground mb-12 leading-relaxed space-y-4">
              <p>
                Our team can help you unpack your Playbook results, identify high-impact opportunities, and co-create a 30-day action plan.
              </p>
              <p>
                It's free, focused, and designed to move you from insight to execution.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-6"
                onClick={() => {
                  // This would typically open Calendly
                  console.log('Book strategy session');
                }}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book a 30-Minute Strategy Session
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="btn-secondary text-lg px-8 py-6"
                onClick={() => window.location.href = '/about'}
              >
                Learn How Lucent.AI Works
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Results in Motion */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-primary">
                Real Impact. Real Flow.
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                We focus on what matters — improving flow, reducing friction, and freeing people to do higher-value work.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="card-elegant text-center">
                  <CardContent className="p-8">
                    <div className="text-2xl md:text-3xl font-heading font-bold text-accent mb-2 glow-text">
                      {metric.metric}
                    </div>
                    <p className="font-body text-sm text-muted-foreground">
                      {metric.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Stay Connected */}
      <section className="section-padding cyan-glow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-primary">
              Keep Improving, One Step at a Time.
            </h2>
            
            <div className="font-body text-lg text-muted-foreground mb-12">
              <p>
                Join the Lucent.AI community for insights, success stories, and bite-sized guides on modernizing how work gets done.
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-6"
              onClick={() => {
                // This would typically open newsletter signup
                console.log('Subscribe to insights');
              }}
            >
              Subscribe to Lucent.AI Insights
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
