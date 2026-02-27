"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Users, Music, Calendar, BookOpen, HandHeart } from "lucide-react";

const involvements = [
  { icon: Users, label: "Associate Pastor" },
  { icon: Calendar, label: "Camp Program Organizer & Planning Committee" },
  { icon: BookOpen, label: "Small Group Leader / Discipleship Facilitator" },
  { icon: Music, label: "Worship Team Musical Director" },
  { icon: Heart, label: "Event & Fellowship Program Coordinator" },
  { icon: HandHeart, label: "Mentorship & Spiritual Guidance for Young Adults" },
];

const strengths = [
  "Team coordination and volunteer supervision",
  "Program planning and execution (Youth Camps, Fellowships, Family Days)",
  "Biblical teaching and small group facilitation",
  "Conflict resolution and pastoral support assistance",
  "Administrative and financial accountability support",
];
// chqange profile

export default function MinistrySection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
              <Heart className="w-4 h-4 text-amber-600" />
            </div>
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400">Ministry</h2>
          </div>
          <h3 className="text-3xl sm:text-4xl font-light text-slate-900 mb-12">
            Church <span className="text-amber-600">Leadership</span>
          </h3>
        </motion.div>

        {/* Images Row */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
              <Image
                src="/img/church.jpg"
                alt="Speaking at church event"
                width={600}
                height={400}
                className="object-cover w-full h-64"
                priority
              />
            </div>
            <p className="mt-3 text-center text-slate-600 text-sm">Sharing a message</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
              <Image
                src="/img/church2.jpg"
                alt="Playing instrument in worship team"
                width={600}
                height={400}
                className="object-cover w-full h-64"
                priority
              />
            </div>
            <p className="mt-3 text-center text-slate-600 text-sm">Serving as a musician in the worship team</p>
          </div>
        </div>

        {/* Involvements grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {involvements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-3 bg-slate-50/70 rounded-xl p-5 border border-slate-100"
              >
                <Icon className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-700 leading-relaxed">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-10"
        >
          <h4 className="text-white text-sm font-medium tracking-[0.15em] uppercase mb-6">
            Supervisory Strengths
          </h4>
          <ul className="space-y-3">
            {strengths.map((s, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}