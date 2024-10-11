"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { appDefaultFont } from "@/lib/fonts";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarVariants = {
    initial: {
      //   backgroundColor: "rgba(224, 242, 254, 1)",
      backdropFilter: "blur(0px)",
    },
    scrolled: {
      backgroundColor: "rgba(224, 242, 254, 0.8)",
      backdropFilter: "blur(10px)",
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 ${appDefaultFont.className} font-medium`}
      initial="initial"
      animate={isScrolled ? "scrolled" : "initial"}
      variants={navbarVariants}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://eduifa.vercel.app/pLogo.png"
                className="h-12 w-12"
              />
              <span className="text-xl font-bold text-primary">Eduifa</span>
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/about" className="text-primary hover:text-sky-600">
                About
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <button className="text-primary hover:text-sky-600 flex items-center">
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <AnimatePresence>
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                >
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      href="/services/1"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Service 1
                    </Link>
                    <Link
                      href="/services/2"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Service 2
                    </Link>
                    <Link
                      href="/services/3"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Service 3
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/blog" className="text-primary hover:text-sky-600">
                Blog
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/resources"
                className="text-primary hover:text-sky-600"
              >
                Resources
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/contact" className="text-primary hover:text-sky-600">
                Contact Us
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <Button
              variant="outline"
              className="bg-white text-primary hover:bg-sky-50  border-primary"
              size="lg"
            >
              Sign Up
            </Button> */}
            <Button
              className=" text-white rounded-full font-semibold "
              size="lg"
            >
              Suprise me 🎉
            </Button>
          </motion.div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-sky-600"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 bg-white rounded-md p-3"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/about"
                className="block py-2 text-primary hover:text-sky-600"
              >
                About
              </Link>
              <div className="relative group py-2">
                <button className="text-primary hover:text-sky-600 flex items-center">
                  Services
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <Link
                      href="/services/1"
                      className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                    >
                      Service 1
                    </Link>
                    <Link
                      href="/services/2"
                      className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                    >
                      Service 2
                    </Link>
                    <Link
                      href="/services/3"
                      className="block px-4 py-2 text-sm text-primary hover:bg-gray-100"
                    >
                      Service 3
                    </Link>
                  </div>
                </motion.div>
              </div>
              <Link
                href="/blog"
                className="block py-2 text-primary hover:text-sky-600"
              >
                Blog
              </Link>
              <Link
                href="/resources"
                className="block py-2 text-primary hover:text-sky-600"
              >
                Resources
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-primary hover:text-sky-600"
              >
                Contact Us
              </Link>
              <div className="mt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full bg-white text-primary hover:bg-sky-50"
                >
                  Sign Up
                </Button>
                <Button className="w-full bg-primary text-white hover:bg-blue-700">
                  Login
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
