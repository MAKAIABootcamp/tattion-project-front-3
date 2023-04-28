import { Sphere } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Gradient } from "lamina";
import { LayerMaterial } from "lamina";
import React, { useRef } from "react";

import * as THREE from "three";

const Background = ({ backgroundColors }) => {
  const start = 0.2;
  const end = -0.5;

  const gradientRef = useRef();
  const gradientEnvRef = useRef();

  useFrame(() => {
    gradientRef.current.colorA = new THREE.Color(
      backgroundColors.current.colorA
    );
    gradientRef.current.colorB = new THREE.Color(
      backgroundColors.current.colorB
    );
    gradientEnvRef.current.colorA = new THREE.Color(
      backgroundColors.current.colorA
    );
    gradientEnvRef.current.colorB = new THREE.Color(
      backgroundColors.current.colorB
    );
  });

  return (
    <>
      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
        <LayerMaterial side={THREE.BackSide}>
          <Gradient ref={gradientRef} axes={"y"} start={start} end={end} />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={256}>
        <Sphere
          scale={[500, 500, 500]}
          rotation-y={Math.PI / 2}
          rotation-x={Math.PI}
        >
          <LayerMaterial side={THREE.BackSide}>
            <Gradient ref={gradientEnvRef} axes={"y"} start={start} end={end} />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  );
};

export default Background;
