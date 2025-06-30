
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, I do not accept insurance directly. However, I provide a detailed superbill for each session that you can submit to your insurance company for potential reimbursement. Many clients find they can recover a significant portion of their investment through out-of-network benefits."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes, I offer secure virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Online therapy can be just as effective as in-person sessions and offers the convenience of receiving care from the comfort of your own space."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour advance notice for cancellations or rescheduling. This allows me to offer the time slot to other clients who may need it. Cancellations made with less than 24 hours notice will be charged the full session fee."
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual therapy sessions are 50 minutes long, while couples sessions are typically 80 minutes to allow adequate time for both partners to be heard and for meaningful progress to be made."
    },
    {
      question: "What should I expect in my first session?",
      answer: "Your first session will focus on getting to know you and understanding what brings you to therapy. We'll discuss your goals, review your history, and begin to develop a personalized treatment plan. This is also a great time for you to ask any questions about the therapy process."
    },
    {
      question: "How do I know if therapy is working?",
      answer: "Progress in therapy can be measured in many ways - reduced symptoms, improved relationships, better coping skills, or simply feeling more like yourself. We'll regularly check in about your progress and adjust our approach as needed to ensure you're getting the most from our work together."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">
            Common questions about therapy, insurance, and the process
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 data-[state=open]:shadow-md transition-shadow duration-200"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:text-blue-600 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Have a question that's not answered here?</p>
          <button className="text-blue-600 hover:text-blue-700 font-medium underline">
            Get in touch - I'm happy to help
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
