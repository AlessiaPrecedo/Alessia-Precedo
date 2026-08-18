import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import CuteStar from "./CuteStar";

const Heart = ({ position, scale = 1, rotation = [0, 0, 0] }) => {
  const shape = new THREE.Shape();

  shape.moveTo(0, 0.35);
  shape.bezierCurveTo(-0.5, 0.9, -1.2, 0.55, -1.2, 0);
  shape.bezierCurveTo(-1.2, -0.55, -0.55, -0.95, 0, -1.45);
  shape.bezierCurveTo(0.55, -0.95, 1.2, -0.55, 1.2, 0);
  shape.bezierCurveTo(1.2, 0.55, 0.5, 0.9, 0, 0.35);

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position} rotation={rotation} scale={scale}>
        <extrudeGeometry
          args={[
            shape,
            {
              depth: 0.25,
              bevelEnabled: true,
              bevelSegments: 3,
              bevelSize: 0.08,
              bevelThickness: 0.08,
            },
          ]}
        />

        <meshStandardMaterial
          color="#a855f7"
          roughness={0.25}
          metalness={0.35}
        />
      </mesh>
    </Float>
  );
};

const SceneContent = () => {
  const group = useRef();
  const { size } = useThree();

  const isMobile = size.width < 768;

  useFrame((state) => {
    if (!group.current) return;

    const { x, y } = state.pointer;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      x * 0.15,
      0.03,
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -y * 0.1,
      0.03,
    );
  });

  return (
    <group ref={group}>
      <Heart
        position={isMobile ? [-1.4, 1.8, 0] : [-2, 1, 0]}
        scale={isMobile ? 0.4 : 0.55}
        rotation={[0, 0, -0.2]}
      />

      <Heart
        position={isMobile ? [1.3, 1.1, -1] : [2, 0.8, -1]}
        scale={isMobile ? 0.28 : 0.4}
        rotation={[0, 0, 0.25]}
      />

      <Heart
        position={isMobile ? [1.2, -1.8, 0] : [1.4, -1.4, 0]}
        scale={isMobile ? 0.22 : 0.3}
        rotation={[0, 0, -0.15]}
      />

      <CuteStar
        position={isMobile ? [-1.7, 0.3, -1] : [-3, 0.2, -1]}
        scale={isMobile ? 0.35 : 0.5}
      />

      <CuteStar
        position={isMobile ? [1.5, -0.5, -0.5] : [2.8, -0.8, -0.5]}
        scale={isMobile ? 0.25 : 0.35}
      />

      <CuteStar
        position={isMobile ? [0.4, 2.2, -1] : [0.5, 1.8, -1]}
        scale={isMobile ? 0.2 : 0.3}
      />
    </group>
  );
};
const HeroScene = () => {
  return (
    <Canvas className="hero__canvas" camera={{ position: [0, 0, 7], fov: 45 }}>
      <ambientLight intensity={1.5} />

      <directionalLight position={[3, 3, 4]} intensity={2} />

      <SceneContent />
    </Canvas>
  );
};

export default HeroScene;
