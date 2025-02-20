
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import BookingForm from "./BookingForm";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-float delay-1000" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              24/7 Premium Service
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Expert AC Services <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                at Your Doorstep
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
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
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Book Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <BookingForm />
              </DialogContent>
            </Dialog>
            
            <Button size="lg" variant="outline" className="text-lg px-8 flex items-center gap-2">
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
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <h3 className="font-semibold text-xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Fast Service</h3>
                <p className="text-gray-600">Response within 60 minutes</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <h3 className="font-semibold text-xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expert Team</h3>
                <p className="text-gray-600">Certified professionals</p>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <h3 className="font-semibold text-xl mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Best Price</h3>
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
