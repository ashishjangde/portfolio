"use client";

import { Float, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

function SignalCore() {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.24) * 0.08;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.65}>
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[1.65, 2]} />
          <meshBasicMaterial color="#72f7c1" wireframe transparent opacity={0.44} />
        </mesh>
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[2.05, 0.012, 12, 120]} />
          <meshBasicMaterial color="#90a3ff" transparent opacity={0.6} />
        </mesh>
        <mesh rotation={[0.45, 0.65, 0.2]}>
          <torusGeometry args={[2.2, 0.008, 12, 120]} />
          <meshBasicMaterial color="#72f7c1" transparent opacity={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

export default function MarketSphere() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.8], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.8} />
      <SignalCore />
      <Sparkles count={42} scale={5.8} size={1.5} speed={0.18} color="#a8ffe0" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
    </Canvas>
  );
}
