'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function SwordsMan(props) {
  const modelRef = useRef()
  const { nodes, materials } = useGLTF('/3d/swordsman/scene.gltf')

  // Add a state variable to control the rotation
  // const state = {
  //   rotationSpeed: 0.005, // Adjust this value for the desired rotation speed
  // }

  // useFrame(() => {
  //   // Update the rotation in the animation loop
  //   modelRef.current.rotation.y += state.rotationSpeed
  // })

  return (
    <group ref={modelRef} {...props} dispose={null}>
      <group position={[0, 0.225, 0]}>
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          geometry={nodes.Object_7.geometry}
          material={materials.back}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_8.geometry}
          material={materials.legs}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_9.geometry}
          material={materials.HEAD}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_10.geometry}
          material={materials.arms}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_11.geometry}
          material={materials.weapon}
          skeleton={nodes.Object_11.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_12.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Object_12.skeleton}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_41.geometry}
        material={materials.ground}
      />
    </group>
  )
}

useGLTF.preload('/3d/swordsman/scene.gltf')
