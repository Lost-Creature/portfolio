import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false }, // 👈 disables fullscreen
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { quantity: 4 },
          grab: { distance: 150 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: { enable: false },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          speed: 1,
        },
        number: {
          value: 100,
          density: {
            enable: true,
            area: 800,
          },
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: {
          value: { min: 2, max: 4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id={props.id}
      init={props.init}
      loaded={props.loaded}
      options={options}
      style={{ position: "absolute", width: "100%", height: "100%" }} 
      className="absolute w-full h-full"
    />
  );
};

export default ParticlesComponent;
