
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Character() {
  const body = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const x = state.pointer.x;
    const y = state.pointer.y;

    if (body.current) {
      body.current.position.y = -0.35 + Math.sin(t * 1.4) * 0.055;
      body.current.rotation.y = THREE.MathUtils.damp(
        body.current.rotation.y, x * 0.24, 3, delta
      );
      body.current.rotation.z = THREE.MathUtils.damp(
        body.current.rotation.z, -x * 0.04, 3, delta
      );
    }

    if (head.current) {
      head.current.rotation.y = THREE.MathUtils.damp(
        head.current.rotation.y, x * 0.35, 4, delta
      );
      head.current.rotation.x = THREE.MathUtils.damp(
        head.current.rotation.x, -y * 0.12, 4, delta
      );
    }

    if (leftArm.current) {
      leftArm.current.rotation.z = Math.sin(t * 1.2) * 0.035;
    }

    if (rightArm.current) {
      rightArm.current.rotation.z = Math.sin(t * 1.2 + 1) * 0.035;
    }
  });

  return (
    <group ref={body} position={[0, -0.35, 0]}>
      {/* Legs */}
      <mesh position={[-0.25, -0.68, 0]} rotation={[0, 0, -0.18]}>
        <capsuleGeometry args={[0.17, 0.75, 5, 12]} />
        <meshStandardMaterial color="#242239" roughness={0.8} />
      </mesh>

      <mesh position={[0.22, -0.68, 0.12]} rotation={[0, 0, 0.12]}>
        <capsuleGeometry args={[0.17, 0.75, 5, 12]} />
        <meshStandardMaterial color="#30283f" roughness={0.8} />
      </mesh>

      {/* Sneakers */}
      <mesh position={[-0.28, -1.12, 0.18]} rotation={[0, 0.1, 0]}>
        <boxGeometry args={[0.36, 0.18, 0.48]} />
        <meshStandardMaterial color="#f0d8ee" roughness={0.45} />
      </mesh>

      <mesh position={[0.28, -1.12, 0.22]}>
        <boxGeometry args={[0.36, 0.18, 0.48]} />
        <meshStandardMaterial color="#f0d8ee" roughness={0.45} />
      </mesh>

      {/* Hoodie torso */}
      <mesh position={[0, 0.05, 0]}>
        <capsuleGeometry args={[0.36, 0.65, 6, 16]} />
        <meshStandardMaterial
          color="#30223f"
          roughness={0.75}
          metalness={0.05}
        />
      </mesh>

      {/* Shirt */}
      <mesh position={[0, 0.08, 0.315]}>
        <boxGeometry args={[0.29, 0.55, 0.045]} />
        <meshStandardMaterial color="#b58cae" roughness={0.8} />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 0.52, 0]}>
        <cylinderGeometry args={[0.12, 0.14, 0.22, 12]} />
        <meshStandardMaterial color="#a96849" roughness={0.8} />
      </mesh>

      {/* Head and face */}
      <group ref={head} position={[0, 0.83, 0.015]}>
        <mesh>
          <sphereGeometry args={[0.34, 32, 24]} />
          <meshStandardMaterial color="#bd805e" roughness={0.78} />
        </mesh>

        {/* Hair */}
        <mesh position={[0, 0.19, -0.015]} scale={[1.02, 0.62, 1]}>
          <sphereGeometry args={[0.34, 24, 16]} />
          <meshStandardMaterial color="#211a25" roughness={0.9} />
        </mesh>

        {/* Front hair fringe */}
        <mesh position={[-0.12, 0.17, 0.265]} rotation={[0.15, 0, -0.25]}>
          <sphereGeometry args={[0.17, 16, 12]} />
          <meshStandardMaterial color="#211a25" roughness={0.9} />
        </mesh>

        {/* Eyes */}
        {[-0.12, 0.12].map((x) => (
          <group key={x} position={[x, 0.015, 0.306]}>
            <mesh>
              <sphereGeometry args={[0.045, 16, 12]} />
              <meshStandardMaterial color="#fff4e9" />
            </mesh>
            <mesh position={[0, 0, 0.034]}>
              <sphereGeometry args={[0.023, 12, 12]} />
              <meshStandardMaterial color="#211925" />
            </mesh>
          </group>
        ))}

        {/* Nose */}
        <mesh position={[0, -0.065, 0.34]}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial color="#a96849" roughness={0.8} />
        </mesh>

        {/* Smile */}
        <mesh position={[0, -0.15, 0.302]} scale={[1, 0.25, 0.35]}>
          <sphereGeometry args={[0.065, 16, 12]} />
          <meshStandardMaterial color="#704044" />
        </mesh>
      </group>

      {/* Arms */}
      <group ref={leftArm} position={[-0.35, 0.25, 0]}>
        <mesh rotation={[0, 0, -0.45]} position={[-0.09, -0.2, 0]}>
          <capsuleGeometry args={[0.12, 0.42, 5, 12]} />
          <meshStandardMaterial color="#382740" roughness={0.8} />
        </mesh>
        <mesh position={[-0.2, -0.4, 0.1]}>
          <sphereGeometry args={[0.095, 16, 12]} />
          <meshStandardMaterial color="#bd805e" />
        </mesh>
      </group>

      <group ref={rightArm} position={[0.35, 0.25, 0]}>
        <mesh rotation={[0, 0, 0.45]} position={[0.1, -0.2, 0]}>
          <capsuleGeometry args={[0.12, 0.42, 5, 12]} />
          <meshStandardMaterial color="#382740" roughness={0.8} />
        </mesh>
        <mesh position={[0.2, -0.4, 0.1]}>
          <sphereGeometry args={[0.095, 16, 12]} />
          <meshStandardMaterial color="#bd805e" />
        </mesh>
      </group>
    </group>
  );
}

function NeonOrbit() {
  const orbit = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (orbit.current) {
      orbit.current.rotation.y += delta * 0.25;
      orbit.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <group ref={orbit}>
      {[0, Math.PI / 3, -Math.PI / 3].map((rotation, i) => (
        <mesh
          key={i}
          rotation={[Math.PI / 2 + rotation, 0, 0]}
        >
          <torusGeometry args={[1.45 + i * 0.18, 0.006, 8, 140]} />
          <meshBasicMaterial
            color={i === 1 ? "#f6a4c7" : "#f5c1a0"}
            transparent
            opacity={0.75}
          />
        </mesh>
      ))}
    </group>
  );
}

function FloatingCard({
  position,
  title,
  subtitle,
}: {
  position: [number, number, number];
  title: string;
  subtitle: string;
}) {
  return (
    <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.15}>
      <group position={position}>
        <mesh>
          <boxGeometry args={[1.15, 0.38, 0.06]} />
          <meshStandardMaterial
            color="#29223b"
            roughness={0.45}
            metalness={0.2}
          />
        </mesh>
        <mesh position={[-0.42, 0, 0.04]}>
          <circleGeometry args={[0.07, 20]} />
          <meshBasicMaterial color="#f6b59d" />
        </mesh>
        <group position={[-0.28, 0.055, 0.045]}>
          <mesh position={[0, 0.025, 0]}>
            <planeGeometry args={[0.7, 0.1]} />
            <meshBasicMaterial color="#fff0f1" />
          </mesh>
          <mesh position={[0, -0.09, 0]}>
            <planeGeometry args={[0.65, 0.065]} />
            <meshBasicMaterial color="#d3c1dc" />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

export default function CartoonScene() {
  return (
    <div className="cartoon-scene">
      <Canvas
        camera={{ position: [0, 0.15, 4.8], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={2.1} />
        <directionalLight position={[3, 5, 5]} intensity={3} color="#ffd3bb" />
        <pointLight position={[-3, 1, 3]} intensity={25} color="#b36cff" />
        <pointLight position={[3, -1, 2]} intensity={20} color="#ff856f" />

        <NeonOrbit />

        <Float speed={1.1} rotationIntensity={0.025} floatIntensity={0.12}>
          <Character />
        </Float>

        <FloatingCard
          position={[-1.65, 0.9, -0.3]}
          title="AI / ML"
          subtitle="Building intelligence"
        />

        <FloatingCard
          position={[1.65, 0.15, -0.25]}
          title="Computer Vision"
          subtitle="Seeing possibilities"
        />

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.7}
          rotateSpeed={0.35}
        />
      </Canvas>
    </div>
  );
}
