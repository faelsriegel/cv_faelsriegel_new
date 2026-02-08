"use client";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "next-themes";

export function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // Particles loaded
  }, []);

  const options: ISourceOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: ["repulse", "grab"],
        },
        onClick: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        grab: {
          distance: 160,
          links: {
            opacity: resolvedTheme === "dark" ? 0.35 : 0.25,
          },
        },
        repulse: {
          distance: 140,
          duration: 0.35,
          speed: 0.8,
        },
      },
    },
    particles: {
      color: {
        value:
          resolvedTheme === "dark"
            ? ["#93c5fd", "#8ab4f8", "#7dd3fc"]
            : ["#2563eb", "#7c3aed", "#06b6d4"],
      },
      links: {
        color: resolvedTheme === "dark" ? "#8ab4f8" : "#4f46e5",
        distance: 110,
        enable: true,
        opacity: resolvedTheme === "dark" ? 0.18 : 0.16,
        width: 1,
        triangles: {
          enable: false,
        },
      },
      stroke: {
        width: 0.4,
        color: resolvedTheme === "dark" ? "#7dd3fc" : "#3b82f6",
        opacity: 0.35,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: false,
        speed: 0.24,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          height: 1200,
          width: 1200,
        },
        value: 75,
      },
      opacity: {
        value: resolvedTheme === "dark" ? 0.26 : 0.22,
      },
      shape: {
        type: "square",
      },
      size: {
        value: { min: 0.6, max: 2 },
      },
    },
    detectRetina: true,
  };

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="fixed inset-0 particles-mask pointer-events-none -z-10"
    />
  );
}
