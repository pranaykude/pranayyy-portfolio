import { Github, Linkedin, Mail, Heart, ArrowUp, Code, Coffee, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/pranaykude",
      label: "GitHub",
      color: "hover:bg-gray-600"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pranay-kude-5ba242265",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      icon: Mail,
      href: "mailto:pranaykude990@gmail.com",
      label: "Email",
      color: "hover:bg-red-600"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const techStack = ["Java", "Spring Boot", "AWS", "Angular", "MySQL"];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-primary/3 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl floating-delayed"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  Pranay
                </h3>
                <p className="text-primary font-medium mb-4">Software Engineer • Full Stack Developer</p>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate about building scalable, impactful solutions with modern technologies. 
                  Currently seeking opportunities to contribute to innovative projects and grow with dynamic teams.
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Code className="h-4 w-4 text-primary" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => window.open(link.href, '_blank')}
                      className={`w-12 h-12 glass-card rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 ${link.color} group`}
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground text-lg">Quick Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors animated-underline block w-full text-left py-1"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Status */}
            <div className="space-y-6">
              <h4 className="font-semibold text-foreground text-lg">Get In Touch</h4>
              
              <Card className="glass-card border-0 p-4">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-500 font-medium">Available for opportunities</span>
                  </div>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      pranaykude990@gmail.com
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-base">📍</span>
                      Indore, Madhya Pradesh
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-base">🎓</span>
                      B.Tech CSE & IT (2026)
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="btn-modern w-full"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Let's Collaborate
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Enhanced Copyright Section */}
              <div className="glass-card rounded-2xl px-8 py-4 border border-primary/20 backdrop-blur-sm bg-gradient-to-r from-background/80 to-primary/5 shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="flex items-center gap-2 text-lg font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  © {currentYear} Pranay Kude. Made with 
                  <Heart className="h-5 w-5 text-red-500 animate-pulse" /> 
                  and lots of 
                  <Coffee className="h-5 w-5 text-amber-500 hover:scale-110 transition-transform duration-200" />
                </p>
              </div>
              
              {/* Modern Separator */}
              <div className="hidden md:flex items-center gap-2">
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary/40 to-transparent"></div>
                <div className="w-1 h-1 bg-accent/60 rounded-full"></div>
              </div>
              
              {/* Enhanced Tech Stack Badge */}
              <div className="glass-subtle rounded-xl px-6 py-3 border border-accent/10 bg-gradient-to-r from-accent/5 to-background/50">
                <p className="text-base font-medium text-muted-foreground/90 hover:text-foreground transition-colors duration-200">
                  Built with React, TypeScript & Tailwind CSS
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <p className="text-xs text-muted-foreground">Last updated: December 2024</p>
              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="glass-card border-0 hover:bg-primary hover:text-primary-foreground group"
              >
                <ArrowUp className="h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
                Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;