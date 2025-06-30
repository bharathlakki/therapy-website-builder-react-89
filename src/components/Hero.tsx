
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <img
                src="/lovable-uploads/ac70b314-8387-46c4-b51d-c086b39e18c8.png"
                alt="Dr. Serena Blake"
                className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0 mb-6 shadow-lg ring-4 ring-white"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight text-gray-800">
              Find Your Path to
              <span className="block font-normal text-blue-600">Healing & Growth</span>
            </h1>
            
            <h2 className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-gray-600">
              Compassionate, evidence-based therapy to help you overcome anxiety, 
              strengthen relationships, and heal from trauma in a safe, supportive space.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book a Free Consult
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
            
            <div className="text-sm space-y-2 text-gray-500">
              <p>Dr. Serena Blake, PsyD • Licensed Clinical Psychologist</p>
              <p>8 years experience • 500+ successful sessions</p>
            </div>
          </div>

          {/* Right side - Hero image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Peaceful therapy environment"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
