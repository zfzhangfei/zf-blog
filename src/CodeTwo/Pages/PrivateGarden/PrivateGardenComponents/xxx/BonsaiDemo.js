import React from "react";
import { Canvas } from "@react-three/fiber";
import { Box, Sphere, OrbitControls, PerspectiveCamera, Html } from "@react-three/drei";

function Bonsai() {
  return (
    // 盆栽底座
    <Box args={[1, 0.3, 1]} position={[0, -0.6, 0]} castShadow>
      <meshStandardMaterial color="saddlebrown" />
    </Box>
  );
}

function Plant() {
  return (
    // 多肉绿植，我们用球体模拟
    <Sphere args={[0.5, 15, 15]} position={[0, 0.5, 0]} castShadow>
      <meshStandardMaterial color="green" />
    </Sphere>
  );
}

function BonsaiDemo() {
  return (
    <Canvas colorManagement shadowMap camera={{ position: [7, 7, 7] }}>
      <ambientLight intensity={0.5} />
      <directionalLight castShadow intensity={1} position={[2.5, 8, 5]} />
      <Bonsai/>
      <Plant/>
      <OrbitControls />
      <Html center fullscreen>
        <span>{'Scroll to zoom, drag to rotate'}</span>
      </Html>
    </Canvas>
  );
}

export default BonsaiDemo;