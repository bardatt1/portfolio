import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Skills Data Interface
 * 
 * TODO: Provide your skills for each category
 * Each category should have:
 * - title: Category name (e.g., "Languages", "Frontend")
 * - icon: Lucide icon component
 * - skills: Array of skill strings
 */
interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

/**
 * TODO: Replace placeholder skills with your actual skills
 * 
 * Please provide the following:
 * 1. Programming Languages (e.g., JavaScript, TypeScript, Python, Java, C++)
 * 2. Frontend Technologies (e.g., React, Vue, Angular, HTML, CSS, Tailwind)
 * 3. Backend Technologies (e.g., Node.js, Express, Spring Boot, Django)
 * 4. Databases (e.g., PostgreSQL, MySQL, MongoDB, Firebase)
 * 5. Cloud & DevOps (e.g., AWS, GCP, Azure, Docker, Kubernetes)
 * 6. Tools (e.g., Git, VS Code, Figma, Postman)
 */
const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    // TODO: Add your programming languages
    skills: ["Add your programming languages here"],
  },
  {
    title: "Frontend",
    icon: Layout,
    // TODO: Add your frontend technologies
    skills: ["Add your frontend technologies here"],
  },
  {
    title: "Backend",
    icon: Server,
    // TODO: Add your backend technologies
    skills: ["Add your backend technologies here"],
  },
  {
    title: "Databases",
    icon: Database,
    // TODO: Add your database technologies
    skills: ["Add your databases here"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    // TODO: Add your cloud and DevOps tools
    skills: ["Add your cloud/DevOps tools here"],
  },
  {
    title: "Tools",
    icon: Wrench,
    // TODO: Add your development tools
    skills: ["Add your tools here"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function Skills() {
  return (
    <section id="skills" className="section bg-secondary/30">
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
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div key={category.title} variants={itemVariants}>
                <Card className="h-full hover:shadow-hover hover:border-primary/30 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="hover:bg-primary/10 transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

