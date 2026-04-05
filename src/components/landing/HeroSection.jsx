import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection({ heroImage }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Anandavan Heritage Temple Complex"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-body text-sm md:text-base tracking-[0.35em] uppercase text-white/70 mb-6">
            First Hindu Temple in Cyprus
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
            Anandavan
            <br />
            <span className="text-amber-300">Heritage</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            The first authentic temple complex in the Eastern Mediterranean, built according
            to the canons of classical Indian architecture, uniting all the main branches of Hinduism.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex flex-col items-center gap-4 justify-center"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-lg"
            >
              Discover Our Vision
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border-2 border-white/40 text-white font-body font-semibold rounded-lg hover:bg-white/10 transition-all"
            >
              Join the Journey
            </button>
          </div>
          <a
            href="https://www.paypal.com/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-amber-400 text-amber-900 font-body font-semibold rounded-lg hover:bg-amber-300 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            🙏 Donate Now
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}