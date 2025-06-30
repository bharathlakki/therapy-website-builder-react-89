
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Learn evidence-based techniques to manage anxiety, reduce stress, and regain control over your thoughts and emotions. Using cognitive-behavioral therapy and mindfulness approaches, we'll work together to develop coping strategies that fit your lifestyle and help you find lasting peace.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$200 / session"
    },
    {
      title: "Relationship Counseling",
      description: "Strengthen your connections and improve communication patterns in your relationships. Whether you're working through conflicts, building intimacy, or navigating major life changes together, I provide a safe space for couples to grow and heal together.",
      image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$240 / couples session"
    },
    {
      title: "Trauma Recovery",
      description: "Heal from past experiences with compassionate, trauma-informed care. Using evidence-based therapies, we'll work at your pace to process difficult experiences, develop healthy coping mechanisms, and reclaim your sense of safety and empowerment in life.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$200 / session"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-6">Services & Specialties</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mental health support tailored to your unique needs and goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition-colors duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
                <p className="text-blue-600 font-semibold">{service.price}</p>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-gray-600 mb-6">
              Take the first step towards healing and growth. Schedule your free consultation today.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors duration-300">
              Schedule Free Consult
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
