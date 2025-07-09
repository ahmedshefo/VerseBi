import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "Portfolio Creation",
      questions: [
        {
          question: "What happens after the first year?",
          answer: "After the first year, you have several options: renew hosting for another year at a discounted rate, transfer the website to your own hosting provider, or upgrade to our premium management service. We'll contact you 30 days before expiration to discuss your options."
        },
        {
          question: "Can I customize the design?",
          answer: "Yes! The base package includes a professional template, but we offer customization services for an additional fee. This includes custom colors, layouts, additional pages, and specific functionality tailored to your needs."
        },
        {
          question: "How long does setup take?",
          answer: "Most portfolio websites are live within 1-3 business days. This includes domain registration, SSL certificate setup, hosting configuration, and initial content upload. Complex customizations may take additional time."
        },
        {
          question: "What if I need help updating content?",
          answer: "Your package includes basic training on the content management system. We also offer ongoing support packages and can handle content updates for you at an hourly rate."
        }
      ]
    },
    {
      category: "Data & BI Services",
      questions: [
        {
          question: "Which platforms do you work with?",
          answer: "We specialize in Power BI, Tableau, Excel, and Google Data Studio. We also integrate with popular ERP systems like SAP, Oracle, and Microsoft Dynamics, as well as CRM platforms like Salesforce and HubSpot."
        },
        {
          question: "How do you ensure data security?",
          answer: "We follow industry best practices for data security, including encrypted connections, secure authentication, and compliance with GDPR and other data protection regulations. All client data is handled with the highest level of confidentiality."
        },
        {
          question: "Do you provide training?",
          answer: "Yes, we offer comprehensive training sessions for your team on how to use and maintain the dashboards and reports we create. Training can be conducted remotely or on-site."
        },
        {
          question: "What's the typical project timeline?",
          answer: "Most BI projects are completed within 2-6 weeks, depending on complexity. We provide detailed timelines during the initial consultation and keep you updated throughout the project."
        }
      ]
    },
    {
      category: "General",
      questions: [
        {
          question: "Do you offer support after project completion?",
          answer: "Yes, we provide ongoing support and maintenance services. This includes bug fixes, minor updates, and technical support. Support packages are available monthly or annually."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and bank transfers. For larger projects, we offer flexible payment plans with milestone-based payments."
        },
        {
          question: "Can I see examples of your work?",
          answer: "Absolutely! We have a portfolio section showcasing our previous projects (with client permission). We can also provide specific examples during our consultation that relate to your industry or requirements."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-green-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions about our services
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const globalIndex = categoryIndex * 10 + index;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={index} className="bg-gray-900 rounded-lg shadow-sm border border-gray-600">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors duration-200"
                      >
                        <span className="font-semibold text-white">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp size={20} className="text-green-500" />
                        ) : (
                          <ChevronDown size={20} className="text-green-500" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;