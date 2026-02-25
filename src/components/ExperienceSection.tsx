"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Accounting Assistant",
    company: "FEU Roosevelt",
    period: "2021 – 2023",
    duties: [
      "Processed and recorded financial transactions using NetSuite/Oracle Accounting System",
      "Updated general ledgers and performed account analysis",
      "Prepared financial reports and supporting documentation",
      "Assisted during internal and external audits",
      "Maintained organized accounting records",
      "Ensured compliance with accounting standards and company policies",
    ],
  },
  {
    title: "Estimator",
    company: "EL-JAKE Builders",
    period: "2018 – 2020",
    duties: [
      "Prepared cost estimates for DPWH projects",
      "Analyzed labor, material, and time requirements",
      "Evaluated project specifications and construction drawings",
      "Assisted in bid preparation and project budgeting",
    ],
  },
  {
    title: "Accounts Payable Associate",
    company: "Beyond Innovations, Inc. (JBL)",
    period: "2017 – 2018",
    duties: [
      "Processed and reconciled invoices using NAV/Dynamics 365",
      "Managed payment schedules and vendor accounts",
      "Ensured accuracy of expense documentation",
      "Coordinated with suppliers regarding billing concerns",
    ],
  },
  {
    title: "Office Staff",
    company: "DARS Aluglaze Contractor Co.",
    period: "2012 – 2017",
    duties: [
      "Prepared Purchase Orders and maintained records",
      "Assisted in payroll preparation",
      "Maintained employee salary database",
      "Prepared and submitted BIR reports",
      "Ensured compliance with documentation standards",
    ],
  },
];

export default function ExperienceSection() {
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
              <Briefcase className="w-4 h-4 text-amber-600" />
            </div>
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400">Career</h2>
          </div>
          
          <h3 className="text-3xl sm:text-4xl font-light text-slate-900 mb-16">
            Professional <span className="text-amber-600">Experience</span>
          </h3>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-slate-200" />
          
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-8 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 sm:left-8 top-1 w-px h-px">
                  <div className="absolute -left-[4px] -top-[4px] w-[9px] h-[9px] rounded-full bg-amber-400 ring-4 ring-white" />
                </div>
                
                <div className="bg-slate-50/50 rounded-2xl p-6 sm:p-8 border border-slate-100 hover:border-slate-200 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-lg font-medium text-slate-900">{exp.title}</h4>
                      <p className="text-amber-600 text-sm font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs text-slate-400 tracking-wider uppercase whitespace-nowrap bg-white px-3 py-1.5 rounded-full border border-slate-100 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.duties.map((duty, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-slate-300 mt-2 shrink-0" />
                        {duty}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}