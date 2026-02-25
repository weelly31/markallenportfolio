"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px]" />
      
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-6">
            <span className="text-amber-400/80 text-xs font-medium tracking-[0.3em] uppercase border border-amber-400/20 px-4 py-2 rounded-full">
              Accounting Professional
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.1]">
            Mark Allen
            <span className="block text-amber-400/90 font-extralight mt-1">U. Andrade</span>
          </h1>
          
          <p className="mt-8 text-slate-400 text-lg sm:text-xl font-light leading-relaxed max-w-xl mx-auto">
            Results-driven professional with over 10 years of experience in financial management, cost estimation, and audit support.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
        >
          <a href="mailto:lenmark06@gmail.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300">
            <Mail className="w-4 h-4" />
            <span>lenmark06@gmail.com</span>
          </a>
          <a href="tel:09948416544" className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300">
            <Phone className="w-4 h-4" />
            <span>0994 841 6544</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Cainta, Rizal</span>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5 text-slate-500" />
      </motion.div>
    </section>
  );
}