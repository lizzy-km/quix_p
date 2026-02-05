import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/app/lib/data';

export default function Hero() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 text-center md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-in fade-in-0 slide-in-from-top-8 duration-500">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              {profile.name}
            </h1>
            <p className="text-xl font-medium text-primary md:text-2xl">
              {profile.title}
            </p>
          </div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-in fade-in-0 slide-in-from-top-10 duration-500 delay-100">
            {profile.summary}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 animate-in fade-in-0 slide-in-from-top-12 duration-500 delay-200">
            <Button asChild size="lg">
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link href={profile.social.github} target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={profile.social.linkedin} target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
