import { useRef } from 'react';
import {
  Html,
  PivotControls,
  OrbitControls,
  TransformControls,
} from '@react-three/drei';

export default function Experience() {
  const sphere = useRef();
  const cube = useRef();

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh position-x={-2} ref={sphere}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
      <TransformControls mode="translate" object={sphere} />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={3}
        axisColors={['#6251d6', '#FF4D6D', '#7ae582']}
        scale={80}
        fixed={true}
      >
        <mesh position-x={2} scale={1.5} ref={cube}>
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />

          <Html
            position={[0.6, 1, 0]}
            wrapperClass="note"
            center
            distanceFactor={6}
            occlude={[cube, sphere]}
          >
            I'm a Cube! ✨
          </Html>
        </mesh>
      </PivotControls>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
