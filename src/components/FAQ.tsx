import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Portfolio Creation",
      questions: [
        {
          question: "What happens after the first year?",
          answer: "After the first year, you have several options: renew hosting for another year at a discounted rate, transfer the website to your own hosting provider, or upgrade to our premium management service. We'll contact you 30 days before expiration to discuss your options."
        },
        {
          question: "What's the difference between regular and student portfolios?",
          answer: "Regular portfolios ($100) include any domain extension and are designed for professionals. Student portfolios ($10) are specifically for students and include .me, .tech, or .software domains with a student-friendly template. Both include the same hosting and SSL features."
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

  // Flatten questions for global index
  const flatFaqs = faqs.flatMap((cat, catIdx) =>
    cat.questions.map((q, qIdx) => ({
      ...q,
      category: cat.category,
      globalIndex: faqs.slice(0, catIdx).reduce((acc, c) => acc + c.questions.length, 0) + qIdx
    }))
  );

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">
            Frequently Asked <span className="text-green-500">Questions</span>
          </h2>
          <p className="text-lg text-gray-300">
            Get answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {flatFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === faq.globalIndex ? null : faq.globalIndex)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 rounded-t-xl"
                aria-expanded={openIndex === faq.globalIndex}
                aria-controls={`faq-panel-${faq.globalIndex}`}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={20} className="text-green-400 flex-shrink-0" />
                  <span className="font-medium text-white text-base">
                    <span className="inline-block bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded mr-2 align-middle font-semibold">
                      {faq.category}
                    </span>
                    {faq.question}
                  </span>
                </div>
                {openIndex === faq.globalIndex ? (
                  <ChevronUp size={22} className="text-green-500" />
                ) : (
                  <ChevronDown size={22} className="text-green-500" />
                )}
              </button>
              <div
                style={{
                  maxHeight: openIndex === faq.globalIndex ? 500 : 0,
                  opacity: openIndex === faq.globalIndex ? 1 : 0,
                  transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s',
                  overflow: 'hidden',
                  background: openIndex === faq.globalIndex ? '#111827' : 'transparent',
                  borderBottomLeftRadius: openIndex === faq.globalIndex ? '0.75rem' : 0,
                  borderBottomRightRadius: openIndex === faq.globalIndex ? '0.75rem' : 0,
                }}
                id={`faq-panel-${faq.globalIndex}`}
                aria-hidden={openIndex !== faq.globalIndex}
              >
                <div className="px-6 pb-4 pt-2">
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;