'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { FloatingText } from './FloatingText'
import { Study } from './Study'
import { SwordsMan } from './SwordsMan'

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
      {/* <FloatingText position={[0, 3, 0]} text="Hello" /> */}
      <Suspense fallback={null}>
        {/* <SwordsMan scale={[2, 2, 2]} position={[5, -2, 1]} rotation={[0, -1, 0]} /> */}
        <Study scale={[0.8, 0.8, 0.8]} position={[0, -1, 0]} />
      </Suspense>
    </Canvas>
  )
}
