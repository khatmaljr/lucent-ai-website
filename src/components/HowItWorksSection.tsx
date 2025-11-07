typescript 
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Search, Target, TrendingUp } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1️⃣",
      title: "Diagnose",
      description: "Take the AI Readiness Assessment to pinpoint where your processes slow you down.",
      icon: <Search className="h-16 w-16 text-accent" />
    },
    {
      number: "2️⃣",
      title: "Prioritize",
      description: "Identify your biggest quick wins in process, data, and automation.",
      icon: <Target className="h-16 w-16 text-accent" />
    },
    {
      number: "3️⃣",
      title: "Pilot & Grow",
      description: "Use insights from the Playbook to act fast — test, learn, and scale what works.",
      icon: <TrendingUp className="h-16 w-16 text-accent" />
    }
  ];

  return (
    <section className="section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            From stuck to streamlined — in three steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="card-squarespace text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <div className="text-3xl mb-2">{step.number}</div>
                <CardTitle className="font-heading text-xl text-primary">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body text-muted-foreground leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="btn-primary text-lg px-8 py-4"
            onClick={() => window.location.href = '/assessment'}
          >
            Start the Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
