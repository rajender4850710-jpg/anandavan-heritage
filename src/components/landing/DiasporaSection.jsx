import React from "react";
import { motion } from "framer-motion";

export default function DiasporaSection() {
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
            Unification of the Diaspora
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
            Center for Expansion to Europe
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto mb-6">
            Cyprus is the gateway to Europe. The sponsor becomes the "face" of the Indian community in the EU,
            receiving the status of honorary patron, recognized at the state level of both countries.
          </p>
          <p className="font-body text-lg text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Borders are opening, and India's IT sector and business are flowing to Cyprus. The temple will become a place
            where the sponsor will meet hundreds of influential compatriots every month.
          </p>
        </motion.div>
      </div>
    </section>
  );
}