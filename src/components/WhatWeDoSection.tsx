typescript 
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, BarChart3, Bot } from 'lucide-react';

export default function WhatWeDoSection() {
  const services = [
    {
      icon: <Settings className="h-12 w-12 text-accent" />,
      title: "Process",
      description: "Streamline workflows and eliminate bottlenecks"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-accent" />,
      title: "Data", 
      description: "Connect and unify information across teams"
    },
    {
      icon: <Bot className="h-12 w-12 text-accent" />,
      title: "Automation",
      description: "Deploy intelligent solutions that amplify human capability"
    }
  ];

  return (
    <section id="what-we-do" className="section-standard bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              We help small and mid-sized businesses work smarter — not harder.
            </h2>
            
            <div className="font-body text-lg text-muted-foreground mb-8 leading-relaxed space-y-4">
              <p>
                Lucent.AI empowers growing organizations to simplify workflows, connect their data, and unlock practical AI solutions.
              </p>
              <p>
                It's not about replacing people — it's about helping teams do their best work.
              </p>
            </div>
            
            <Button 
              className="btn-primary"
              onClick={() => window.open('https://scoreapp.com', '_blank')}
            >
              Discover what's holding you back
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Right Side - Icons */}
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-accent/5 transition-colors">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
