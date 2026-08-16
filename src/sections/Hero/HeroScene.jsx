import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const FloatingShape = ({ position, scale = 1 }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[0.35, 1]} />
        <meshStandardMaterial color="#a855f7" roughness={0.3} metalness={0.5} />
      </mesh>
    </Float>
  );
};

const HeroScene = () => {
  return (
    <Canvas className="hero__canvas" camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={1.5} />

      <directionalLight position={[3, 3, 3]} intensity={2} />

      <FloatingShape position={[-2, 1, 0]} scale={1} />
      <FloatingShape position={[2, 0.5, -1]} scale={0.7} />
      <FloatingShape position={[1, -1.2, 0]} scale={0.5} />
      <FloatingShape position={[-1.5, -1, -1]} scale={0.6} />
    </Canvas>
  );
};

export default HeroScene;
