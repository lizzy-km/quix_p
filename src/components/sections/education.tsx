import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { education } from '@/app/lib/data';

export default function Education() {
  return (
    <section id="education" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Education
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            My academic background and qualifications.
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          <Card className="animate-in fade-in-0 zoom-in-95 duration-500">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl">{education.degree}</CardTitle>
                <p className="font-semibold text-primary">{education.institution}</p>
                <p className="text-sm text-muted-foreground">{education.period}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{education.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
