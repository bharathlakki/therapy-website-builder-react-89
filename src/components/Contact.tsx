
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please tell us what brings you here';
    if (!formData.preferredTime.trim()) newErrors.preferredTime = 'Preferred contact time is required';
    if (!formData.agreeToContact) newErrors.agreeToContact = 'You must agree to be contacted';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white p-12 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-light text-gray-800 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Your message has been received. I'll get back to you within 24 hours.
            </p>
            <p className="text-gray-600">
              I look forward to connecting with you and supporting you on your journey to healing and growth.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-6">Get Started Today</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">
            Ready to take the first step? I'm here to help you on your journey to healing and growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800">(323) 555-0192</p>
                    <p className="text-gray-600 text-sm">Call or text for quick questions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800">serena@blakepsychology.com</p>
                    <p className="text-gray-600 text-sm">For detailed inquiries</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="font-semibold text-gray-800 mb-3">Office Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>In-person sessions:</strong></p>
                    <p className="ml-4">Tuesday & Thursday, 10 AM–6 PM</p>
                    <p><strong>Virtual sessions (Zoom):</strong></p>
                    <p className="ml-4">Monday, Wednesday & Friday, 1 PM–5 PM</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-gray-600 text-sm">
                    <strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Send Me a Message</CardTitle>
              <p className="text-gray-600">I'll respond within 24 hours</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <Input
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <Textarea
                    placeholder="What brings you here? *"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <div>
                  <Input
                    placeholder="Preferred time to reach you *"
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className={errors.preferredTime ? 'border-red-500' : ''}
                  />
                  {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="agree"
                    checked={formData.agreeToContact}
                    onCheckedChange={(checked) => handleInputChange('agreeToContact', checked)}
                    className={errors.agreeToContact ? 'border-red-500' : ''}
                  />
                  <label htmlFor="agree" className="text-sm text-gray-700 leading-5">
                    I agree to be contacted via phone or email to discuss scheduling and treatment options. *
                  </label>
                </div>
                {errors.agreeToContact && <p className="text-red-500 text-sm">{errors.agreeToContact}</p>}
                
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg rounded-full transition-colors duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
