'use client'

import { useGLTF } from '@react-three/drei'

export function Study(props) {
  const { scene } = useGLTF('/3d/study/scene.gltf')

  return (
    <mesh {...props}>
      <primitive object={scene} />
    </mesh>
  )
}

useGLTF.preload('/3d/study/scene.gltf')
