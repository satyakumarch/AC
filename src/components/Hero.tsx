import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1561998338-13ad7883b20f?auto=format&fit=crop&q=80')",
        }}
      />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-blue-100 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              24/7 Premium Service
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium AC Services <br />
              at Your Doorstep
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Expert AC repair and maintenance services, available 24/7. Professional technicians, competitive prices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <Button size="lg" className="text-lg px-8">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Video
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-xl mb-2">Fast Service</h3>
                <p className="text-gray-600">Response within 60 minutes</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-xl mb-2">Expert Team</h3>
                <p className="text-gray-600">Certified professionals</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-xl mb-2">Best Price</h3>
                <p className="text-gray-600">Competitive rates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
