import React from "react";
import { motion } from "framer-motion";

const DEITIES = [
  { name: "Sri Vishnu & Mahalakshmi", desc: "Symbols of prosperity and protection — the central deities of the altar." },
  { name: "ShivaLingam", desc: "The cosmic representation of Lord Shiva, the destroyer and transformer." },
  { name: "Maa Durga", desc: "The fierce mother goddess, protector against evil forces." },
  { name: "Maa Kali", desc: "The goddess of time, change, and liberation." },
  { name: "Sri Ganesha", desc: "The remover of obstacles and lord of new beginnings." },
];

export default function AltarSection({ altarImage }) {
  return (
    <section id="altar" className="py-24 md:py-32 bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-amber-300 mb-4">Sarva-Deva</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">The Sacred Altar</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={altarImage}
              alt="Sacred altar with deities"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-video"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6">
              {DEITIES.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2.5 shrink-0 group-hover:scale-150 transition-transform" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-amber-200">{d.name}</h3>
                    <p className="font-body text-sm text-white/60 leading-relaxed">{d.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}