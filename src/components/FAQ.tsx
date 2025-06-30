
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are your fees?",
      answer: "Individual therapy sessions are $200 per session, and couples counseling sessions are $240 per session. I provide superbills for insurance reimbursement, though I don't directly accept insurance."
    },
    {
      question: "Do you take insurance?",
      answer: "No, I don't directly accept insurance, but I provide superbills that you can submit to your insurance company for potential reimbursement. Many clients find this gives them more flexibility in their treatment."
    },
    {
      question: "Do you provide online counseling?",
      answer: "Yes! I offer secure video sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Online therapy can be just as effective as in-person sessions and offers greater convenience and accessibility."
    },
    {
      question: "What are your office hours?",
      answer: "I offer in-person sessions on Tuesdays and Thursdays from 10 AM to 6 PM at my Maplewood Drive office in Los Angeles. Virtual sessions via Zoom are available Mondays, Wednesdays, and Fridays from 1 PM to 5 PM."
    },
    {
      question: "What geographic areas do you serve?",
      answer: "My office is located in Los Angeles, CA, and I serve clients throughout California for both in-person and virtual sessions. Online therapy allows me to work with clients across the state."
    },
    {
      question: "What services do you offer?",
      answer: "I specialize in anxiety and stress management, relationship counseling, and trauma recovery. I use evidence-based approaches like cognitive-behavioral therapy and mindfulness techniques, tailored to each client's unique needs and goals."
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about therapy services and what to expect
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:text-blue-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
