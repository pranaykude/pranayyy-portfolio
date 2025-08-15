import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  Target, 
  Award, 
  Lightbulb,
  Heart,
  Rocket,
  Code2,
  Database
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education Excellence",
      description: "B.Tech in CSE & IT, IPS Academy, Indore",
      detail: "Graduating 2026 with honors",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Briefcase,
      title: "Professional Experience", 
      description: "Software Development Intern",
      detail: "Amestech Pvt. Ltd. - Full Stack Development",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Leadership & Collaboration",
      description: "Team player with leadership experience",
      detail: "Led multiple project teams successfully",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "Specialized Focus",
      description: "Backend & Full Stack Development",
      detail: "Java ecosystem and cloud technologies",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const achievements = [
    { icon: Code2, label: "Clean Code Advocate", value: "Always" },
    { icon: Database, label: "Database Design", value: "Expert" },
    { icon: Rocket, label: "Problem Solving", value: "Advanced" },
    { icon: Award, label: "Team Projects", value: "5+" }
  ];

  const coreValues = [
    { icon: Lightbulb, text: "Continuous learning and innovation", color: "text-yellow-500" },
    { icon: Heart, text: "Passion for clean, maintainable code", color: "text-red-500" },
    { icon: Target, text: "Results-driven problem solving", color: "text-blue-500" },
    { icon: Users, text: "Collaborative team development", color: "text-green-500" }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl floating-slow"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/5 rounded-full blur-2xl floating-element"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="glass-card rounded-2xl px-8 py-4 w-fit mx-auto mb-8">
            <p className="text-primary font-medium text-sm uppercase tracking-wider">Get to know me</p>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about crafting digital solutions that bridge the gap between complex problems and elegant code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Bio Content */}
          <div className="space-y-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
            {/* Main Bio Card */}
            <Card className="glass-card border-0 p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Code2 className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Building the Future, One Line at a Time
                  </h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I am a final-year B.Tech student passionate about building <span className="text-primary font-medium">scalable, 
                    maintainable, and impactful software solutions</span>. My journey blends academic 
                    excellence with real-world experience in full-stack development, RESTful API 
                    design, and cloud deployment.
                  </p>
                  
                  <p>
                    During my transformative internship at <span className="text-primary font-medium">Amestech Pvt. Ltd.</span>, I gained 
                    hands-on experience in professional software development, working on both frontend 
                    and backend systems that serve real users and solve genuine business challenges.
                  </p>
                  
                  <p>
                    My technical expertise spans the complete <span className="text-primary font-medium">Java ecosystem</span>, from Spring Boot 
                    microservices to cloud-native AWS applications. I'm particularly passionate about 
                    backend architecture and creating robust, scalable APIs that power modern digital experiences.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Core Values */}
            <Card className="glass-card border-0 p-6">
              <CardContent className="p-0">
                <h4 className="text-lg font-semibold mb-6 text-foreground flex items-center gap-3">
                  <Heart className="h-5 w-5 text-red-500" />
                  Core Values & Philosophy
                </h4>
                <div className="space-y-4">
                  {coreValues.map((value, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 p-3 rounded-xl bg-background/20 hover:bg-background/30 transition-all duration-300"
                    >
                      <value.icon className={`h-5 w-5 ${value.color}`} />
                      <span className="text-muted-foreground">{value.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="glass-card border-0 p-4 text-center hover:scale-105 transition-all duration-300"
                >
                  <CardContent className="p-0">
                    <achievement.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground mb-1">{achievement.value}</div>
                    <div className="text-xs text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Highlights Grid */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="glass-card border-0 overflow-hidden group hover:scale-105 transition-all duration-500 animate-scale-in"
                style={{animationDelay: `${0.4 + index * 0.1}s`}}
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-6 p-6">
                    {/* Icon Container */}
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-2 text-lg">{item.title}</h4>
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                        {item.detail}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </CardContent>
              </Card>
            ))}

            {/* Call to Action */}
            <Card className="glass-card border-0 p-6 text-center bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-0">
                <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">Ready for New Challenges</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Always excited to tackle complex problems and build innovative solutions
                </p>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-500 font-medium">Available for opportunities</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;