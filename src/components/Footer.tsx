"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote, Mail, Phone, MapPin, Music, Dribbble, Film } from "lucide-react";

const interests = [
  { icon: Music, label: "Music & Instruments" },
  { icon: Dribbble, label: "Basketball" },
  { icon: Film, label: "Movies" },
];

const personalInfo = [
  { label: "Age", value: "33" },
  { label: "Civil Status", value: "Married" },
  { label: "Nationality", value: "Filipino" },
];

export default function FooterSection() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Leadership statement */}
      <section className="py-20 sm:py-28 border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Quote className="w-8 h-8 text-amber-400/40 mx-auto mb-6" />
            <p className="text-xl sm:text-2xl font-light leading-relaxed text-slate-300 italic">
              "I am committed to serving with integrity, accountability, and excellence—both in 
              professional and ministry settings. My goal is to lead by example, support organizational 
              objectives, and contribute to spiritual growth and operational efficiency."
            </p>
            <div className="mt-8 w-12 h-px bg-amber-400/30 mx-auto" />
            <p className="mt-4 text-sm text-slate-500 tracking-wider uppercase">Personal Leadership Statement</p>
          </motion.div>
        </div>
      </section>
      
      {/* Info grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {/* Contact */}
            <div>
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-slate-500 mb-5">Contact</h4>
              <div className="space-y-3">
                <a href="mailto:lenmark06@gmail.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  lenmark06@gmail.com
                </a>
                <a href="tel:09948416544" className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  0994 841 6544
                </a>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <MapPin className="w-3.5 h-3.5" />
                  Cainta, Rizal, Philippines
                </div>
              </div>
            </div>
            
            {/* Personal */}
            <div>
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-slate-500 mb-5">Personal</h4>
              <div className="space-y-3">
                {personalInfo.map((info, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-slate-500">{info.label}:</span>
                    <span className="text-slate-300">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Interests */}
            <div>
              <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-slate-500 mb-5">Interests</h4>
              <div className="space-y-3">
                {interests.map((interest, i) => {
                  const Icon = interest.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                      <Icon className="w-3.5 h-3.5 text-amber-400/60" />
                      {interest.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom bar */}
      <div className="border-t border-slate-800/50 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Mark Allen U. Andrade. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-xs text-slate-600">Available for opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}