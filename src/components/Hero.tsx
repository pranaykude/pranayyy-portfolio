import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, Mail, ExternalLink, Sparkles, Code, Coffee, Zap, Globe, Star } from "lucide-react";
import pranayProfile from "@/assets/pranay-profile-updated.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const statusCards = [
    { icon: Code, text: "Building Apps", position: "top-20 left-10", delay: "0s" },
    { icon: Coffee, text: "Fueled by Coffee", position: "top-32 right-20", delay: "1s" },
    { icon: Zap, text: "Spring Boot Expert", position: "bottom-40 left-16", delay: "2s" },
    { icon: Globe, text: "AWS Certified", position: "bottom-20 right-12", delay: "0.5s" },
  ];

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Mesh Background */}
      <div className="mesh-bg"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl floating-delayed"></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 bg-primary/5 rounded-lg rotate-45 floating-slow"></div>
      <div className="absolute top-40 right-1/3 w-16 h-16 bg-accent/10 rounded-full floating-element"></div>

      <div className="container mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Enhanced Text Content */}
          <div className="space-y-8">
            {/* Status Badge - Positioned left and up */}
            <div className="flex justify-end mb-6 mr-12 mt-2">
              <div className="glass-card rounded-full px-6 py-3 w-fit">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-foreground">Available for opportunities</span>
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="section-label animate-slide-up">
                  Final Year B.Tech Student
                </p>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight animate-slide-up" style={{animationDelay: '0.1s'}}>
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Hi, I'm
                  </span><br />
                  <span className="relative">
                    <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent font-space">
                      Pranay Kude
                    </span>
                    <div className="absolute -inset-6 bg-primary/15 rounded-3xl -z-10 blur-2xl animate-pulse"></div>
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                  Aspiring Software Engineer | Full Stack & Backend Developer
                </h2>
              </div>
              
              <p className="hero-description max-w-2xl">
                Building scalable, maintainable, and impactful software solutions with expertise in 
                Java, Spring Boot, AWS, and modern full-stack technologies. Passionate about creating 
                digital experiences that make a difference.
              </p>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4" style={{animationDelay: '0.7s'}}>
              <Button 
                className="btn-modern group"
                onClick={() => scrollToSection('portfolio')}
              >
                <span className="flex items-center">
                  View My Work
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button 
                className="btn-glass group"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Get In Touch
              </Button>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3 pt-4" style={{animationDelay: '0.9s'}}>
              {['Java', 'Spring Boot', 'AWS', 'Angular', 'MySQL'].map((tech, index) => (
                <div 
                  key={tech} 
                  className="glass-subtle rounded-full px-4 py-2 text-sm font-medium floating-element"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Profile Section */}
          <div className="relative animate-scale-in">
            {/* Status Cards */}
            {statusCards.map((card, index) => (
              <Card 
                key={index}
                className={`status-card ${card.position} hidden lg:block`}
                style={{animationDelay: card.delay}}
              >
                <CardContent className="p-0 flex items-center gap-2">
                  <card.icon className="h-4 w-4 text-primary" />
                  <span className="text-foreground/90">{card.text}</span>
                </CardContent>
              </Card>
            ))}

            {/* Profile Container */}
            <div className="profile-container mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Enhanced Animated Rings */}
              <div className="profile-rings">
                {/* Primary Ring */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 animate-pulse"></div>
                
                {/* Secondary Ring */}
                <div className="absolute -inset-4 rounded-3xl border border-accent/20 animate-[spin_10s_linear_infinite]"></div>
                
                {/* Tertiary Ring */}
                <div className="absolute -inset-8 rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* Floating Particles */}
                <div className="absolute -inset-12">
                  <div className="absolute top-0 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="absolute top-1/4 right-0 w-1.5 h-1.5 bg-accent/70 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-1/4 left-0 w-2.5 h-2.5 bg-primary/40 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
                  <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-accent/80 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                </div>
                
                {/* Gradient Orbs */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-md floating-delayed"></div>
                
                {/* Geometric Elements */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 border-2 border-primary/40 rotate-45 floating-element"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-accent/50 rounded-full floating-slow"></div>
                
                {/* Modern Tech Lines */}
                <div className="absolute top-0 right-0 w-16 h-0.5 bg-gradient-to-r from-transparent to-primary/60 rotate-45 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-l from-transparent to-accent/60 -rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              {/* Glow Effect */}
              <div className="profile-glow"></div>
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden glass-card border-2 border-primary/20">
                <img 
                  src={pranayProfile} 
                  alt="Pranay Kude - Software Engineer"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-primary/10"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary"></div>
              </div>
              
              {/* Floating Achievement Badges */}
              <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 floating-element">
                <div className="text-center">
                  <Star className="h-6 w-6 text-yellow-500 mx-auto mb-1" />
                  <p className="text-xs font-semibold">Top Performer</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4 floating-delayed">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => scrollToSection('about')}
          className="glass-card rounded-full p-4 hover:bg-primary/10 transition-all duration-300 group"
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground group-hover:text-primary animate-bounce" />
        </button>
        <p className="text-xs text-muted-foreground text-center mt-2">Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;