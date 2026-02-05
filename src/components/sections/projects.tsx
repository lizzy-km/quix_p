import Image from 'next/image';
import Link from 'next/link';
import { Github, Link as LinkIcon } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/app/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            My Projects
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A selection of projects that demonstrate my skills and passion for development.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            console.log(project,PlaceHolderImages)
            const placeholder = PlaceHolderImages.find(p => p.id === project.imageUrl);
            return (
              <Card key={project.title} className="flex flex-col overflow-hidden animate-in fade-in-0 zoom-in-95 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                {placeholder && (
                   <div className="relative aspect-video w-full">
                     <Image
                       src={placeholder.imageUrl}
                       alt={project.title}
                       fill
                       className="object-cover"
                       data-ai-hint={placeholder.imageHint}
                     />
                   </div>
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                   <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <LinkIcon className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                  <Button variant="secondary" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
