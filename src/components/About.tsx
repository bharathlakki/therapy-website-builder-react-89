
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-6">About Dr. Serena Blake</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <img
              src="/lovable-uploads/74d59159-7af8-4220-9a0f-8d156d229937.png"
              alt="Dr. Serena Blake - About"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
              with eight years of experience and over 500 client sessions. She blends evidence-based 
              approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
              personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
              Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <Card className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Experience</h3>
                  <p className="text-gray-600">8 years of practice</p>
                  <p className="text-gray-600">500+ sessions</p>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-600">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
                  <p className="text-gray-600">1287 Maplewood Drive</p>
                  <p className="text-gray-600">Los Angeles, CA 90026</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Office Hours</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>In-person:</strong> Tuesday & Thursday, 10 AM–6 PM</p>
                <p><strong>Virtual (Zoom):</strong> Monday, Wednesday & Friday, 1 PM–5 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
