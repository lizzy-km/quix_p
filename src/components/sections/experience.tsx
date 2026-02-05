import { Briefcase } from 'lucide-react';
import { experience } from '@/app/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Work Experience
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            My professional journey and key accomplishments.
          </p>
        </div>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {experience.map((job, index) => (
            <div
              key={job.company}
              className={`relative mb-12 animate-in fade-in-0 duration-500 ${
                index % 2 === 0
                  ? 'md:pr-8 md:text-right slide-in-from-left-24'
                  : 'md:pl-8 slide-in-from-right-24'
              }`}
            >
              <div className="absolute left-1/2 top-2 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background"></div>
              <div
                className={`flex flex-col md:w-1/2 ${
                  index % 2 === 0 ? 'md:ml-auto md:items-end' : 'md:items-start'
                }`}
              >
                <div
                  className={`relative rounded-lg border bg-card p-6 shadow-sm md:w-[calc(100%_+_2rem)] ${
                    index % 2 === 0
                      ? 'md:text-left'
                      : 'md:text-left'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">{job.role}</h3>
                  </div>
                  <p className="mt-1 font-semibold text-primary">{job.company}</p>
                  <p className="text-sm text-muted-foreground mb-3">{job.period}</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
