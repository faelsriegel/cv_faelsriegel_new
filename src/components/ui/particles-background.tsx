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
      zIndex: -10,
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
          mode: "repulse",
        },
        onClick: {
          enable: false,
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
          speed: 1,
        },
      },
    },
    particles: {
      color: {
        value: resolvedTheme === "dark" ? "#ffffff" : "#2563eb",
      },
      links: {
        color: resolvedTheme === "dark" ? "#ffffff" : "#2563eb",
        distance: 150,
        enable: true,
        opacity: resolvedTheme === "dark" ? 0.12 : 0.15,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.7,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          height: 800,
          width: 800,
        },
        value: 40,
      },
      opacity: {
        value: resolvedTheme === "dark" ? 0.2 : 0.35,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2.5 },
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
      className="absolute inset-0"
    />
  );
}
