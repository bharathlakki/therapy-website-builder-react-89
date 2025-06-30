
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p6bGgzl8X5q8b8M9QQcCvkOjYhALKi.png"
                alt="Dr. Serena Blake"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">Dr. Serena Blake</h3>
                <p className="text-gray-300">Clinical Psychologist, PsyD</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Compassionate, evidence-based therapy to help you overcome anxiety, 
              strengthen relationships, and heal from trauma.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">(323) 555-0192</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">serena@blakepsychology.com</span>
              </div>
              <div className="text-gray-300">
                <p>1287 Maplewood Drive</p>
                <p>Los Angeles, CA 90026</p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Office Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div>
                <p className="font-medium text-white">In-person Sessions</p>
                <p>Tuesday & Thursday</p>
                <p>10 AM – 6 PM</p>
              </div>
              <div className="mt-4">
                <p className="font-medium text-white">Virtual Sessions</p>
                <p>Monday, Wednesday & Friday</p>
                <p>1 PM – 5 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2024 Dr. Serena Blake Psychology. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Professional Disclosure</button>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Licensed Clinical Psychologist • 8 Years Experience • 500+ Successful Sessions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
