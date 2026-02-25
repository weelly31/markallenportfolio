"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, BarChart3, BookOpen, Calculator, 
  Shield, Database, Table2, Presentation 
} from "lucide-react";

const skills = [
  { icon: FileText, label: "Accounts Payable & Invoice Processing" },
  { icon: BarChart3, label: "Financial Reporting & Documentation" },
  { icon: BookOpen, label: "Ledger Reconciliation & Account Analysis" },
  { icon: Calculator, label: "Cost Estimation & Budget Preparation" },
  { icon: Shield, label: "Audit Support (Internal & External)" },
  { icon: Database, label: "ERP: NetSuite / Oracle / Dynamics 365" },
  { icon: Table2, label: "Microsoft Excel (Advanced)" },
  { icon: Presentation, label: "Microsoft Word & PowerPoint" },
];

export default function SkillsSection() {
  return (
    <section className="py-24 sm:py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400 mb-4">Expertise</h2>
          <h3 className="text-3xl sm:text-4xl font-light text-slate-900">
            Core <span className="text-amber-600">Competencies</span>
          </h3>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-50 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-amber-50 flex items-center justify-center mb-4 transition-colors duration-500">
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors duration-500" />
                </div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">{skill.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}