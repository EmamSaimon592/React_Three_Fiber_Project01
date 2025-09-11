import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls } from "@react-three/drei";
import Cyl from "./Cyl";
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';

const App = () => {
  return (
    <>
      <Canvas camera={{ fov: 35 }}>
         {/* <OrbitControls /> // on / off */}
        <ambientLight />
        <Cyl />
        <EffectComposer>
          <Bloom
            intensity={6.5} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
    </>
  );
};

export default App;
