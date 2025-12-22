import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 group"
          >
            <Code2 className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
            <span className="font-display font-bold text-lg gradient-text">
              Brett.dev
            </span>
          </a>

          {/* Divider */}
          <div className="w-16 h-px bg-border" />

          {/* Credits */}
          <p className="text-muted-foreground text-sm text-center">
            © {currentYear} Brett Westley A. Arda
          </p>

        </motion.div>
      </div>
    </footer>
  );
}

