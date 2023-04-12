import { RenderTexture } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {
  const textRef = useRef(null);

  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.getElapsedTime()))
  );

  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["pink"]} />
          <Text ref={textRef} fontSize={2} color="#555">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
