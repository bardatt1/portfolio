import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * Contact/Social Link Interface
 */
interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  link: string | null;
}

/**
 * TODO: Replace with your actual contact information
 * 
 * Please provide:
 * 1. Your email address
 * 2. Your location (city, country)
 * 3. Your GitHub profile URL
 * 4. Your LinkedIn profile URL
 * 5. Any other social media profiles (Twitter, etc.)
 */
const contactInfo: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    // TODO: Replace with your email
    value: "your.email@example.com",
    link: "mailto:your.email@example.com", // TODO: Update mailto link
  },
  {
    icon: MapPin,
    label: "Location",
    // TODO: Replace with your location
    value: "Cebu City, Philippines",
    link: null,
  },
  {
    icon: Github,
    label: "GitHub",
    // TODO: Replace with your GitHub username
    value: "github.com/yourusername",
    link: "https://github.com/yourusername", // TODO: Update GitHub link
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    // TODO: Replace with your LinkedIn name
    value: "Brett Westley A. Arda",
    link: "https://linkedin.com/in/yourusername", // TODO: Update LinkedIn link
  },
  // TODO: Add more social links as needed
  // Uncomment and configure if you have Twitter:
  // {
  //   icon: Twitter,
  //   label: "Twitter",
  //   value: "@yourusername",
  //   link: "https://twitter.com/yourusername",
  // },
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

export function Connect() {
  return (
    <section id="connect" className="section bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, and ideas.
            Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <motion.div key={info.label} variants={itemVariants}>
                <Card className="hover:shadow-hover hover:border-primary/30 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        {info.link ? (
                          <Button
                            variant="link"
                            className="p-0 h-auto font-medium text-foreground hover:text-primary truncate max-w-full justify-start"
                            asChild
                          >
                            <a
                              href={info.link}
                              target={info.link.startsWith("mailto") ? undefined : "_blank"}
                              rel={info.link.startsWith("mailto") ? undefined : "noopener noreferrer"}
                            >
                              {info.value}
                            </a>
                          </Button>
                        ) : (
                          <p className="font-medium truncate">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Interested in working together? Let's build something amazing!
          </p>
          <Button
            size="lg"
            asChild
          >
            {/* TODO: Update with your actual email */}
            <a href="mailto:your.email@example.com">
              <Mail className="mr-2 h-5 w-5" />
              Send me an email
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Silence unused import warning for Twitter icon
void Twitter;

