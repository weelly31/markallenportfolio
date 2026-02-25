"use client";
import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
              <User className="w-4 h-4 text-amber-600" />
            </div>
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400">About Me</h2>
          </div>
          
          <h3 className="text-3xl sm:text-4xl font-light text-slate-900 leading-snug mb-8">
            Professional <span className="text-amber-600">Profile</span>
          </h3>
          
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            Results-driven Accounting Professional with over 10 years of experience in accounts payable, 
            financial reporting, cost estimation, and audit support. Proficient in NetSuite/Oracle and 
            Microsoft Dynamics 365 (NAV), with strong expertise in ledger reconciliation, compliance 
            documentation, and financial systems management. Recognized for accuracy, integrity, and 
            strong organizational skills.
          </p>
          
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "4", label: "Companies" },
              { number: "3+", label: "ERP Systems" },
              { number: "BSC", label: "Management Accounting" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-light text-slate-900">{stat.number}</div>
                <div className="text-xs text-slate-400 mt-1 tracking-wide uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}