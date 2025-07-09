import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Data Analyst, TechCorp",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "VerseBi transformed our data reporting process. The Power BI dashboards they created saved us 15 hours per week and provided insights we never had before. Absolutely fantastic work!"
    },
    {
      name: "Michael Chen",
      role: "BI Consultant",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "The portfolio website VerseBi created for me has been a game-changer. I've received multiple client inquiries directly through my site. The $150 investment paid for itself within weeks!"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager, LogiFlow",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "Their ERP integration expertise is unmatched. They connected our scattered data sources into one cohesive system. The automation they built saves us hours daily."
    },
    {
      name: "David Park",
      role: "Freelance Data Scientist",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "Professional, fast, and affordable. My portfolio website was live in 2 days with my custom domain. The design perfectly showcases my data visualization projects."
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
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
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