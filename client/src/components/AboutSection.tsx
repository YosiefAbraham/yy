import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="4"
          title="About Me"
          subtitle="Passionate about creating exceptional digital experiences"
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-6">
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p data-testid="text-about-p1">
                I'm a full-stack developer with a passion for building scalable, user-focused applications.
                With over 5 years of experience in the tech industry, I've had the privilege of working with
                innovative companies and talented teams to bring ideas to life.
              </p>

              <p data-testid="text-about-p2">
                My expertise spans the entire development lifecycle, from initial concept and design through
                deployment and maintenance. I believe in writing clean, maintainable code and staying current
                with the latest technologies and best practices.
              </p>

              <p data-testid="text-about-p3">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community through blog posts and mentoring.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="default" data-testid="button-download-resume">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
              <Button variant="outline" data-testid="button-contact-me">
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Button>
            </div>

            <div className="flex gap-4 pt-2">
              <Button variant="ghost" size="icon" data-testid="link-github-about">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" data-testid="link-linkedin-about">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-card-border overflow-hidden shadow-xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-9xl font-bold text-primary/30">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
