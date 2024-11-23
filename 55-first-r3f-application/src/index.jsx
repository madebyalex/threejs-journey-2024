import './style.css';
import * as THREE from 'three';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience.js';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <>
    <Canvas
      // orthographic
      // flat
      // dpr={[1, 2]}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      camera={{
        fov: 45,
        // zoom: 70,
        near: 0.1,
        far: 200,
        position: [3, 2, 8],
      }}
    >
      <Experience />
    </Canvas>
  </>
);
