"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim";

function AmongUsParticles() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    fpsLimit: 120,
    fullScreen: {
      enable: true,
    },
    particles: {
      groups: {
        z5000: {
          number: {
            value: 70,
          },
          zIndex: {
            value: 50,
          },
        },
        z7500: {
          number: {
            value: 30,
          },
          zIndex: {
            value: 75,
          },
        },
        z2500: {
          number: {
            value: 50,
          },
          zIndex: {
            value: 25,
          },
        },
        z1000: {
          number: {
            value: 40,
          },
          zIndex: {
            value: 10,
          },
        },
      },
      number: {
        value: 300,
        density: {
          enable: false,
        },
      },
      color: {
        value: ["#000000", "#FFFFFF"],
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.8,
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 5 },
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
      },
      move: {
        angle: {
          value: 90,
          offset: 0,
        },
        enable: true,
        speed: { min: 1, max: 10 },
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      zIndex: {
        value: 0,
        opacityRate: 0.5,
      },
    },
    background: {
      color: "#000000",
    },
    emitters: {
      direction: "none",
      position: {
        y: 50,
        x: 50,
      },
      rate: {
        delay: 5,
        quantity: 5,
      },
      size: {
        width: 100,
        height: 100,
      },
      particles: {
        size: {
          value: 20,
        },
        move: {
          speed: 3,
          outModes: {
            default: "out",
          },
          random: true,
          straight: false,
        },
        zIndex: {
          value: 0,
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 10,
            sync: true,
          },
        },
      },
    },
  };

  return (
    <div>{init && <Particles options={options} className="-z-50" />}</div>
  );
}

export default AmongUsParticles;
