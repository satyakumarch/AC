
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import BookingForm from "./BookingForm";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1599873968030-3573474e8e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 z-0" />
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl animate-float delay-1000" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-white/10 backdrop-blur-md text-white rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              24/7 Premium Service
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert AC Services <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                at Your Doorstep
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Professional AC repair and maintenance services, available 24/7. Expert technicians, competitive prices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl transition-all">
                  Book Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <BookingForm />
              </DialogContent>
            </Dialog>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 flex items-center gap-2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            >
              <Play size={16} />
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
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/20">
                <h3 className="font-semibold text-xl mb-2 text-white">Fast Service</h3>
                <p className="text-gray-200">Response within 60 minutes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/20">
                <h3 className="font-semibold text-xl mb-2 text-white">Expert Team</h3>
                <p className="text-gray-200">Certified professionals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-white/20">
                <h3 className="font-semibold text-xl mb-2 text-white">Best Price</h3>
                <p className="text-gray-200">Competitive rates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
