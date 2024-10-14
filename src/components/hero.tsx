"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "./ui/toaster";
export default function Hero() {
  const [activeTab, setActiveTab] = useState("students");
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    toast({
      title: "Success!",
      description:
        "You've been added to our waitlist. We'll notify you when Eduifa launches.",
      className: "bg-green-500 text-white",
    });

    setEmail("");
  };

  return (
    <motion.section
      className="!container min-h-screen bg-white text-black flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-indigo-100 "
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <Toaster />
      <motion.div className="w-full max-w-6xl " variants={itemVariants}>
        <motion.div
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <div className="bg-blue-200 rounded-full p-1 max-sm:mt-[3rem]">
            <button
              className={`px-6 py-2 rounded-full ${
                activeTab === "students"
                  ? "bg-primary text-white"
                  : "text-primary"
              }`}
              onClick={() => setActiveTab("students")}
            >
              For Students
            </button>
            <button
              className={`px-6 py-2 rounded-full ${
                activeTab === "regular"
                  ? "bg-blue-600 text-white"
                  : "text-blue-600"
              }`}
              onClick={() => setActiveTab("regular")}
            >
              For Regular Learners
            </button>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 text-balance"
          variants={itemVariants}
        >
          Revolutionize{" "}
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
            Intelligent Knowledge Acquisition
          </span>{" "}
          in
          <br />
          <span className="text-green-500 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">
            Africa
          </span>{" "}
          and Beyond
        </motion.h1>

        <motion.p
          className="text-xl text-center mb-12 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          Our AI-powered edtech platform empowers learners to unlock their full
          potential through personalized, adaptive learning experiences.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto"
          variants={itemVariants}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            required
            className="w-full sm:w-64 h-12 text-lg border-primary"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto h-12 px-8 text-lg font-semibold bg-primary text-white hover:bg-blue-700 transition-colors"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Be the first to know"
            )}
          </Button>
        </motion.form>

        <motion.p
          className="text-sm text-center mt-4 text-gray-600"
          variants={itemVariants}
        >
          Be the first to know when Eduifa launches. Join our waitlist!
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
