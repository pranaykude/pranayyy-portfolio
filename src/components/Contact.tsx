import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone,
  Send,
  MessageCircle,
  Clock,
  CheckCircle2,
  Sparkles,
  Calendar,
  Star,
  ExternalLink,
  Loader2
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS Configuration
  const EMAILJS_PUBLIC_KEY = 'ey3H_RfKDfIEuURgP';
  const EMAILJS_SERVICE_ID = 'service_ho1nciq';  
  const EMAILJS_TEMPLATE_ID = 'template_58ipj49';

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pranaykude990@gmail.com",
      detail: "Primary contact method",
      href: "mailto:pranaykude990@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect professionally",
      detail: "Let's network and collaborate",
      href: "https://www.linkedin.com/in/pranay-kude-5ba242265",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my repositories",
      detail: "Explore my code and projects",
      href: "https://github.com/pranaykude",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Indore, Madhya Pradesh",
      detail: "Open to remote opportunities",
      href: null,
      color: "from-green-500 to-green-600"
    }
  ];

  const availability = [
    { icon: Clock, label: "Response Time", value: "< 24h", detail: "Usually within 4-6 hours" },
    { icon: CheckCircle2, label: "Availability", value: "Open", detail: "Available for new opportunities" },
    { icon: Calendar, label: "Best Time", value: "9 AM - 6 PM IST", detail: "Monday to Friday" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Pranay', // Your name
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours!",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-primary/3 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-accent/5 rounded-full blur-2xl floating-delayed"></div>
      
      <div className="container mx-auto px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="glass-card rounded-2xl px-8 py-4 w-fit mx-auto mb-8">
            <p className="text-primary font-medium text-sm uppercase tracking-wider flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Let's Connect
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's discuss opportunities, collaborations, or just have a conversation about technology and innovation
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="glass-card border-0 animate-scale-in h-full">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Send className="h-6 w-6 text-primary" />
                  Send Me a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Drop me a line and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background/30 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background/30 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, opportunity, or just say hello! I'm excited to hear from you."
                      rows={8}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background/30 border-border/50 focus:border-primary focus:ring-primary/20 resize-none rounded-xl"
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full btn-modern group">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">
                      Usually responds within 4-6 hours • All messages are welcome
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6 animate-fade-up" style={{animationDelay: '0.2s'}}>
            {/* Intro Card */}
            <Card className="glass-card border-0 bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Let's Connect!</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ready to collaborate on exciting projects and innovative solutions.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-500 font-medium text-xs">Available for opportunities</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <Card 
                  key={index} 
                  className={`glass-card border-0 group hover:scale-105 transition-all duration-300 ${contact.href ? 'cursor-pointer' : ''}`}
                  onClick={contact.href ? () => window.open(contact.href, '_blank') : undefined}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-foreground text-sm">{contact.label}</h4>
                          {contact.href && <ExternalLink className="h-3 w-3 text-muted-foreground" />}
                        </div>
                        <p className="text-muted-foreground font-medium text-xs truncate">{contact.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Stats */}
            <Card className="glass-card border-0 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  Quick Info
                </h4>
                <div className="space-y-3">
                  {availability.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/20">
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium text-foreground text-xs">{item.label}</p>
                          <p className="text-xs text-muted-foreground">{item.detail}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {item.value}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Social Connect Card */}
          <Card className="glass-card border-0 bg-gradient-to-br from-primary/10 to-accent/10 animate-fade-up">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Let's Connect</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with me on professional platforms for networking and collaboration opportunities.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Button 
                  className="btn-modern"
                  onClick={() => window.open('https://www.linkedin.com/in/pranay-kude-5ba242265', '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Button>
                <Button 
                  className="btn-glass"
                  onClick={() => window.open('https://github.com/pranaykude', '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Collaboration Card */}
          <Card className="glass-card border-0 bg-gradient-to-br from-accent/10 to-secondary/10 animate-fade-up" style={{animationDelay: '0.1s'}}>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Start a Project</h3>
                <p className="text-muted-foreground text-sm">
                  Have an idea? Let's turn it into reality. I'm always excited about new challenges and innovations.
                </p>
              </div>
              <div className="flex justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Ready to collaborate • Fast response time • Quality focused
              </p>
              <Button 
                className="btn-modern w-full"
                onClick={() => document.getElementById('message')?.focus()}
              >
                <Send className="mr-2 h-4 w-4" />
                Start Conversation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;