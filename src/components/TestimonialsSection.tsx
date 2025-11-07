typescript 
import { Card, CardContent } from '@/components/ui/card';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Rohit has an exceptional ability to see across the value chain, connect the dots, and turn challenges into sustainable results.",
      author: "Regional Operations Leader, Technology Sector"
    },
    {
      quote: "He simplifies complex problems, builds flow across functions, and creates clarity in the middle of chaos.",
      author: "Former Colleague, Global Supply Chain Organization"
    },
    {
      quote: "Rohit inspires confidence and alignment across teams. His leadership combines strong analytics with empathy.",
      author: "Senior Director, Business Excellence Partner"
    }
  ];

  return (
    <section className="section-standard bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
            What leaders say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-squarespace">
              <CardContent className="p-8">
                <blockquote className="font-body text-lg text-primary italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="font-body text-sm text-muted-foreground font-medium">
                  — {testimonial.author}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
