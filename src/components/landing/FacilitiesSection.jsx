import React from "react";
import { motion } from "framer-motion";

export default function FacilitiesSection({ guestImage, hallImage }) {
  const facilities = [
    {
      image: "https://media.base44.com/images/public/69cfc5bde36fddfa4d6802bb/91060d09b_image.png",
      title: "Shanti-Niwas",
      subtitle: "Guest Complex",
      desc: "An area with restrooms where pilgrims and businessmen from India and Europe can stay and immerse themselves in the spiritual atmosphere."
    },
    {
      image: hallImage,
      title: "Annadan Hall",
      subtitle: "Sacred Refectory",
      desc: "A large refectory (Langar) where blessed food (Prasadam) will be distributed daily. A key point for accumulating positive karma for the sponsors."
    }
  ];

  return (
    <section id="facilities" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Temple Complex</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Our Facilities</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl mb-6">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-2">{f.subtitle}</p>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}