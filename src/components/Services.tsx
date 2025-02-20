
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Services = () => {
  const acTypes = [
    {
      title: "Split AC",
      description: "Perfect for single rooms and offices",
      features: ["Energy efficient", "Low noise", "Easy installation"],
      image: "https://images.unsplash.com/photo-1614633833107-965ed2f7256f?auto=format&fit=crop&q=80",
    },
    {
      title: "Window AC",
      description: "Ideal for small spaces and rentals",
      features: ["Compact design", "Budget-friendly", "Quick cooling"],
      image: "https://images.unsplash.com/photo-1631083215283-adea9601c561?auto=format&fit=crop&q=80",
    },
    {
      title: "Commercial AC",
      description: "Powerful cooling for large spaces",
      features: ["High capacity", "Advanced controls", "Professional grade"],
      image: "https://images.unsplash.com/photo-1527016021513-b09758b777bd?auto=format&fit=crop&q=80",
    },
  ];

  const services = [
    {
      title: "Installation",
      description: "Professional AC installation with warranty",
    },
    {
      title: "Repair",
      description: "Expert diagnosis and quick repairs",
    },
    {
      title: "Maintenance",
      description: "Regular servicing and cleaning",
    },
    {
      title: "Emergency Service",
      description: "24/7 emergency repair service",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Comprehensive AC Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Professional services for all your AC needs
          </motion.p>
        </div>

        {/* AC Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {acTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Professional Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Expert solutions you can trust
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
