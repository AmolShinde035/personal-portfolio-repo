import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 }
          }
        },
        particles: {
          color: { value: "#6c757d" },
          links: {
            enable: true,
            color: "#6c757d",
            distance: 150,
            opacity: 0.3,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            outModes: "bounce"
          },
          number: {
            value: 50,
            density: { enable: true, area: 800 }
          },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true
      }}
      className="particles-bg"
    />
  );
}
