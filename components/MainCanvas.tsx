'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import { Study } from './models/Study'

export default function MainCanvas() {
  return (
    <Canvas style={{ height: 500, width: '100%', cursor: 'pointer' }}>
      <ambientLight intensity={2} />;
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <pointLight position={[0, 5, 0]} intensity={1} color="darkred" />
      <spotLight position={[-10, 10, 10]} angle={Math.PI / 8} penumbra={0.1} intensity={1} />
      <hemisphereLight intensity={0.6} groundColor="darkred" />
      <OrbitControls
        enableZoom={false} // Disable zooming
        enablePan={false} // Disable panning
        maxPolarAngle={Math.PI / 2} // Restrict camera to move only in the y-direction
        minPolarAngle={Math.PI / 2}
      />
      <Suspense fallback={null}>
        <Study scale={[0.85, 0.85, 0.85]} position={[0, -1.2, 0]} />
      </Suspense>
    </Canvas>
  )
}
