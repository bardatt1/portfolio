import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/**
 * Project Data Interface
 * 
 * Each project should contain:
 * - title: Project name
 * - subtitle: Short description
 * - challenge: The problem or challenge addressed
 * - solution: How you solved it
 * - implementation: Technical details
 * - techStack: Array of technologies used
 * - github?: GitHub repository URL (optional)
 * - demo?: Live demo URL (optional)
 */
interface Project {
  title: string;
  subtitle: string;
  challenge: string;
  solution: string;
  implementation: string;
  techStack: string[];
  github?: string;
  demo?: string;
}

/**
 * TODO: Replace with your actual projects
 * 
 * Please provide for each project:
 * 1. Project name
 * 2. Brief description/subtitle
 * 3. The Challenge: What problem were you solving?
 * 4. The Solution: How did you approach solving it?
 * 5. Technical Implementation: What technologies/techniques did you use?
 * 6. Tech stack (array of technologies)
 * 7. GitHub URL (optional)
 * 8. Live demo URL (optional)
 */
const projects: Project[] = [
  {
    // TODO: Replace with your first project
    title: "Project Name 1",
    subtitle: "Brief description of what this project does",
    challenge: "Describe the problem or challenge this project addresses.",
    solution: "Explain your approach to solving the problem.",
    implementation: "Detail the technical implementation and key features.",
    techStack: ["Tech 1", "Tech 2", "Tech 3"],
    github: undefined, // TODO: Add your GitHub URL
    demo: undefined, // TODO: Add your demo URL
  },
  {
    // TODO: Replace with your second project
    title: "Project Name 2",
    subtitle: "Brief description of what this project does",
    challenge: "Describe the problem or challenge this project addresses.",
    solution: "Explain your approach to solving the problem.",
    implementation: "Detail the technical implementation and key features.",
    techStack: ["Tech 1", "Tech 2", "Tech 3"],
    github: undefined, // TODO: Add your GitHub URL
    demo: undefined, // TODO: Add your demo URL
  },
  // TODO: Add more projects as needed
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-hover hover:border-primary/30 transition-all duration-300 group overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </CardTitle>
            <CardDescription className="text-sm">
              {project.subtitle}
            </CardDescription>
          </div>
          <div className="flex gap-2 shrink-0">
            {project.github && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            )}
            {project.demo && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:text-primary"
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View live demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-primary mb-1">
            The Challenge
          </h4>
          <p className="text-sm text-muted-foreground">{project.challenge}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary mb-1">
            The Solution
          </h4>
          <p className="text-sm text-muted-foreground">{project.solution}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary mb-1">
            Technical Implementation
          </h4>
          <p className="text-sm text-muted-foreground">{project.implementation}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real-world solutions showcasing full-stack development expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* TODO: Add your GitHub profile link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          {/* 
            TODO: Replace "#" with your actual GitHub profile URL
            Example: href="https://github.com/yourusername"
          */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:underline transition-all"
          >
            <Github className="w-5 h-5" />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

