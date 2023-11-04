import React, { useRef } from 'react'
import { Float, Text, Text3D } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function FloatingText({ position, text }) {
  return (
    <group position={position}>
      <Float speed={2}>
        <Text frustumCulled={false}>Welcome 👋</Text>
      </Float>
    </group>
  )
}
