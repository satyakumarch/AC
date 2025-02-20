
import { motion } from "framer-motion";
import { Shield, Award, Clock, CreditCard } from "lucide-react";

const VendorPortal = () => {
  return (
    <section id="vendors" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Vendor Network</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partner with us to grow your business. We provide the platform, you provide the expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "Verified Platform",
              description: "Join our network of trusted AC service providers",
            },
            {
              icon: Award,
              title: "Quality Focus",
              description: "Maintain high service standards and earn customer trust",
            },
            {
              icon: Clock,
              title: "Flexible Hours",
              description: "Choose your working hours and service areas",
            },
            {
              icon: CreditCard,
              title: "Secure Payments",
              description: "Timely and secure payment processing",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Become a Certified AC Service Provider
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Get access to a steady stream of customers, professional training, and business support.
              Start with 100 free credits!
            </p>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                Access to customer service requests
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                Professional training and certification
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                Marketing and business support
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2" />
                Flexible payment options
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorPortal;
