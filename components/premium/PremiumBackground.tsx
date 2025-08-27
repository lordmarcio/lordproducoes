"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export default function PremiumBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10">
      <div className="absolute inset-0 bg-black">
        <MeshGradient
          className="absolute inset-0 w-full h-full"
          speed={0.3}
          colors={[
            "#000000",
            "#8B5CF6",
            "#000000", 
            "#A855F7",
            "#FFFFFF",
            "#000000",
            "#9333EA",
            "#000000",
            "#7C3AED",
          ]}
        />
        <MeshGradient
          className="absolute inset-0 w-full h-full opacity-60"
          speed={0.2}
          colors={[
            "#000000",
            "#A855F7", 
            "#000000",
            "#8B5CF6",
            "#000000",
            "#FFFFFF",
            "#000000",
            "#9333EA", 
            "#000000",
          ]}
        />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-violet-600/10 to-purple-600/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-32 w-24 h-24 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-lg animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-pink-600/10 to-rose-600/10 rounded-full blur-2xl animate-pulse" />
      </div>
    </div>
  );
}