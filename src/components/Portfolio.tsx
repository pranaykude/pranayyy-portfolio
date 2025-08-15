import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Users, Zap, Rocket, Star, TrendingUp, Award, Play, Eye, Layers } from "lucide-react";
const Portfolio = () => {
  const projects = [{
    title: "Talent Hand",
    subtitle: "Digital Job Platform for Rural Workers",
    description: "A comprehensive platform bridging the employment gap between rural workers and urban employers. Features advanced job matching algorithms, skill verification systems, and location-based opportunities to empower rural communities.",
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "Angular", "Bootstrap"],
    features: ["AI-powered job matching algorithm", "Real-time worker verification system", "Geo-location based job discovery", "Mobile-responsive interface", "Secure authentication & authorization", "Advanced search and filtering"],
    metrics: [{
      label: "Active Users",
      value: "500+"
    }, {
      label: "Jobs Posted",
      value: "150+"
    }, {
      label: "Success Rate",
      value: "85%"
    }],
    icon: Users,
    color: "from-blue-500 to-blue-600",
    category: "Social Impact",
    status: "Live",
    priority: "high"
  }, {
    title: "Vastra",
    subtitle: "Modern E-commerce Platform",
    description: "Large-scale e-commerce solution featuring AI-powered customer support, seamless payment processing, and cloud-based architecture. Built for scalability with modern shopping experiences and advanced analytics.",
    tech: ["Spring Boot", "Hibernate", "AWS S3", "Razorpay", "Twilio", "Angular", "MySQL"],
    features: ["Intelligent AI chatbot for customer support", "Integrated Razorpay payment gateway", "AWS S3 cloud storage architecture", "SMS notifications via Twilio API", "Real-time analytics dashboard", "Advanced inventory management", "Multi-vendor support system"],
    metrics: [{
      label: "Daily Transactions",
      value: "200+"
    }, {
      label: "Product Catalog",
      value: "1000+"
    }, {
      label: "Uptime",
      value: "99.9%"
    }],
    icon: Code,
    color: "from-purple-500 to-purple-600",
    category: "E-commerce",
    status: "Development",
    priority: "high"
  }];
  const stats = [{
    label: "Projects Delivered",
    value: "2+",
    icon: Rocket,
    trend: "+100%"
  }, {
    label: "Technologies Mastered",
    value: "15+",
    icon: Layers,
    trend: "+25%"
  }, {
    label: "APIs Integrated",
    value: "8+",
    icon: Zap,
    trend: "+60%"
  }, {
    label: "Code Quality Score",
    value: "95%",
    icon: Award,
    trend: "+15%"
  }];
  const achievements = ["🏆 Built scalable applications serving 500+ users", "⚡ Optimized API response times by 40%", "🔒 Implemented robust security measures", "☁️ Successfully deployed on AWS cloud infrastructure"];
  return <section id="portfolio" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-32 left-16 w-56 h-56 bg-primary/3 rounded-full blur-3xl floating-slow"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl floating-element"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="glass-card rounded-2xl px-8 py-4 w-fit mx-auto mb-8">
            <p className="section-label flex items-center gap-2">
              <Rocket className="h-4 w-4" />
              My Work
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-primary mx-auto rounded-full mb-8 shadow-glow"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Real-world applications solving complex problems with modern technologies and innovative approaches
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => <Card key={index} className="glass-card border-0 text-center group hover:scale-105 transition-all duration-300 animate-scale-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                <Badge variant="secondary" className="bg-green-500/10 text-green-500 text-xs">
                  {stat.trend}
                </Badge>
              </CardContent>
            </Card>)}
        </div>

        {/* Enhanced Projects Showcase */}
        <div className="space-y-16">
          {projects.map((project, index) => <Card key={index} className="glass-card border-0 overflow-hidden group animate-fade-up" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Project Visual & Info */}
                <div className="lg:col-span-1 p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="space-y-4">
                    {/* Project Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center`}>
                          <project.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <Badge variant="secondary" className={`mb-1 text-xs ${project.status === 'Live' ? 'bg-green-500/10 text-green-500' : 'bg-blue-500/10 text-blue-500'}`}>
                            {project.status}
                          </Badge>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider">{project.category}</div>
                        </div>
                      </div>
                      <Star className="h-4 w-4 text-yellow-500" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                      <p className="text-sm text-primary font-medium mb-3">{project.subtitle}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>

                    {/* Project Metrics */}
                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((metric, metricIndex) => <div key={metricIndex} className="text-center p-2 rounded-lg bg-background/20">
                          <div className="text-sm font-bold text-primary">{metric.value}</div>
                          <div className="text-xs text-muted-foreground">{metric.label}</div>
                        </div>)}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <Github className="mr-2 h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Technical Details */}
                <div className="lg:col-span-2 p-6">
                  <div className="space-y-6">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Layers className="h-4 w-4 text-primary" />
                        Technology Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => <Badge key={techIndex} className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-xs">
                            {tech}
                          </Badge>)}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        Key Features & Capabilities
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-muted-foreground text-xs">{feature}</span>
                          </div>)}
                      </div>
                    </div>

                    {/* Project Highlights */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        Project Achievements
                      </h4>
                      <div className="space-y-1">
                        {achievements.slice(0, 2).map((achievement, achIndex) => <div key={achIndex} className="text-xs text-muted-foreground">
                            {achievement}
                          </div>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Enhanced CTA Section */}
        <Card className="glass-card border-0 mt-20 bg-gradient-to-r from-primary/5 to-accent/5 animate-fade-up">
          <CardContent className="p-12 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto shadow-primary">
                <Github className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">Explore More Projects</h3>
              <p className="text-muted-foreground leading-relaxed text-lg font-light max-w-xl mx-auto">
                Discover additional projects, experiments, and contributions on my GitHub profile. 
                From small utilities to complex applications, each project represents a learning journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-modern" onClick={() => window.open('https://github.com/pranaykude', '_blank')}>
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects
                </Button>
                <Button className="btn-glass" onClick={() => document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Let's Collaborate
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default Portfolio;