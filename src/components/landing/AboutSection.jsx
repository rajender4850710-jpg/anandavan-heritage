import React from "react";
import { motion } from "framer-motion";
import { Landmark, Sparkles, Heart } from "lucide-react";

const FEATURES = [
  {
    icon: Landmark,
    title: "Classical Shastras",
    desc: "Built according to the canons of classical Indian architecture — authentic marble and carved stone."
  },
  {
    icon: Sparkles,
    title: "All Branches United",
    desc: "A sacred space uniting all the main branches of Hinduism under one monumental roof."
  },
  {
    icon: Heart,
    title: "Spiritual Sanctuary",
    desc: "Not a rented space, but a monumental building with domes (Shikhara) — a true temple for generations."
  }
];

export default function AboutSection({ architectureImage }) {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">About the Temple</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            A Monument of Faith
          </h2>
        </motion.div>

        {/* Two column */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <img
                src="https://media.base44.com/images/public/69cfc5bde36fddfa4d6802bb/1bbc44df3_image.png"
                alt="Temple architecture details"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              The temple will resemble the majestic structures of authentic Indian marble and carved stone.
              This is not a rented space, but a monumental building with domes (Shikhara) — the first authentic
              temple complex in the Eastern Mediterranean.
            </p>

            <div className="space-y-6">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{f.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}