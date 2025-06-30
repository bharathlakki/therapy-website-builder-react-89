
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/lovable-uploads/ac70b314-8387-46c4-b51d-c086b39e18c8.png"
                alt="Dr. Serena Blake"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">Dr. Serena Blake</h3>
                <p className="text-gray-300">Clinical Psychologist, PsyD</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Compassionate, evidence-based therapy to help you find your path to healing and growth.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>1287 Maplewood Drive</p>
              <p>Los Angeles, CA 90026</p>
              <p>Phone: (323) 555-0192</p>
              <p>Email: serena@blakepsychology.com</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
            <div className="space-y-2 text-gray-300">
              <p><strong>In-person:</strong></p>
              <p>Tue & Thu: 10 AM–6 PM</p>
              <p><strong>Virtual (Zoom):</strong></p>
              <p>Mon, Wed & Fri: 1 PM–5 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dr. Serena Blake Psychology. All rights reserved.</p>
          <p className="mt-2 text-sm">Licensed Clinical Psychologist • 8 Years Experience • 500+ Sessions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
