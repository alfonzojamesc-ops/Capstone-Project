import React from 'react';
import { Canvas } from '@react-three/fiber/native';
import { OrbitControls } from '@react-three/drei';

export default function ThreeScene() {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <mesh rotation={[0.4, 0.2, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="hotpink" />
            </mesh>
            <OrbitControls />
        </Canvas>
    );
}
