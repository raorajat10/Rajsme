"use client";

import type React from "react";
import emailjs from '@emailjs/browser'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Globe,
  Users,
  Shield,
  Menu,
  X,
  Building2,
  Lightbulb,
  BookOpen,
  Handshake,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, AlertCircle } from "lucide-react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Vision", href: "#vision" },
    { name: "Services", href: "#services" },
    { name: "Goals", href: "#goals" },
  ];

  const goals = [
    {
      icon: TrendingUp,
      title: "Promote Growth & Competitiveness",
      description:
        "Foster a supportive ecosystem for micro, small, and medium enterprises to thrive in domestic and international markets.",
      image: "/business-growth.jpg",
    },
    {
      icon: Globe,
      title: "Facilitate Market Linkages",
      description:
        "Enable MSMEs to access local and global markets via fairs, B2B/B2C shows, e-commerce, and export facilitation.",
      image: "/msme-support.jpg",
    },
    {
      icon: Users,
      title: "Strengthen Entrepreneurial Ecosystems",
      description:
        "Nurture youth, women, and first-generation entrepreneurs with mentorship, training, and incubation support.",
      image: "/about-bg.jpg",
    },
    {
      icon: Shield,
      title: "Advocate for MSME Interests",
      description:
        "Represent the sector's voice in policy dialogues for favorable reforms, schemes, and institutional support.",
      image: "/innovation.jpg",
    },
  ];

  const services = [
    {
      icon: Building2,
      title: "Business Registration & Compliance",
      description:
        "Complete assistance with MSME registration, UDYAM certification, GST registration, and ongoing compliance support.",
      features: [
        "UDYAM Registration",
        "GST Compliance",
        "Legal Documentation",
        "Regulatory Support",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Handshake,
      title: "Market Linkage & Networking",
      description:
        "Connect with buyers, suppliers, and partners through our extensive network and trade facilitation programs.",
      features: [
        "B2B Matchmaking",
        "Trade Shows",
        "Export Facilitation",
        "Supplier Networks",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: GraduationCap,
      title: "Training & Skill Development",
      description:
        "Comprehensive training programs on digital marketing, quality standards, financial management, and more.",
      features: [
        "Digital Marketing",
        "Quality Standards",
        "Financial Planning",
        "Export Readiness",
      ],
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology Support",
      description:
        "Access to latest technologies, innovation labs, and Industry 4.0 tools to modernize your business.",
      features: [
        "Technology Adoption",
        "Innovation Labs",
        "R&D Support",
        "Digital Transformation",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Briefcase,
      title: "Financial Assistance & Credit",
      description:
        "Guidance on accessing government schemes, subsidies, loans, and investment opportunities.",
      features: [
        "Loan Facilitation",
        "Subsidy Guidance",
        "Investment Support",
        "Credit Rating",
      ],
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: BookOpen,
      title: "Knowledge Resources & Research",
      description:
        "Access to industry reports, market research, best practices, and knowledge sharing platforms.",
      features: [
        "Market Research",
        "Industry Reports",
        "Best Practices",
        "Knowledge Sharing",
      ],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  setSubmitStatus('idle')

  try {
    await emailjs.send(
      'service_p29ko3y',
      'template_510pv3o',
      {
        // Match template variables exactly
        name: formData.name,       // Changed from 'from_name' to 'name'
        email: formData.email,     // Changed from 'from_email' to 'email'
        subject: formData.subject, // Re-added, assuming you fix template subject
        message: formData.message,
        time: new Date().toLocaleString(), // Added for the {{time}} placeholder
      },
      'xXItTksjd7stHKVl7'
    )

    setSubmitStatus('success')
    // Reset formData including subject
    setFormData({ name: '', email: '', subject: '', message: '' })
  } catch (error) {
    console.error('EmailJS Error:', error); // This will now show more details on the 400 error
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
    // Optional: Auto-clear status message after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000);
  }
}

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-white/80 backdrop-blur-md"
        } border-b border-slate-200`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <img
                  src="/logoMe.png"
                  alt="RAJSME Logo"
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-grow items-center  space-x-6">
              <div className="hidden md:flex flex-grow items-center  space-x-6 justify-center"> {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-700 hover:text-teal-600 font-medium transition-all duration-300 hover:scale-105 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}</div>
             
             <div className=""> <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button></div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-slate-200 animate-in slide-in-from-top-2 duration-300">
              <nav className="flex flex-col space-y-3 pt-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-slate-700 hover:text-teal-600 font-medium py-2 px-4 rounded-lg hover:bg-slate-50 transition-all duration-300"
                  >
                    {item.name}
                  </button>
                ))}
                <Button className="mt-4  bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-orange-900/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-200">
              <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border-white/30 hover:scale-105 transition-transform duration-300">
                Section 8 Company | CIN: U88100RJ2023NPL087092
              </Badge>
            </div>

            <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-400">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Empowering India's
                <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
                  {" "}
                  MSMEs
                </span>
              </h1>
            </div>

            <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-600">
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                Fostering innovation, sustainable practices, and market access
                for cottage industries to achieve global competitiveness through
                comprehensive support and strategic partnerships.
              </p>
            </div>

            <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-800">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#services")}
                  className="bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg px-8 py-4"
                >
                  Explore Our Services
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("#about")}
                  className="border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md transform hover:scale-105 transition-all duration-300 hover:border-white/50 text-lg px-8 py-4"
                >
                  Learn More About Us
                </Button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-20"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-400 rounded-full animate-pulse opacity-30"></div>
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-bounce opacity-40"></div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/about-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
              <h2 className="text-5xl font-bold text-slate-800 mb-4 drop-shadow-sm">
                About RAJSME
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-6 animate-pulse"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-in fade-in-50 slide-in-from-left-4 duration-700 delay-200">
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-md hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    RAJSME Enterprises Association is a Section 8 company
                    incorporated under the Companies Act, 2013, dedicated to
                    empowering India's Micro, Small & Medium Enterprises (MSMEs)
                    and cottage industries.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    We serve as a bridge between traditional businesses and
                    modern market opportunities, providing comprehensive support
                    for sustainable growth and global competitiveness.
                  </p>
                  <div className="flex items-center space-x-4 text-teal-600">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Trusted by 1000+ MSMEs</p>
                      <p className="text-sm text-slate-600">Across India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="animate-in fade-in-50 slide-in-from-right-4 duration-700 delay-400">
              <div className="relative">
                <img
                  src="/msme-support.jpg"
                  alt="MSME Support"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        id="vision"
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/vision-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
              <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Our Vision
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto mb-6 animate-pulse"></div>
            </div>
          </div>
          <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-200">
            <Card className="max-w-5xl mx-auto border-0 shadow-2xl bg-white/10 backdrop-blur-lg hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <CardContent className="p-12">
                <p className="text-2xl text-white leading-relaxed text-center font-light">
                  Empowering India's MSMEs and cottage industries to achieve
                  global competitiveness through innovation, sustainable
                  practices, and market access.
                </p>
                <div className="flex justify-center mt-8">
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white/80 text-sm">Global Reach</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white/80 text-sm">
                        Sustainable Growth
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-orange-400 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white/80 text-sm">Community Support</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.95), rgba(248, 250, 252, 0.95)), url('/goals-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
              <h2 className="text-5xl font-bold text-slate-800 mb-4 drop-shadow-sm">
                Our Services
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-6 animate-pulse"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to support MSMEs at every stage
                of their growth journey
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:-translate-y-4 cursor-pointer overflow-hidden relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="pb-4 relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-4">
                    <CardDescription className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {service.description}
                    </CardDescription>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-700 text-sm">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-slate-600"
                          >
                            <CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                 
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-800">
            <Card className="max-w-4xl mx-auto border-0 shadow-xl bg-gradient-to-r from-teal-500 to-orange-500 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Join thousands of MSMEs who have already benefited from our
                  comprehensive support services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => scrollToSection("#contact")}
                    className="bg-white text-teal-600 hover:bg-slate-50 transform hover:scale-105 transition-all duration-300"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 bg-transparent transform hover:scale-105 transition-all duration-300"
                  >
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section
        id="goals"
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(248, 250, 252, 0.95), rgba(248, 250, 252, 0.95)), url('/goals-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
              <h2 className="text-5xl font-bold text-slate-800 mb-4 drop-shadow-sm">
                Our Strategic Goals
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-orange-500 mx-auto mb-6 animate-pulse"></div>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive support system designed to elevate MSMEs across
                all dimensions of business growth
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 hover:-translate-y-4 cursor-pointer overflow-hidden relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={goal.image || "/placeholder.svg"}
                      alt={goal.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                        <goal.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4 relative z-10">
                    <CardTitle className="text-xl font-semibold text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
                      {goal.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {goal.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.95)), url('/contact-bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700">
              <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                Get In Touch
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto mb-6 animate-pulse"></div>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Ready to join our mission of empowering MSMEs? Connect with us
                today.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  content: (
                    <p className="text-slate-300 leading-relaxed">
                      Plot No. 33, Sumer Nagar, Mansarovar
                      <br />
                      Jaipur - 302020, Rajasthan
                    </p>
                  ),
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: (
                    <div className="space-y-1">
                      <p className="text-slate-300">+91 9887995799</p>
                      <p className="text-slate-300">+91 9887098722</p>
                    </div>
                  ),
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: (
                    <Button
                      variant="link"
                      className="text-teal-400 hover:text-teal-300 p-0 h-auto font-normal transform hover:scale-105 transition-all duration-300"
                      onClick={() =>
                        (window.location.href = "mailto:inforajsme@gmail.com")
                      }
                    >
                      inforajsme@gmail.com
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Button>
                  ),
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                            {item.title}
                          </h3>
                          {item.content}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-400">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-white"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-teal-400 focus:ring-teal-400 transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-white"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-teal-400 focus:ring-teal-400 transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-white"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-teal-400 focus:ring-teal-400 transition-all duration-300"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-white"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-teal-400 focus:ring-teal-400 transition-all duration-300 resize-none"
                        placeholder="Tell us about your inquiry or how we can help you..."
                      />
                    </div>

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                        <CheckCircle className="w-5 h-5" />
                        <span>
                          Message sent successfully! We'll get back to you soon.
                        </span>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                        <AlertCircle className="w-5 h-5" />
                        <span>
                          Failed to send message. Please try again or contact us
                          directly.
                        </span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-teal-500 to-orange-500 hover:from-teal-600 hover:to-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Contact Button */}
          <div className="mt-12 text-center animate-in fade-in-50 slide-in-from-bottom-4 duration-700 delay-600">
            <p className="text-slate-300 mb-4">Prefer to email us directly?</p>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300 bg-transparent"
              onClick={() =>
                (window.location.href =
                  "mailto:inforajsme@gmail.com?subject=Membership Inquiry")
              }
            >
              <Mail className="w-5 h-5 mr-2" />
              inforajsme@gmail.com
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <img
                src="/logoMe.png"
                alt="RAJSME Logo"
                className="h-8 w-auto"
              />
            </div>
            <span className="text-white font-semibold hover:text-teal-300 transition-colors duration-300">
              RAJSME ENTERPRISES ASSOCIATION
            </span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2023 RAJSME Enterprises Association. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
