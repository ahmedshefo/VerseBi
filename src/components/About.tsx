import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-white">Verse</span><span className="text-green-500">Bi</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering professionals and businesses with cutting-edge data solutions and digital presence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-lg text-gray-300 mb-6">
              At VerseBi, we believe that data should drive decisions, not confusion. Our mission is to transform 
              complex data into clear, actionable insights that empower businesses to thrive in today's data-driven world.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              We also recognize that in the digital age, having a professional online presence is crucial for 
              career growth. That's why we offer comprehensive portfolio creation services to help individuals 
              showcase their expertise and stand out in competitive markets.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">50+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">30+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500">5+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-900/20 rounded-xl p-6 text-center group hover:bg-green-800/30 transition-colors duration-300 border border-green-800/30">
              <Users size={48} className="text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-semibold text-white mb-2">Expert Team</h4>
              <p className="text-gray-300">Skilled professionals in data analysis and web development</p>
            </div>
            <div className="bg-green-900/20 rounded-xl p-6 text-center group hover:bg-green-800/30 transition-colors duration-300 border border-green-800/30">
              <Target size={48} className="text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-semibold text-white mb-2">Client-Focused</h4>
              <p className="text-gray-300">Tailored solutions that meet your specific needs and goals</p>
            </div>
            <div className="bg-green-900/20 rounded-xl p-6 text-center group hover:bg-green-800/30 transition-colors duration-300 border border-green-800/30">
              <Award size={48} className="text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-semibold text-white mb-2">Quality Driven</h4>
              <p className="text-gray-300">Committed to delivering exceptional results and service</p>
            </div>
            <div className="bg-green-900/20 rounded-xl p-6 text-center group hover:bg-green-800/30 transition-colors duration-300 border border-green-800/30">
              <TrendingUp size={48} className="text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-xl font-semibold text-white mb-2">Growth Oriented</h4>
              <p className="text-gray-300">Solutions designed to scale and grow with your business</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-green-100 mb-6">
                To become the leading provider of accessible, professional data solutions and digital presence 
                services, enabling businesses and individuals to unlock their full potential in the digital economy.
              </p>
              <p className="text-lg text-green-100">
                We envision a world where powerful data insights and professional online presence are accessible 
                to everyone, not just large corporations.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4">Our Expertise</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Power BI, Tableau, Excel mastery</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>ERP, SCM, CRM integrations</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Modern web development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Data visualization and storytelling</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span>Cloud hosting and security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;