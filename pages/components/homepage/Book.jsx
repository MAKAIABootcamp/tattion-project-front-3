/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 book.gltf --transform
Author: joaobaltieri (https://sketchfab.com/joaobaltieri)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/paladins-book-ancient-knights-secrets-07bc6364101c4bd4adaa3d0cee1aaa3e
Title: Paladin's Book | Ancient Knight's Secrets
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/landingPage/book-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.book_texturing_v2_book_paladins_book_0.geometry}
        material={materials.paladins_book}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[20, 20, 20]}
      />
      <mesh
        geometry={nodes.book_texturing_v2_pages_paladin_pages_0.geometry}
        material={materials.paladin_pages}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[20, 20, 20]}
      />
    </group>
  );
}

useGLTF.preload("/landingPage/book-transformed.glb");
