import { Float } from "@react-three/drei";

const CuteStar = ({
  position,
  scale = 1,
  rotation = [0, 0, 0],
}) => {
  return (
    <Float
      speed={1.8}
      rotationIntensity={0.4}
      floatIntensity={1.2}
    >
      <mesh
        position={position}
        scale={scale}
        rotation={rotation}
      >
        <octahedronGeometry args={[0.45, 0]} />

        <meshStandardMaterial
          color="#f5e8ff"
          roughness={0.35}
          metalness={0.2}
        />
      </mesh>
    </Float>
  );
};

export default CuteStar;