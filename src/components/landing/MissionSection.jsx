import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Users, Globe } from "lucide-react";

const MISSIONS = [
  {
    icon: BookOpen,
    title: "Spiritual Enlightenment",
    desc: "A centre for the study of Vedic philosophy, yoga, meditation, and spiritual path."
  },
  {
    icon: Users,
    title: "Cultural Bridge",
    desc: "A venue for weddings, Hindu celebrations, attracting thousands of tourists and locals to learn about Hindu traditions, Deities, History and Main Idea."
  },
  {
    icon: Globe,
    title: "Gateway to Europe",
    desc: "Cyprus is the gateway to Europe. The temple will become a hub where the Indian community in the EU gathers, networks, and grows."
  }
];

export default function MissionSection({ missionImage }) {
  return (
    <section id="mission" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Our Purpose</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">Social Mission</h2>

            <div className="space-y-8">
              {MISSIONS.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="flex gap-5 items-start"
                >
                  <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                    <m.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{m.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <img
                src={missionImage}
                alt="Yoga and meditation at the temple"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-video"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}