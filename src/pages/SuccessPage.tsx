typescript 
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, ExternalLink, Mail, Linkedin } from 'lucide-react';
import Header from '@/components/Header';
import FooterSection from '@/components/FooterSection';

export default function SuccessPage() {
  const scoreCategories = [
    {
      category: "Early Stage",
      message: "Focus on simplifying and stabilizing your key processes.",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200"
    },
    {
      category: "Developing",
      message: "Start connecting data across teams and cleaning inputs.",
      color: "bg-blue-100 text-blue-800 border-blue-200"
    },
    {
      category: "Advanced",
      message: "Pilot automation and AI in targeted areas with measurable ROI.",
      color: "bg-green-100 text-green-800 border-green-200"
    },
    {
      category: "Leading Edge",
      message: "Expand adoption across functions and refine governance.",
      color: "bg-purple-100 text-purple-800 border-purple-200"
    }
  ];

  const quickWins = [
    {
      step: "1️⃣",
      title: "Explore tailored Quick Wins",
      link: "/services#quickwins"
    },
    {
      step: "2️⃣",
      title: "Connect your data for insights",
      link: "/services#dataconnect"
    },
    {
      step: "3️⃣",
      title: "Automate where it matters",
      link: "/services#automate"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Section 1: Hero */}
      <section className="section-hero bg-background pt-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-accent text-accent-foreground font-heading mb-6 text-lg px-4 py-2">
              ASSESSMENT COMPLETE
            </Badge>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary leading-tight">
              Great job — you're one step ahead.
            </h1>
            
            <h2 className="font-body text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Your assessment revealed how your business can move faster, adapt smarter, and make AI work for you.
            </h2>
          </div>
        </div>
      </section>

      {/* Section 2: What Your Score Means */}
      <section className="section-standard bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-primary">
                What Your Score Means
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scoreCategories.map((category, index) => (
                <Card key={index} className="card-squarespace">
                  <CardHeader>
                    <Badge className={`${category.color} w-fit mb-2`}>
                      {category.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-body text-muted-foreground">
                      {category.message}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Turn Insight into Action */}
      <section className="section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-primary">
              Translate your Playbook into results.
            </h2>
            
            <div className="font-body text-lg text-muted-foreground mb-12 leading-relaxed">
              <p>
                Book a 30-minute strategy call to design your 30-day action plan based on your assessment results.
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => {
                // This would typically open Calendly
                console.log('Book strategy call');
              }}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4: Quick Wins */}
      <section className="section-standard bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {quickWins.map((win, index) => (
                <Card key={index} className="card-squarespace text-center">
                  <CardHeader>
                    <div className="text-3xl mb-2">{win.step}</div>
                    <CardTitle className="font-heading text-lg text-primary">
                      {win.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline"
                      className="btn-secondary w-full"
                      onClick={() => window.location.href = win.link}
                    >
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Playbook Access */}
      <section className="section-alt">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="card-squarespace bg-accent/5 border-accent/30">
              <CardContent className="p-12">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-primary">
                  Your Playbook is Ready
                </h2>
                <div className="font-body text-lg text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    We've sent a copy of your personalized AI-Ready Playbook to your email.
                  </p>
                  <p>
                    Check your inbox — and start turning insight into action.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 6: Stay in Touch */}
      <section className="section-standard bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-primary">
              Have questions or want help implementing your results?
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="outline"
                className="btn-secondary"
                onClick={() => window.location.href = 'mailto:hello@lucent-ai.net'}
              >
                <Mail className="mr-2 h-4 w-4" />
                hello@lucent-ai.net
              </Button>
              
              <Button 
                variant="outline"
                className="btn-secondary"
                onClick={() => window.open('https://linkedin.com/in/rohitanand', '_blank')}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                Connect with Rohit Anand
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
