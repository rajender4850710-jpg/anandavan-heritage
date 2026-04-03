import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 bg-foreground text-primary-foreground/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🙏</span>
          <span className="font-heading text-sm font-semibold text-primary-foreground/70">Anandavan Heritage</span>
        </div>
        <p className="font-body text-xs text-center">
          © {new Date().getFullYear()} Anandavan Heritage. First Hindu Temple in Cyprus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}