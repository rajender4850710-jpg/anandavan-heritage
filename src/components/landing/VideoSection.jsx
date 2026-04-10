import React from "react";
import { motion } from "framer-motion";

// Replace this with your actual YouTube video ID
const YOUTUBE_VIDEO_ID = "uP9nsLtnGUI";

export default function VideoSection() {
  return (
    <section id="video" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">Experience the Vision</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            See the Temple Come to Life
          </h2>
          <p className="font-body text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Watch our vision for the Anandavan Heritage temple complex unfold — a sacred space for generations to come.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl aspect-video"
        >
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1`}
            title="Anandavan Heritage Temple"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}