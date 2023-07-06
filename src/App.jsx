import Experience from './Experience'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <Canvas>
      <color attach="background" args={['aliceblue']} />
      <Experience />
      <OrbitControls />
    </Canvas>
  )
}

export default App
