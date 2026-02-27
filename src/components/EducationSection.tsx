"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-amber-600" />
            </div>
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400">Education</h2>
          </div>
          
          <h3 className="text-3xl sm:text-4xl font-light text-slate-900 mb-12">
            Academic <span className="text-amber-600">Background</span>
          </h3>
          
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-lg font-medium text-slate-900">
                  Bachelor of Science in Commerce
                </h4>
                <p className="text-amber-600 font-medium mt-1">
                  Major in Management Accounting
                </p>
                <p className="text-slate-500 text-sm mt-2">Colegio de San Sebastian</p>
              </div>
              <span className="text-xs text-slate-400 tracking-wider uppercase bg-slate-50 px-4 py-2 rounded-full border border-slate-100 w-fit">
                2008 – 2012
              </span>
              </div>
              {/* New Education Entry */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8">
                <div>
                  <h4 className="text-lg font-medium text-slate-900">
                    Bachelor of Arts in Theology (ABTh)
                  </h4>
                  <p className="text-amber-600 font-medium mt-1">
                    Major in Pastoral Studies
                  </p>
                  <p className="text-slate-500 text-sm mt-2">Philippine International College</p>
                  <p className="text-slate-500 text-xs mt-1">Completed Foundational Academic Units in Theology</p>
                </div>
                 <span className="text-xs text-slate-400 tracking-wider uppercase bg-slate-50 px-4 py-2 rounded-full border border-slate-100 w-fit">
                2024 – 2025
              </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
