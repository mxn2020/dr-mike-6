```typescript
// src/pages/Landing.tsx

import React, { useState, useEffect } from 'react';
import { Heart, Shield, Users, Star, User, Calendar, Phone, Mail, MapPin, Stethoscope, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container, Button, Card, CardContent, Badge, Header, Nav, Section, Span, H1, H2, P, Div, Footer } from '../lib/dev-container';
import { useAuth } from '../components/auth/AuthProvider';
import type { ComponentRegistryId } from '../registry/componentRegistry';

// Helper functions to ensure type safety for dynamic IDs
const getStatCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['stat-card-0', 'stat-card-1', 'stat-card-2', 'stat-card-3'];
  return ids[index] || 'noID';
};

const getServiceCardId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['service-card-0', 'service-card-1', 'service-card-2', 'service-card-3'];
  return ids[index] || 'noID';
};

const getSpecialtyIconId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['specialty-icon-0', 'specialty-icon-1', 'specialty-icon-2', 'specialty-icon-3', 'specialty-icon-4', 'specialty-icon-5'];
  return ids[index] || 'noID';
};

const getSpecialtyBadgeId = (index: number): ComponentRegistryId => {
  const ids: ComponentRegistryId[] = ['specialty-badge-0', 'specialty-badge-1', 'specialty-badge-2', 'specialty-badge-3', 'specialty-badge-4', 'specialty-badge-5'];
  return ids[index] || 'noID';
};

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    reason: '',
    message: ''
  });
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle appointment request submission
    console.log('Appointment request:', appointmentForm);
    // Reset form
    setAppointmentForm({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      reason: '',
      message: ''
    });
    alert('Appointment request submitted successfully! We will contact you soon.');
  };

  const services = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Preventive Care",
      description: "Comprehensive health screenings, vaccinations, and wellness checkups to keep you healthy"
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-500" />,
      title: "Primary Care",
      description: "Complete primary care services for adults and families with personalized treatment plans"
    },
    {
      icon: <Activity className="w-8 h-8 text-green-500" />,
      title: "Health Monitoring",
      description: "Ongoing health monitoring and chronic disease management with regular follow-ups"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Emergency Care",
      description: "24/7 emergency consultation and urgent care services when you need them most"
    }
  ];

  const stats = [
    { label: "Patients Served", value: "5,000+" },
    { label: "Years Experience", value: "15+" },
    { label: "Success Rate", value: "98%" },
    { label: "Satisfaction", value: "4.9/5" }
  ];

  return (
    <Container componentId="landing-page-root">
      <Div 
        devId="main-wrapper" 
        devName="Main Wrapper" 
        devDescription="Main page wrapper with medical gradient background"
        className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50"
      >
      {/* Header */}
      <Header 
        devId="main-header" 
        devName="Main Header" 
        devDescription="Primary site header with navigation"
        className="container mx-auto px-4 py-6"
      >
        <Nav 
          devId="main-nav" 
          devName="Main Navigation" 
          devDescription="Primary navigation bar"
          className="flex items-center justify-between"
        >
          <Div 
            devId="logo-section" 
            devName="Logo Section" 
            devDescription="Doctor logo and brand name"
            className="flex items-center space-x-2"
          >
            <Div devId="noID" className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </Div>
            <Span 
              devId="brand-name" 
              devName="Brand Name" 
              devDescription="Dr. Mike brand name"
              className="text-xl font-bold text-gray-800"
            >
              Dr. Mike
            </Span>
          </Div>
          <Div 
            devId="nav-actions" 
            devName="Navigation Actions" 
            devDescription="Navigation buttons and user menu"
            className="flex items-center space-x-4"
          >
            <Button 
              devId="services-button" 
              devName="Services Button" 
              devDescription="Link to services section"
              variant="ghost" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Services
            </Button>
            <Button 
              devId="about-button" 
              devName="About Button" 
              devDescription="Link to about section"
              variant="ghost" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About
            </Button>
            {isAuthenticated ? (
              <Div 
                devId="user-section" 
                devName="User Section" 
                devDescription="Authenticated user welcome area"
                className="flex items-center space-x-4"
              >
                <Span 
                  devId="welcome-message" 
                  devName="Welcome Message" 
                  devDescription="Welcome message for authenticated user"
                  className="text-gray-600"
                >
                  Welcome, {user?.name?.split(' ')[0]}!
                </Span>
                <Link to="/dashboard">
                  <Button 
                    devId="nav-dashboard-button"
                    devName="Navigation Dashboard Button"
                    devDescription="Dashboard button in navigation header for authenticated users"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
              </Div>
            ) : (
              <Div 
                devId="auth-buttons" 
                devName="Authentication Buttons" 
                devDescription="Login and register buttons for unauthenticated users"
                className="flex items-center space-x-2"
              >
                <Link to="/login">
                  <Button 
                    devId="nav-login-button"
                    devName="Navigation Login Button"
                    devDescription="Login button in navigation header"
                    variant="ghost" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button 
                    devId="nav-register-button"
                    devName="Navigation Register Button"
                    devDescription="Get started button in navigation header"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Get Started
                  </Button>
                </Link>
              </Div>
            )}
          </Div>
        </Nav>
      </Header>

      {/* Hero Section */}
      <Container componentId="hero-section">
        <Section 
          devId="hero-content" 
          devName="Hero Content" 
          devDescription="Main hero section with title and call-to-action"
          className="container mx-auto px-4 py-20 text-center"
        >
          <Div 
            devId="hero-content-wrapper" 
            devName="Hero Content Wrapper" 
            devDescription="Animated wrapper for hero content"
            className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <H1 
              devId="hero-title" 
              devName="Hero Title" 
              devDescription="Main hero title showcasing Dr. Mike's practice"
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
            >
              Your Health, 
              <Span 
                devId="care-highlight" 
                devName="Care Highlight" 
                devDescription="Highlighted care text in gradient"
                className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
              >
                {' '}Our Priority
              </Span>
            </H1>
            <P 
              devId="hero-description" 
              devName="Hero Description" 
              devDescription="Hero section description explaining Dr. Mike's approach"
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Comprehensive healthcare services with a personal touch. Dr. Mike provides 
              expert medical care, preventive services, and ongoing health management for you and your family.
            </P>
            <Div 
              devId="hero-cta-buttons" 
              devName="Hero CTA Buttons" 
              devDescription="Call-to-action buttons in hero section"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                devId="hero-book-appointment"
                devName="Book Appointment Button"
                devDescription="Primary call-to-action button for booking appointments"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button 
                devId="hero-learn-more"
                devName="Learn More Button"
                devDescription="Secondary button to learn more about services"
                variant="outline"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Stats Section */}
      <Container componentId="stats-section">
        <Section 
          devId="stats-content" 
          devName="Stats Content" 
          devDescription="Statistics section showing practice metrics"
          className="container mx-auto px-4 py-12"
        >
          <Div 
            devId="stats-grid" 
            devName="Stats Grid" 
            devDescription="Grid container for statistics cards"
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                devId={getStatCardId(index)}
                devName={`${stat.label} Stat Card`}
                devDescription={`Statistical card showing ${stat.label}: ${stat.value}`}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-100 shadow-lg"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="text-2xl font-bold text-blue-600 mb-2">{stat.value}</Div>
                  <Div devId="noID" className="text-gray-600">{stat.label}</Div>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* Services Section */}
      <Container componentId="services-section">
        <Section devId="noID" className="container mx-auto px-4 py-20" id="services">
          <Div devId="noID" className="text-center mb-16">
            <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">Our Medical Services</H2>
            <P devId="noID" className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare services designed to keep you and your family healthy and thriving
            </P>
          </Div>
          <Div devId="noID" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                devId={getServiceCardId(index)}
                devName={`${service.title} Service Card`}
                devDescription={`Service card highlighting ${service.title}: ${service.description}`}
                className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all hover:border-blue-200"
              >
                <CardContent devId="noID" className="p-0">
                  <Div devId="noID" className="mb-4">{service.icon}</Div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                  <P devId="noID" className="text-gray-600">{service.description}</P>
                </CardContent>
              </Card>
            ))}
          </Div>
        </Section>
      </Container>

      {/* About Section */}
      <Container componentId="about-section">
        <Section devId="noID" className="container mx-auto px-4 py-20 bg-white/50 rounded-2xl my-12" id="about">
          <Div devId="noID" className="grid md:grid-cols-2 gap-12 items-center">
            <Div devId="noID">
              <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-6">Meet Dr. Mike</H2>
              <P devId="noID" className="text-gray-600 mb-6">
                With over 15 years of experience in family medicine, Dr. Mike is dedicated to providing 
                compassionate, comprehensive healthcare to patients of all ages. His approach combines 
                evidence-based medicine with personalized care to ensure the best outcomes for every patient.
              </P>
              <Div devId="noID" className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { name: "Family Medicine", color: "from-blue-400 to-blue-500" },
                  { name: "Preventive Care", color: "from-green-400 to-green-500" },
                  { name: "Chronic Disease", color: "from-purple-400 to-purple-500" },
                  { name: "Emergency Care", color: "from-red-400 to-red-500" },
                  { name: "Health Screening", color: "from-yellow-400 to-yellow-500" },
                  { name: "Wellness Plans", color: "from-teal-400 to-teal-500" }
                ].map((specialty, index) => (
                  <Div key={index} devId="noID" className="text-center">
                    <Div devId={getSpecialtyIconId(index)} className={`w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br ${specialty.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{specialty.name.split(' ').map(w => w[0]).join('')}</span>
                    </Div>
                    <Badge 
                      devId={getSpecialtyBadgeId(index)}
                      devName={`${specialty.name} Specialty Badge`}
                      devDescription={`Specialty badge for ${specialty.name}`}
                      className="text-gray-600 font-medium bg-transparent border-none text-xs"
                    >
                      {specialty.name}
                    </Badge>
                  </Div>
                ))}
              </Div>
            </Div>
            <Div devId="noID" className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
              <Div devId="noID" className="text-center">
                <Div devId="noID" className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </Div>
                <H2 devId="noID" className="text-2xl font-bold text-gray-800 mb-2">Dr. Michael Johnson, MD</H2>
                <P devId="noID" className="text-gray-600 mb-4">Board Certified Family Physician</P>
                <Div devId="noID" className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </Div>
                <P devId="noID" className="text-sm text-gray-600">
                  "Committed to providing exceptional healthcare with compassion and expertise"
                </P>
              </Div>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Appointment Request Section */}
      <Container componentId="appointment-section">
        <Section devId="noID" className="container mx-auto px-4 py-20" id="appointment">
          <Div devId="noID" className="max-w-4xl mx-auto">
            <Div devId="noID" className="text-center mb-12">
              <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">Request an Appointment</H2>
              <P devId="noID" className="text-gray-600 max-w-2xl mx-auto">
                Schedule your visit with Dr. Mike. Fill out the form below and we'll contact you to confirm your appointment.
              </P>
            </Div>
            <Card devId="noID" className="bg-white rounded-2xl shadow-xl border border-gray-100">
              <CardContent devId="noID" className="p-8">
                <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                  <Div devId="noID" className="grid md:grid-cols-2 gap-6">
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={appointmentForm.name}
                        onChange={(e) => setAppointmentForm({...appointmentForm, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </Div>
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={appointmentForm.email}
                        onChange={(e) => setAppointmentForm({...appointmentForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </Div>
                  </Div>
                  <Div devId="noID" className="grid md:grid-cols-2 gap-6">
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={appointmentForm.phone}
                        onChange={(e) => setAppointmentForm({...appointmentForm, phone: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </Div>
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit</label>
                      <select
                        value={appointmentForm.reason}
                        onChange={(e) => setAppointmentForm({...appointmentForm, reason: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select reason</option>
                        <option value="routine-checkup">Routine Checkup</option>
                        <option value="follow-up">Follow-up Visit</option>
                        <option value="new-patient">New Patient Consultation</option>
                        <option value="urgent-care">Urgent Care</option>
                        <option value="preventive-care">Preventive Care</option>
                        <option value="other">Other</option>
                      </select>
                    </Div>
                  </Div>
                  <Div devId="noID" className="grid md:grid-cols-2 gap-6">
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                      <input
                        type="date"
                        value={appointmentForm.preferredDate}
                        onChange={(e) => setAppointmentForm({...appointmentForm, preferredDate: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </Div>
                    <Div devId="noID">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                      <select
                        value={appointmentForm.preferredTime}
                        onChange={(e) => setAppointmentForm({...appointmentForm, preferredTime: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select time</option>
                        <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                        <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                        <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                      </select>
                    </Div>
                  </Div>
                  <Div devId="noID">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message</label>
                    <textarea
                      value={appointmentForm.message}
                      onChange={(e) => setAppointmentForm({...appointmentForm, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Any additional information or questions..."
                    />
                  </Div>
                  <Div devId="noID" className="text-center">
                    <Button 
                      devId="submit-appointment"
                      devName="Submit Appointment Button"
                      devDescription="Submit button for appointment request form"
                      type="submit"
                      className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Request Appointment
                    </Button>
                  </Div>
                </form>
              </CardContent>
            </Card>
          </Div>
        </Section>
      </Container>

      {/* Contact Section */}
      <Container componentId="contact-section">
        <Section devId="noID" className="container mx-auto px-4 py-20">
          <Div devId="noID" className="bg-gradient-to-r from-blue-600/10 to-green-600/10 rounded-2xl p-12 text-center border border-blue-200">
            <H2 devId="noID" className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</H2>
            <P devId="noID" className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Have questions or need immediate assistance? Contact our office directly.
            </P>
            <Div devId="noID" className="grid md:grid-cols-3 gap-8">
              <Div devId="noID" className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </Div>
              <Div devId="noID" className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">info@drmike.com</p>
              </Div>
              <Div devId="noID" className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                <p className="text-gray-600">123 Health St, Medical City, MC 12345</p>
              </Div>
            </Div>
          </Div>
        </Section>
      </Container>

      {/* Footer */}
      <Footer 
        devId="main-footer" 
        devName="Main Footer" 
        devDescription="Site footer with links and copyright"
        className="container mx-auto px-4 py-8 border-t border-gray-200"
      >
        <Div devId="noID" className="flex flex-col md:flex-row justify-between items-center">
          <Div devId="noID" className="text-gray-600 mb-4 md:mb-0">
            © 2024 Dr. Mike Medical Practice. Providing quality healthcare with compassion.
          </Div>
          <Div devId="noID" className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </Div>
        </Div>
      </Footer>
      </Div>
    </Container>
  );
};
```