import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ahmed M.",
      role: "Data scientest",
      rating: 5,
      testimonial: "As a final year student, I struggled to showcase my projects in a professional way. VerseBi helped me build a clean and modern portfolio that really highlights my data analysis skills. It made a huge difference in my internship interviews. I finally had something I was proud to share."
    },
    {
      name: "Hamood El.",
      role: "HR Practitioner at PDO",
      rating: 5,
      testimonial: "VerseBi are true experts in their field. Working with them across different projects has been an outstanding experience. The team is respectful, humble, solution oriented, and deeply knowledgeable. Their speed of delivery consistently exceeds expectations, and they're always ready with innovative dashboards and data analysis. I highly recommend them ,they are the go to partner if you're looking for data analysis and interactive dashboards."
    },
    {
      name: "Rami K.",
      role: "Co‑founder at DND",
      rating: 5,
      testimonial: "As a growing startup, we needed a clean and professional online portfolio to present our data projects and case studies. VerseBi delivered exactly what we needed  a custom domain, modern design, and fully responsive site, all up and running in just a couple of days. The process was fast, affordable, and completely hassle‑free. Highly recommend for any early‑stage team that wants to look professional from day one."
    },
    {
      name: "Sara L.",
      role: "Business Development Manager",
      rating: 5,
      testimonial: "Choosing VerseBi completely changed how we see and use our data. Their team built custom dashboards tailored to our needs, automated complex reports, and integrated everything seamlessly with our existing systems. Fast delivery, clear communication, and a real eye for detail  highly recommended!"
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our <span className="text-green-500">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear from professionals who have transformed their data capabilities and online presence with VerseBi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-white mb-2">{testimonial.name}</h4>
                <p className="text-gray-400">{testimonial.role}</p>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="relative">
                <Quote size={24} className="text-green-500 mb-4" />
                <p className="text-gray-300 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;