
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import { motion, useAnimation } from "framer-motion";
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
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default Index;
