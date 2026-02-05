import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { profile } from '@/app/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Get in Touch
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            I'm open to new opportunities and collaborations. Feel free to reach out.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <Card className="animate-in fade-in-0 slide-in-from-left-12 duration-500">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href={`tel:${profile.phone}`} className="text-muted-foreground hover:text-foreground transition-colors">
                    {profile.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">{profile.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col justify-center items-center text-center space-y-6 animate-in fade-in-0 slide-in-from-right-12 duration-500">
             <p className="text-lg">
              Have a project in mind or want to connect?
            </p>
            <Button asChild size="lg" className="w-full max-w-xs">
              <a href={`mailto:${profile.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Send me an Email
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">I'll get back to you as soon as possible.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
