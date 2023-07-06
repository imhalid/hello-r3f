import {
  OrbitControls,
  Text3D,
  Center,
  useMatcapTexture,
} from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const torusGeometry = new THREE.TorusGeometry(1, 0.45, 32, 100)
const material = new THREE.MeshMatcapMaterial()

const Experience = () => {
  const donuts = useRef([])
  const [matcapTexture] = useMatcapTexture('C8D1DC_575B62_818892_6E747B', 256)

  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace
    matcapTexture.needsUpdate = true

    material.matcap = matcapTexture
    material.needsUpdate = true
  }, [])

  useFrame((state, delta) => {
    for (const donut of donuts.current) {
      donut.rotation.x += delta * 0.2
      donut.rotation.y += delta * 0.2
      donut.rotation.z += delta * 0.2
    }
  })
  return (
    <>
      {/* <Perf position='top-left' /> */}
      <OrbitControls makeDefault />

      <Center>
        <Text3D
          font='./font/Segoe_UI_Bold.json'
          size={0.75}
          height={0.25}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.15}
          bevelSize={0.03}
          bevelOffset={0}
          bevelSegments={5}
        >
          HELLO R3F
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>
      {[...Array(100)].map((_, index) => (
        <mesh
          ref={element => (donuts.current[index] = element)}
          key={index}
          material={material}
          geometry={torusGeometry}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        />
      ))}
    </>
  )
}

export default Experience
