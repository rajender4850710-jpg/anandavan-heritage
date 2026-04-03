import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Get in Touch</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Us in This Sacred Journey
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you wish to visit, sponsor, or simply learn more about the Anandavan Heritage temple project — we welcome you with open arms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          <a
            href="mailto:anandavanheritage@gmail.com"
            className="flex items-center gap-3 px-8 py-4 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-body text-xs text-muted-foreground">Email</p>
              <p className="font-body text-sm font-semibold text-foreground">anandavanheritage@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+35794098166"
            className="flex items-center gap-3 px-8 py-4 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-body text-xs text-muted-foreground">Phone</p>
              <p className="font-body text-sm font-semibold text-foreground">+357 94098166</p>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-2 text-muted-foreground"
        >
          <MapPin className="w-4 h-4" />
          <p className="font-body text-sm">Cyprus</p>
        </motion.div>
      </div>
    </section>
  );
}