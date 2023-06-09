import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { Float } from "@react-three/drei";
import { Sparkles } from "@react-three/drei";
import Background from "./Background";
import Cosmonaut from "./Cosmonaut";
import * as THREE from "three";
import { PerspectiveCamera } from "@react-three/drei";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Euler, Group, Vector3 } from "three";
import gsap from "gsap";
import { fadeOnBeforeCompile } from "@/utils/fadeMaterial";
import { useDispatch, useSelector } from "react-redux";
import { setHasScroll, setEnd, setPlay } from "@/slices/experienceSlice";
import { useRouter } from "next/router";
import Meteor from "./Meteor";
import { OrbitControls } from "@react-three/drei";
import TextSection from "./TextSection";

const LINE_NB_POINTS = 1000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_AIRPLANE = 0.02;
const AIRPLANE_MAX_ANGLE = 35;
const FRICTION_DISTANCE = 42;

const Experience = () => {
    const curvePoints = useMemo(
        () => [
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0, -CURVE_DISTANCE),
            new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
            new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
            new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
            new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
            new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
            new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
        ],
        []
    );

    const sceneOpacity = useRef(0);
    const lineMaterialRef = useRef();

    const { play, end } = useSelector((state) => state.experience);

    const dispatch = useDispatch();

    const router = useRouter();

    const curve = useMemo(() => {
        return new THREE.CatmullRomCurve3(
            curvePoints,
            false,
            "catmullrom",
            0.5
        );
    }, []);

    const textSections = useMemo(() => {
        return [
            {
                cameraRailDist: -1.5,
                position: new Vector3(
                    curvePoints[1].x - 13,
                    curvePoints[1].y + 3,
                    curvePoints[1].z
                ),
                title: `Daniela García`,
                subtitle: `Soy desarrolladora de software y apasionada de la tecnología, me gusta viajar y las fresitas.`,
            },
            {
                cameraRailDist: 3,
                position: new Vector3(
                    curvePoints[2].x + 2,
                    curvePoints[2].y + 3,
                    curvePoints[2].z
                ),
                title: `Alejandro Montaña`,
                subtitle: `Front-end Developer apasionado en el diseño 3D y mi hobbie es el Running.`,
            },
            {
                cameraRailDist: -1.5,
                position: new Vector3(
                    curvePoints[3].x - 10,
                    curvePoints[3].y + 3,
                    curvePoints[3].z
                ),
                title: "Andrés Vélez",
                subtitle: `Soy un desarrollador full-stack, apasionado por el desarrollo creativo e inclusivo.`,
            },
            {
                cameraRailDist: 1.5,
                position: new Vector3(
                    curvePoints[4].x - 2.5,
                    curvePoints[4].y + 3,
                    curvePoints[4].z - 12
                ),
                title: "We hope you enjoy this experience in our website!",
            },
        ];
    });

    const clouds = useMemo(
        () => [
            // STARTING
            {
                position: new Vector3(-4.5, -2.5, -30),
                scale: new Vector3(3, 3, 3),
            },
            {
                scale: new Vector3(3, 3, 3),
                position: new Vector3(10, -1.2, -52),
                rotation: new Euler(Math.PI / 1, 0, 0),
            },
            // FIRST POINT
            {
                scale: new Vector3(3, 3, 3),
                position: new Vector3(
                    curvePoints[1].x + 10,
                    curvePoints[1].y - 4,
                    curvePoints[1].z + 64
                ),
            },
            {
                scale: new Vector3(10, 10, 10),
                rotation: new Vector3(-10, 0, 0),
                position: new Vector3(
                    curvePoints[1].x + 8,
                    curvePoints[1].y - 14,
                    curvePoints[1].z - 22
                ),
            },
            // SECOND POINT
            {
                scale: new Vector3(10, 10, 10),
                position: new Vector3(
                    curvePoints[2].x + 6,
                    curvePoints[2].y - 7,
                    curvePoints[2].z + 50
                ),
            },
            {
                scale: new Vector3(4, 4, 4),
                position: new Vector3(
                    curvePoints[2].x + 12,
                    curvePoints[2].y + 1,
                    curvePoints[2].z - 86
                ),
                rotation: new Euler(Math.PI / 4, 0, Math.PI / 3),
            },
            // THIRD POINT
            {
                scale: new Vector3(3, 3, 3),
                position: new Vector3(
                    curvePoints[3].x + 3,
                    curvePoints[3].y - 10,
                    curvePoints[3].z + 50
                ),
            },
            {
                scale: new Vector3(5, 5, 5),
                position: new Vector3(
                    curvePoints[3].x + 0,
                    curvePoints[3].y - 5,
                    curvePoints[3].z - 98
                ),
                rotation: new Euler(0, Math.PI / 3, 0),
            },
            // FOURTH POINT
            {
                scale: new Vector3(2, 2, 2),
                position: new Vector3(
                    curvePoints[4].x + 3,
                    curvePoints[4].y - 10,
                    curvePoints[4].z + 2
                ),
            },
            {
                scale: new Vector3(3, 3, 3),
                position: new Vector3(
                    curvePoints[4].x - 4,
                    curvePoints[4].y + 9,
                    curvePoints[4].z - 62
                ),
                rotation: new Euler(Math.PI / 3, 0, Math.PI / 3),
            },
            // FINAL
            {
                scale: new Vector3(3, 3, 3),
                position: new Vector3(
                    curvePoints[7].x + 12,
                    curvePoints[7].y - 5,
                    curvePoints[7].z + 60
                ),
                rotation: new Euler(-Math.PI / 4, -Math.PI / 6, 0),
            },
            {
                scale: new Vector3(4, 4, 4),
                position: new Vector3(
                    curvePoints[7].x,
                    curvePoints[7].y,
                    curvePoints[7].z
                ),
                rotation: new Euler(0, 0, 0),
            },
        ],
        []
    );

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
    const cameraRail = useRef(null);
    const scroll = useScroll();
    const lastScroll = useRef(0);

    useFrame((_state, delta) => {
        if (lastScroll.current <= 0 && scroll.offset > 0) {
            dispatch(setHasScroll());
        }

        if (play && !end && sceneOpacity.current < 1) {
            sceneOpacity.current = THREE.MathUtils.lerp(
                sceneOpacity.current,
                1,
                delta * 0.1
            );
        }

        if (end && sceneOpacity.current > 0) {
            sceneOpacity.current = THREE.MathUtils.lerp(
                sceneOpacity.current,
                0,
                delta
            );
        }

        lineMaterialRef.current.opacity = sceneOpacity.current;

        if (end) {
            return;
        }

        const scrollOffset = Math.max(0, scroll.offset);

        let friction = 1;
        let resetCameraRail = true;

        // Look for closest text section
        textSections.forEach((textSection) => {
            const distance = textSection.position.distanceTo(
                cameraGroup.current.position
            );

            if (distance < FRICTION_DISTANCE) {
                friction = Math.max(distance / FRICTION_DISTANCE, 0.1);
                const targetCameraRailPosition = new Vector3(
                    (1 - distance / FRICTION_DISTANCE) *
                        textSection.cameraRailDist,
                    0,
                    0
                );
                cameraRail.current.position.lerp(
                    targetCameraRailPosition,
                    delta
                );
                resetCameraRail = false;
            }
        });

        if (resetCameraRail) {
            const targetCameraRailPosition = new Vector3(0, 0, 0);
            cameraRail.current.position.lerp(targetCameraRailPosition, delta);
        }

        // CALCULATE LERPED SCROLL OFFSET
        let lerpedScrollOffset = THREE.MathUtils.lerp(
            lastScroll.current,
            scrollOffset,
            delta * friction
        );

        // PROTECT BELOW 0 AND ABOVE 1
        lerpedScrollOffset = Math.min(lerpedScrollOffset, 1);
        lerpedScrollOffset = Math.max(lerpedScrollOffset, 0);

        lastScroll.current = lerpedScrollOffset;
        tl.current.seek(lerpedScrollOffset * tl.current.duration());

        const curPoint = curve.getPoint(lerpedScrollOffset);

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

        if (
            cameraGroup.current.position.z <
            curvePoints[curvePoints.length - 1].z + 100
        ) {
            dispatch(setPlay());
            dispatch({ type: "setEnd", payload: { value: true } });
            planeOutTl.current.play();
        }
    });

    const airplane = useRef(null);

    const tl = useRef();
    const backgroundColors = useRef({
        colorA: "#1f004c",
        colorB: "#2a0157",
    });

    const planeInTl = useRef();
    const planeOutTl = useRef();

    useLayoutEffect(() => {
        tl.current = gsap.timeline();

        tl.current.to(backgroundColors.current, {
            duration: 1,
            colorA: "#290263",
            colorB: "#240c47",
        });

        tl.current.pause();

        planeInTl.current = gsap.timeline();
        planeInTl.current.pause();
        planeInTl.current.from(airplane.current.position, {
            duration: 3,
            z: 8,
            y: -2,
        });

        planeOutTl.current = gsap.timeline();
        planeOutTl.current.pause();

        planeOutTl.current.to(
            airplane.current.position,
            {
                duration: 10,
                z: -250,
                y: 10,
            },
            0
        );
        planeOutTl.current.to(
            cameraRail.current.position,
            {
                duration: 8,
                y: 12,
            },
            0
        );
        planeOutTl.current.to(airplane.current.position, {
            duration: 1,
            z: -1000,
        });
    }, []);

    useEffect(() => {
        if (play) {
            planeInTl.current.play();
        }
    }, [play]);

    return useMemo(
        () => (
            <>
                <directionalLight position={[10, 10, 10]} intensity={0.1} />
                {/* <OrbitControls /> */}
                <Sparkles size={70} scale={[85, 65, 3400]} />
                <group ref={cameraGroup}>
                    <Background backgroundColors={backgroundColors} />
                    <group ref={cameraRail}>
                        <PerspectiveCamera
                            position={[-2, 3, 12]}
                            fov={50}
                            makeDefault
                        />
                    </group>
                    <group ref={airplane}>
                        <Float
                            floatIntensity={2}
                            speed={2}
                            rotationIntensity={0.03}
                        >
                            <Cosmonaut
                                rotation-y={Math.PI / 2}
                                scale={[0.01, 0.01, 0.01]}
                                position-y={0.1}
                            />
                        </Float>
                    </group>
                </group>
                {/* TEXT */}

                {textSections.map((textSection, index) => (
                    <TextSection {...textSection} key={index} />
                ))}

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
                    <meshStandardMaterial
                        color={"white"}
                        opacity={0.7}
                        onBeforeCompile={fadeOnBeforeCompile}
                        envMapIntensity={2}
                        ref={lineMaterialRef}
                        transparent
                    />
                </mesh>
                {clouds.map((cloud, index) => (
                    <Meteor
                        sceneOpacity={sceneOpacity}
                        {...cloud}
                        key={index}
                    />
                ))}
            </>
        ),
        []
    );
};

export default Experience;
