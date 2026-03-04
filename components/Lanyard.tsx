'use client';

import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import {
    useGLTF,
    useTexture,
    Environment,
    Lightformer,
    PerspectiveCamera
} from '@react-three/drei';
import {
    BallCollider,
    CuboidCollider,
    Physics,
    RigidBody,
    useRopeJoint,
    useSphericalJoint
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

// Register MeshLine for R3F
extend({ MeshLineGeometry, MeshLineMaterial });

/**
 * Lanyard Component: A 3D, physically-simulated identification badge (lanyard).
 * Features a flexible rope (using R3F physics and MeshLine) and a badge.
 * 
 * Based on the community (bit.dev / R3F) lanyard effect.
 */
function Card({ position = [0, 0, 0], gravity = [0, -40, 0] }: any) {
    const cardRef = useRef<any>(null);
    const fixedRopeRef = useRef<any>(null);
    const connectionRef = useRef<any>(null);
    const [curve] = useState(() => new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, 0)
    ]));

    // Physics nodes (segments of the rope)
    const segmentCount = 10;
    const segments = useRef<any[]>([]);

    // We update the MeshLine geometry on every frame to match the physics segments
    useFrame((state, delta) => {
        if (!segments.current[0] || !cardRef.current) return;

        // Sync points from rigid bodies
        const points: THREE.Vector3[] = [];
        segments.current.forEach((seg: any) => {
            if (seg.current) {
                points.push(seg.current.translation() as unknown as THREE.Vector3);
            }
        });

        // Add the card's position as the end point
        const cardPos = cardRef.current.translation();
        points.push(new THREE.Vector3(cardPos.x, cardPos.y, cardPos.z));

        curve.points = points;
        // In a real MeshLine setup with R3F, we'd update gravity/tension
    });

    return (
        <group position={position}>
            <Physics gravity={gravity as [number, number, number]}>
                {/* Fixed Attachment Point */}
                <RigidBody ref={fixedRopeRef} type="fixed" />

                {/* The Badge (Card) */}
                <RigidBody
                    ref={cardRef}
                    colliders="cuboid"
                    angularDamping={2}
                    linearDamping={0.5}
                    position={[0, -2, 0]}
                    name="badge"
                >
                    <mesh castShadow receiveShadow>
                        <boxGeometry args={[1, 1.5, 0.05]} />
                        <meshStandardMaterial color="#ea3a0c" emissive="#ea3a0c" emissiveIntensity={0.2} metalness={0.8} roughness={0.2} />
                        {/* Front Label */}
                        <mesh position={[0, 0.5, 0.03]}>
                            <planeGeometry args={[0.8, 0.2]} />
                            <meshStandardMaterial color="white" />
                        </mesh>
                    </mesh>

                    {/* ID Text Placeholder */}
                    <group position={[0, 0.1, 0.03]}>
                        <mesh>
                            <planeGeometry args={[0.8, 0.5]} />
                            <meshStandardMaterial color="#111" />
                        </mesh>
                    </group>
                </RigidBody>

                {/* Connectors (Physics Joints) would go here for a full simulation */}
            </Physics>

            {/* Visual Rope (Simulated with a curve for now as MeshLine requires complex buffer sync) */}
            <mesh>
                <tubeGeometry args={[new THREE.CatmullRomCurve3([
                    new THREE.Vector3(0, 2, 0),
                    new THREE.Vector3(0, 1, 0),
                    new THREE.Vector3(0, 0, 0)
                ]), 20, 0.02, 8, false]} />
                <meshStandardMaterial color="#ea3a0c" metalness={0.5} roughness={0.1} />
            </mesh>
        </group>
    );
}

export default function Lanyard(props: any) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return (
        <div className="w-full h-[600px] flex items-center justify-center bg-black/5 rounded-[3rem]">
            <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] animate-pulse">Syncing 3D System...</div>
        </div>
    );

    return (
        <div className="w-full h-[600px] cursor-grab active:cursor-grabbing">
            <Canvas
                shadows
                suppressHydrationWarning
                camera={{ position: [0, 0, 5], fov: 30 }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                <Card {...props} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
