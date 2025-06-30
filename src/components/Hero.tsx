
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p6bGgzl8X5q8b8M9QQcCvkOjYhALKi.png"
            alt="Dr. Serena Blake"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6 shadow-lg ring-4 ring-white"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 leading-tight">
          Find Your Path to
          <span className="block text-blue-600 font-normal">Healing & Growth</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Compassionate, evidence-based therapy to help you overcome anxiety, 
          strengthen relationships, and heal from trauma in a safe, supportive space.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Book a Free Consult
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-full"
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-12 text-sm text-gray-500 space-y-2">
          <p>Dr. Serena Blake, PsyD • Licensed Clinical Psychologist</p>
          <p>8 years experience • 500+ successful sessions</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
