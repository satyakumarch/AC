
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VendorPortal from "@/components/VendorPortal";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Index = () => {
  useEffect(() => {
    // Welcome toast
    toast("Welcome to AC Services!", {
      description: "24/7 premium AC repair and maintenance services",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <VendorPortal />
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default Index;
