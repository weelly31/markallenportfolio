"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-b from-slate-950 to-slate-900 overflow-hidden">
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-center px-6 max-w-6xl mx-auto gap-12 py-16 md:py-28 w-full">
        {/* LEFT SIDE TEXT */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-5"
          >
            <span className="text-amber-400/90 text-xs font-semibold tracking-widest uppercase border border-amber-400/30 px-4 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-sm">
              Accounting Professional
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Mark Allen
            <span className="block text-amber-400/90 font-light mt-1 tracking-wide">
              U. Andrade
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-slate-300 text-lg font-light leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Results-driven professional with 10+ years of experience in financial management, cost estimation, and audit support.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center md:justify-start items-center gap-5 text-base text-slate-400"
          >
            <a
              href="mailto:lenmark06@gmail.com"
              className="flex items-center gap-2 hover:text-amber-400 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span>lenmark06@gmail.com</span>
            </a>
            <a
              href="tel:09948416544"
              className="flex items-center gap-2 hover:text-amber-400 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>0994 841 6544</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Cainta, Rizal</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-center items-center relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-3xl p-1 bg-linear-to-tr from-amber-400/60 via-amber-400/30 to-amber-400/10 shadow-2xl"
          >
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/img/profile.jpg"
                alt="Profile"
                width={360}
                height={360}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>
          {/* Floating Shapes */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-amber-400/20 blur-2xl"
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-8 w-28 h-28 rounded-full bg-amber-400/10 blur-3xl"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-slate-500/70 animate-bounce" />
      </div>
    </section>
  );
}