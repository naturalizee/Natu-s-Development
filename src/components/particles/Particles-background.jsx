import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import ParticlesConfigLight from "./Particles-config-light";
import ParticlesConfigDark from "./Particles-config-dark";

const ParticlesBackground = ({ theme }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesConfig = theme === "dark" ? ParticlesConfigDark : ParticlesConfigLight;

  return (
    <Particles
      id="particles-container"
      init={particlesInit}
      options={particlesConfig}
    />
  );
};

export default ParticlesBackground;