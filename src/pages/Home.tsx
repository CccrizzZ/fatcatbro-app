import { Card } from '@nextui-org/react'
import { Canvas } from '@react-three/fiber'
import FatCatLogo from '../components/FatCatLogo'
import { Environment } from '@react-three/drei'

const Home = () => {
  return (
    <div className='w-[80%] m-auto my-16'>
      {/* <p className='text-8xl'>FATCATBRO</p> */}
      <Card className="min-h-[600px] max-w-[1000px] m-auto bg-[url('assets/temple-bg1.jpg')] bg-center">
        <div className="h-full">
          <Canvas style={{ height: "600px" }}>
            <ambientLight intensity={0.2} />
            <directionalLight color="red" position={[0, 0, 5]} />
            {/* <OrbitControls /> */}
            <FatCatLogo />
            <Environment preset="city" />
          </Canvas>
        </div>
      </Card>
    </div>
  )
}

export default Home