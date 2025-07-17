"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm"

function Particles({ count = 2500 }) {
  const ref = useRef()
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(count * 3), { radius: 1.5 })], [count])

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#00ffff" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

function InteractiveParticles({ mouse }) {
  const ref = useRef()
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(2000 * 3), { radius: 2 })], [])

  useFrame((state) => {
    ref.current.rotation.x = mouse.y * 0.1
    ref.current.rotation.y = mouse.x * 0.1
  })

  return (
    <group ref={ref}>
      <Points positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#8b5cf6" size={0.003} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default function ParticleSystem({ mouse = { x: 0, y: 0 } }) {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Particles />
      <InteractiveParticles mouse={mouse} />
    </Canvas>
  )
}
