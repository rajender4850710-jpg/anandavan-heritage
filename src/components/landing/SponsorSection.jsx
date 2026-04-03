import React from "react";
import { motion } from "framer-motion";
import { Crown, ShieldCheck, Star } from "lucide-react";

const BENEFITS = [
  {
    icon: Crown,
    title: "Kula-Vridhi — Family Prosperity",
    desc: "The construction of a temple to Vishnu and Lakshmi is a direct investment in the financial success of the sponsor's family. According to the Puranas, one who builds an abode for the Lord frees seven generations of their ancestors and descendants from sin."
  },
  {
    icon: ShieldCheck,
    title: "Karmic Healing",
    desc: "A powerful remedy for removing \"Vastu Dosha\" (negative energy) from the sponsor's business and personal life."
  },
  {
    icon: Star,
    title: "Eternal Name",
    desc: "The name of the sponsor and their family will be carved on the Donor Wall or the main gate. As long as the temple stands, prayers for their well-being will be offered daily."
  }
];

export default function SponsorSection({ donorImage }) {
  return (
    <section id="sponsorship" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Become a Patron</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Sponsorship & Blessings
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-5">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{b.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl"
        >
          <img
            src={donorImage}
            alt="Donor wall at the temple"
            className="w-full object-cover aspect-[21/9]"
          />
        </motion.div>
      </div>
    </section>
  );
}