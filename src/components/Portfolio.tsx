import React, { useState } from 'react';
// Import your portfolio images here
import pizzaDashboard from '../assets/images/pizza-dashboard.jpg';
import redbullDashboard from '../assets/images/redbull-dashboard.jpg';
import cosmeticDashboard from '../assets/images/cosmetic-dashboard.jpg';
// import project1 from '../assets/images/project1.jpg';
// import project2 from '../assets/images/project2.jpg';
// import project3 from '../assets/images/project3.jpg';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<null | number>(null);

  const portfolioItems = [
    {
      id: 0,
      title: "Pizza Sales Dashboard",
      description: `A dynamic Power BI dashboard designed to visualize and analyze pizza sales data with a focus on both aesthetics and usability.\n\nKey Features:\n- Quantity by Pizza Category: Instantly compare performance across pizza types.\n- Total Orders by Size and Category: Spot trends by pizza size and category.\n- Top 10 Sold Pizzas: Quickly identify the most popular pizzas.\n- Total Price & Quantity: High-impact visuals for essential sales metrics.\n\nThis project demonstrates my expertise in Power BI, data visualization, and UI/UX best practices. Every element is crafted for clarity and ease of use, ensuring actionable insights are always within reach.`,
      category: "Data Visualization",
      image: pizzaDashboard,
      technologies: ["Power BI", "Data Visualization", "UI/UX"]
    },
    {
      id: 1,
      title: "Red Bull Sales Dashboard",
      description: `A comprehensive Power BI dashboard visualizing Red Bull’s sales from 2017 to 2021 across Bar, Club, Hotel, and Restaurant sectors, with deep dives into product types and storage preferences.\n\nHighlights:\n- Total Sales by Year: Annual sales figures reveal growth trends and performance.\n- Product Composition: Breakdown of sugar-free vs. regular drink sales.\n- Storage Insights: Analysis of cooler vs. non-cooler storage and its impact on sales.\n- Growth Trends: Visualizations of annual growth rates to identify seasonal and high-growth periods.\n\nThis dashboard empowers business decision-makers to extract actionable insights, optimize product distribution, and align marketing strategies with consumer preferences.\n\nPower BI continues to amaze me with its ability to transform raw data into meaningful stories!`,
      category: "Data Visualization",
      image: redbullDashboard,
      technologies: ["Power BI", "Data Visualization", "Business Intelligence"]
    },
    {
      id: 2,
      title: "Cosmetic Supply Chain Dashboard",
      description: `A comprehensive Microsoft Power BI dashboard analyzing the supply chain for cosmetic products, featuring multiple interactive pages:\n\n- Overview: High-level summary of key supply chain metrics.\n- Manufacturing Preference: Insights into manufacturing trends and preferences.\n- Suppliers Performance: Evaluation of supplier contributions and profitability.\n- Products Performance: Deep dive into Hair Care, Skin Care, and Cosmetics categories, including revenue, customer count, lead time, net profit, and cost breakdowns.`,
      category: "Supply Chain Analytics",
      image: cosmeticDashboard,
      technologies: ["Power BI", "Supply Chain", "Team Project"]
    }
  ];

  const handleOpenModal = (id: number) => setSelectedProject(id);
  const handleCloseModal = () => setSelectedProject(null);

  const selected = selectedProject !== null ? portfolioItems.find(p => p.id === selectedProject) : null;

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-green-500">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and see how we transform data into actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <button
              key={item.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
              onClick={() => handleOpenModal(item.id)}
              aria-label={`View details for ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-white mb-2 text-center px-2">
                {item.title}
              </h3>
              <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full mb-4">
                {item.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={handleCloseModal}
        >
          <div
            className="bg-gray-900 rounded-xl shadow-2xl max-w-lg w-full mx-4 relative animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-green-400 text-2xl font-bold focus:outline-none"
              aria-label="Close project details"
            >
              &times;
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selected.title}</h3>
              <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full mb-4">
                {selected.category}
              </span>
              <p className="text-gray-300 mb-4 whitespace-pre-line">{selected.description}</p>
              <div className="flex flex-wrap gap-2">
                {selected.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio; 