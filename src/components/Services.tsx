import React from "react";

const projects = [
  {
    title: "Sales Dashboard",
    description: "Interactive Power BI dashboard for sales analytics and forecasting.",
    image: "https://via.placeholder.com/400x250?text=Sales+Dashboard",
  },
  {
    title: "Customer Insights",
    description: "Tableau project visualizing customer segmentation and behavior.",
    image: "https://via.placeholder.com/400x250?text=Customer+Insights",
  },
  {
    title: "Inventory Tracker",
    description: "Excel-based solution for real-time inventory management.",
    image: "https://via.placeholder.com/400x250?text=Inventory+Tracker",
  },
  {
    title: "Marketing Performance",
    description: "Power BI dashboard tracking marketing KPIs and ROI.",
    image: "https://via.placeholder.com/400x250?text=Marketing+Performance",
  },
  {
    title: "Finance Automation",
    description: "Automated Excel reports for monthly financial close.",
    image: "https://via.placeholder.com/400x250?text=Finance+Automation",
  },
  {
    title: "Operations Overview",
    description: "Tableau dashboard for monitoring supply chain operations.",
    image: "https://via.placeholder.com/400x250?text=Operations+Overview",
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Portfolio</h2>
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 flex flex-col">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-green-400">{project.title}</h3>
                <p className="text-gray-200 mb-2 flex-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;