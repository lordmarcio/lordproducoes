"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export default function MeshGradientBackground() {
  return (
    <div className="fixed inset-0 w-full h-full bg-black overflow-hidden -z-10">
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
  );
}