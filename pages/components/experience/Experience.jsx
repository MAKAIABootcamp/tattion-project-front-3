import { useMemo, useRef } from "react";
import { Float } from "@react-three/drei";
import { Sparkles } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import Background from "./Background";
import Cosmonaut from "./Cosmonaut";
import * as THREE from "three";
import { Line } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

const LINE_NB_POINTS = 1000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;

const Experience = () => {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -CURVE_DISTANCE),
        new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
        new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
        new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
        new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.02);
    shape.lineTo(0, 0.02);

    return shape;
  }, [curve]);

  const cameraGroup = useRef(null);
  const scroll = useScroll();

  useFrame((_state, delta) => {
    const scrollOffset = Math.max(0, scroll.offset);

    const curPoint = curve.getPoint(scrollOffset);

    cameraGroup.current.position.lerp(curPoint, delta * 24);

    const lookAtPoint = curve.getPoint(
      Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    // Airplane Rotation
    const tangent = curve.getTangent(scrollOffset + CURVE_AHEAD_AIRPLANE);

    const nonLerpLookAt = new Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4; // Stronger angle

    // Limit Rocket Angle
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -AIRPLANE_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, AIRPLANE_MAX_ANGLE);
    }

    // Set Back Angle
    angle = (angleDegrees * Math.PI) / 180;

    const targetAirplaneQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        airplane.current.rotation.x,
        airplane.current.rotation.y,
        angle
      )
    );

    airplane.current.quaternion.slerp(targetAirplaneQuaternion, delta * 2);
  });

  const airplane = useRef(null);

  return (
    <>
      <directionalLight position={[10, 10, 10]} intensity={0.1} />
      {/* <OrbitControls /> */}
      <Sparkles size={70} scale={[85, 65, 3400]} />
      <group ref={cameraGroup}>
        <Background />
        <PerspectiveCamera position={[-2, 3, 12]} fov={50} makeDefault />
        <group ref={airplane}>
          <Float floatIntensity={2} speed={2} rotationIntensity={0.03}>
            <Cosmonaut
              rotation-y={Math.PI / 2}
              scale={[0.01, 0.01, 0.01]}
              position-y={0.1}
            />
          </Float>
        </group>
      </group>
      <mesh>
        <extrudeGeometry
          args={[
            shape,
            {
              steps: LINE_NB_POINTS,
              bevelEnabled: false,
              extrudePath: curve,
            },
          ]}
        />
        <meshStandardMaterial color={"white"} opacity={0.7} transparent />
      </mesh>
    </>
  );
};

export default Experience;
