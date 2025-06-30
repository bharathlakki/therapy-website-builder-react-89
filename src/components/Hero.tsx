
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/31ca1075-fd12-4c61-8d63-a8b1bfc05b2e.png')`
        }}
      >
        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="mb-8">
          <img
            src="/lovable-uploads/ac70b314-8387-46c4-b51d-c086b39e18c8.png"
            alt="Dr. Serena Blake"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg ring-4 ring-white"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
          Find Your Path to
          <span className="block font-normal">Healing & Growth</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
          Compassionate, evidence-based therapy to help you overcome anxiety, 
          strengthen relationships, and heal from trauma in a safe, supportive space.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Book a Free Consult
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full"
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-12 text-sm space-y-2 opacity-80">
          <p>Dr. Serena Blake, PsyD • Licensed Clinical Psychologist</p>
          <p>8 years experience • 500+ successful sessions</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
