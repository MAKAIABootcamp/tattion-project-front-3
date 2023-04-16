import { Sphere } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { Gradient } from "lamina";
import { LayerMaterial } from "lamina";
import React from "react";

import * as THREE from "three";

const Background = () => {
  const colorA = "#1f004c";
  const colorB = "#2a0157";
  const start = 0.2;
  const end = -0.5;

  return (
    <>
      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
        <LayerMaterial side={THREE.BackSide}>
          <Gradient
            colorA={colorA}
            colorB={colorB}
            axes={"y"}
            start={start}
            end={end}
          />
        </LayerMaterial>
      </Sphere>
      <Environment resolution={256}>
        <Sphere
          scale={[500, 500, 500]}
          rotation-y={Math.PI / 2}
          rotation-x={Math.PI}
        >
          <LayerMaterial side={THREE.BackSide}>
            <Gradient
              colorA={colorA}
              colorB={colorB}
              axes={"y"}
              start={start}
              end={end}
            />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  );
};

export default Background;
