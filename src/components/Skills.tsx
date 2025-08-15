import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Server, 
  Cloud, 
  Database, 
  Globe, 
  Wrench,
  Brain,
  Users,
  Star,
  TrendingUp,
  Zap,
  Shield
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "HTML5", "CSS3", "MySQL"],
      color: "from-blue-500 to-blue-600",
      proficiency: 90
    },
    {
      icon: Server,
      title: "Backend & Frameworks",
      skills: ["Spring Boot", "Hibernate", "Spring Security", "REST APIs", "Microservices"],
      color: "from-green-500 to-green-600",
      proficiency: 88
    },
    {
      icon: Globe,
      title: "Frontend Development",
      skills: ["Angular", "Bootstrap", "Responsive Design", "DOM Manipulation"],
      color: "from-purple-500 to-purple-600",
      proficiency: 82
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS (S3, EC2)", "Git", "GitHub", "Cloud Deployment"],
      color: "from-orange-500 to-orange-600",
      proficiency: 78
    },
    {
      icon: Wrench,
      title: "Development Tools",
      skills: ["IntelliJ IDEA", "VS Code", "Eclipse", "Postman", "Swagger"],
      color: "from-cyan-500 to-cyan-600",
      proficiency: 85
    },
    {
      icon: Database,
      title: "Third-party Integrations",
      skills: ["Razorpay", "Twilio", "Third-party APIs", "Payment Gateways"],
      color: "from-pink-500 to-pink-600",
      proficiency: 80
    },
    {
      icon: Brain,
      title: "Technical Expertise",
      skills: ["Problem Solving", "System Design", "API Design", "Database Design"],
      color: "from-indigo-500 to-indigo-600",
      proficiency: 92
    },
    {
      icon: Users,
      title: "Professional Skills",
      skills: ["Team Collaboration", "Decision Making", "Analytical Thinking", "Leadership"],
      color: "from-red-500 to-red-600",
      proficiency: 87
    }
  ];

  const topSkills = [
    { name: "Java Development", level: 92, icon: Code, trend: "+15%" },
    { name: "Spring Boot", level: 88, icon: Server, trend: "+12%" },
    { name: "REST API Design", level: 90, icon: Zap, trend: "+18%" },
    { name: "Database Design", level: 85, icon: Database, trend: "+10%" },
    { name: "AWS Cloud", level: 78, icon: Cloud, trend: "+25%" },
    { name: "Angular Framework", level: 82, icon: Globe, trend: "+14%" }
  ];

  const certifications = [
    { name: "AWS Fundamentals", provider: "Amazon Web Services", status: "In Progress" },
    { name: "Spring Framework", provider: "Self-Certified", status: "Completed" },
    { name: "Java Programming", provider: "Academic", status: "Completed" }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-10 w-48 h-48 bg-primary/3 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/5 rounded-full blur-2xl floating-delayed"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="glass-card rounded-2xl px-8 py-4 w-fit mx-auto mb-8">
            <p className="text-primary font-medium text-sm uppercase tracking-wider flex items-center gap-2">
              <Star className="h-4 w-4" />
              Technical Expertise
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable applications with cutting-edge technologies
          </p>
        </div>

        {/* Core Competencies - Featured Skills */}
        <Card className="glass-card border-0 mb-16 overflow-hidden animate-fade-up">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl flex items-center justify-center gap-3">
              <TrendingUp className="h-6 w-6 text-primary" />
              Core Competencies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="space-y-4 p-6 rounded-2xl bg-background/20 hover:bg-background/30 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                        <skill.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <span className="font-semibold text-foreground">{skill.name}</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-500 text-xs">
                      {skill.trend}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Proficiency</span>
                      <span className="text-sm font-medium text-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="glass-card border-0 overflow-hidden group hover:scale-105 transition-all duration-500 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{category.proficiency}%</div>
                    <div className="text-xs text-muted-foreground">Proficiency</div>
                  </div>
                </div>
                <CardTitle className="text-base font-semibold leading-tight">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs bg-background/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Progress value={category.proficiency} className="h-1" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Learning */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="glass-card border-0 animate-fade-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                Certifications & Learning
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-4 rounded-xl bg-background/20 hover:bg-background/30 transition-colors"
                >
                  <div>
                    <h4 className="font-medium text-foreground">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
                  </div>
                  <Badge 
                    variant={cert.status === 'Completed' ? 'default' : 'secondary'}
                    className={cert.status === 'Completed' ? 'bg-green-500 hover:bg-green-600' : ''}
                  >
                    {cert.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Learning Philosophy */}
          <Card className="glass-card border-0 bg-gradient-to-br from-primary/5 to-accent/5 animate-fade-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Brain className="h-5 w-5 text-primary" />
                Learning Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                My approach combines theoretical knowledge with hands-on practice.
              </p>
              <div className="space-y-3">
                {[
                  "📚 Daily tech reading and research",
                  "🔨 Building practical projects",
                  "🤝 Contributing to open source",
                  "💡 Experimenting with new frameworks"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-sm">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;