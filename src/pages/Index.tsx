import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { ExternalLink, Code, Brain, Sparkles, Mail, Github, Linkedin } from "lucide-react";

const projects = [
  {
    title: "My Store",
    description: "A full-featured e-commerce web application with product listings, cart functionality, and a clean shopping experience.",
    url: "https://tharunkumarpogula.github.io/My-store.com/",
    tags: ["E-Commerce", "Web App", "Frontend"],
  },
  {
    title: "AI DOE Company",
    description: "An AI-powered company platform showcasing modern AI integration, smart workflows, and intelligent automation.",
    url: "https://aidoecompany-uere.vercel.app/",
    tags: ["AI", "SaaS", "Full Stack"],
  },
];

const aboutCards = [
  { icon: Code, title: "WEB DEVELOPMENT", desc: "Crafting responsive, performant web applications with modern frameworks and clean architecture." },
  { icon: Brain, title: "AI EXPERTISE", desc: "Deep understanding of how AI works — from prompt engineering to integrating intelligent systems into real products." },
  { icon: Sparkles, title: "VIBE CODING", desc: "A complete vibe coder — blending creativity, AI tools, and developer intuition to ship fast and beautifully." },
];

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground scroll-smooth">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-border"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <span className="text-2xl font-voltage tracking-widest">TK</span>
          <div className="flex gap-8 text-sm tracking-wider">
            {["ABOUT", "PROJECTS", "CONTACT"].map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="hover:text-sage transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-sage after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary" />
        <div className="relative z-10 text-center px-6">
          <motion.p
            className="text-sage tracking-[0.4em] text-sm mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            WEB DEVELOPER & AI ENTHUSIAST
          </motion.p>
          <motion.h1
            className="text-6xl md:text-8xl font-voltage tracking-wider mb-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            THARUN KUMAR
            <br />
            <span className="text-sage">POGULA</span>
          </motion.h1>
          <motion.p
            className="text-sage-light/80 max-w-xl mx-auto text-lg leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            Building the future with code & AI — a complete vibe coder who understands how artificial intelligence works and leverages it to create exceptional digital experiences.
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-block border-2 border-sage px-10 py-4 tracking-[0.3em] text-sm text-sage hover:bg-sage hover:text-primary transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            VIEW WORK
          </motion.a>
        </div>
      </section>

      {/* About */}
      <Section id="about" className="py-28 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-voltage tracking-wider text-sage mb-12 text-center">ABOUT ME</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {aboutCards.map((item, i) => (
              <motion.div
                key={item.title}
                className="border border-border p-8 text-center hover:border-sage transition-colors duration-300 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <item.icon className="w-10 h-10 mx-auto mb-4 text-sage group-hover:scale-110 transition-transform" />
                <h3 className="font-voltage tracking-wider text-lg mb-3">{item.title}</h3>
                <p className="text-sage-light/70 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" className="py-28 px-6 bg-accent/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-voltage tracking-wider text-sage mb-16 text-center">PROJECTS</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-border hover:border-sage transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div className="relative w-full aspect-video overflow-hidden bg-olive-dark">
                  <iframe
                    src={project.url}
                    title={project.title}
                    className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none border-0"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-sage" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-voltage tracking-wider text-xl mb-2 group-hover:text-sage transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sage-light/70 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs border border-border px-3 py-1 tracking-wider text-sage-light/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-28 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-voltage tracking-wider text-sage mb-8">GET IN TOUCH</h2>
          <p className="text-sage-light/70 mb-12 leading-relaxed">
            Interested in working together or have a project in mind? Let's connect and build something amazing.
          </p>
          <div className="flex justify-center gap-6">
            {[
              { href: "mailto:tharunkumarpogula@gmail.com", icon: Mail },
              { href: "https://github.com/tharunkumarpogula", icon: Github, external: true },
              { href: "#", icon: Linkedin },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="border border-border p-4 hover:border-sage hover:text-sage transition-colors"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center">
        <p className="text-sage-light/50 text-sm tracking-wider">
          © 2026 THARUN KUMAR POGULA — ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
};

export default Index;
