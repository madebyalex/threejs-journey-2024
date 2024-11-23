import * as THREE from 'three';
import { extend, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import CustomObject from './CustomObject';

extend({ OrbitControls: OrbitControls });

export default function Experience() {
  const { camera, gl } = useThree();
  const cubeRef = useRef();
  const objectsRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += 0.02;
    // objectsRef.current.rotation.y -= 0.01;
    // console.log(delta);

    // console.log(state.clock.elapsedTime);

    // Moving the camera around the objects
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 8;
    // state.camera.position.y = Math.cos(angle / 2) * 2 + 2;
    // state.camera.position.z = Math.cos(angle) * 8;
    // state.camera.lookAt(0, 0, 0);
  });
  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1, 2, 3]} intensity={3} />
      <ambientLight intensity={2} />

      <group ref={objectsRef}>
        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}
        >
          <sphereGeometry args={[1.5, 16, 16]} />
          <boxGeometry />
          <meshStandardMaterial
            color="mediumpurple"
            wireframe={false}
            // wireframeLinewidth={5}
          />
        </mesh>

        <mesh position-x={-2} rotation-x={Math.PI * 0.25}>
          <sphereGeometry args={[1, 12, 8]} />
          <meshStandardMaterial color="orange" wireframe={true} />
        </mesh>
      </group>

      <mesh position-y={-1.5} rotation-x={-Math.PI * 0.5} scale={15}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" side={THREE.DoubleSide} />
      </mesh>

      {/* <CustomObject /> */}
    </>
  );
}
