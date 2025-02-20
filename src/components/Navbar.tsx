
import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import BookingForm from "./BookingForm";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-lg" 
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AC Services
            </h1>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className={`flex items-center ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <span>24/7 Support: 1-800-AC-HELP</span>
            </div>
            <div className={`flex items-center ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
              <MapPin className="h-4 w-4 mr-2 text-primary" />
              <span>Find a Location</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`hover:text-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Home</a>
            <a href="#services" className={`hover:text-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Services</a>
            <a href="#vendors" className={`hover:text-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Vendor Portal</a>
            <a href="#contact" className={`hover:text-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Contact</a>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                >
                  Book Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <BookingForm />
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`hover:text-primary transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#vendors"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Vendor Portal
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <BookingForm />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
