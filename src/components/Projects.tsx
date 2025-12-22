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

const projects: Project[] = [
  {
    title: "Civilify",
    subtitle: "AI-powered legal assistant providing accurate Philippine legal information and case plausibility assessments",
    challenge: "Accessing accurate Philippine legal information and assessing case plausibility requires extensive legal knowledge and research, which can be time-consuming and inaccessible for many individuals.",
    solution: "Built an AI-powered legal assistant using retrieval-augmented generation (RAG) to provide accurate Philippine legal information and case plausibility assessments through natural language queries.",
    implementation: "Engineered a full-stack application with React 18 frontend, Spring Boot backend with JWT authentication, Firebase Firestore for conversations, and PostgreSQL with pgvector for semantic search of 1,500+ Philippine legal provisions including the Constitution, Civil Code, Revised Penal Code, and Rules of Court.",
    techStack: ["Spring Boot", "React", "Firebase", "PostgreSQL", "pgvector", "JWT"],
    github: "https://github.com/keithruezyl1/CivilifyG48",
  },
  {
    title: "SPOT",
    subtitle: "Comprehensive classroom management and attendance tracking platform with QR codes and facial recognition",
    challenge: "Managing classroom seating arrangements, tracking attendance manually, and generating analytics reports is inefficient and time-consuming for educators.",
    solution: "Built a comprehensive multi-platform classroom management system enabling teachers to manage digital seating arrangements, track attendance via QR codes and facial recognition, and generate analytics reports.",
    implementation: "Engineered a full-stack multi-platform application using React/TypeScript with Shadcn UI for the web frontend, Spring Boot with Java for the REST API backend, MySQL for data persistence, and native Android (Kotlin) for the mobile app, featuring JWT authentication and Google OAuth integration.",
    techStack: ["React", "TypeScript", "Spring Boot", "MySQL", "Android", "Kotlin", "JWT", "Google OAuth"],
    github: "https://github.com/bardatt1/IT342-SPOT",
  },
  {
    title: "FinApp",
    subtitle: "Full-featured e-commerce platform for premium apparel shopping tailored for the Philippine market",
    challenge: "Creating a seamless e-commerce experience for premium apparel shopping in the Philippines requires proper authentication, shopping cart management, order processing, and localized shipping support.",
    solution: "Built a complete full-featured e-commerce platform with comprehensive shopping cart management, order processing with cancellation capabilities, role-based access control, and Philippine-localized shipping.",
    implementation: "Engineered a complete full-stack application using React for the frontend, Spring Boot with Spring Security for the backend, and MySQL for the database, featuring JWT authentication, shopping cart management, order processing with cancellation capabilities, role-based access control (admin/user), and Philippine-localized shipping with barangay-level address support.",
    techStack: ["React", "Spring Boot", "Spring Security", "MySQL", "JWT"],
    github: "https://github.com/bardatt1/FinApp",
  },
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
          className="flex flex-wrap justify-center gap-6"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.title} 
              variants={itemVariants}
              className="w-full md:w-[calc(50%-12px)] lg:max-w-lg"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/bardatt1"
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

