import { PresentationControls, Stage, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

interface ModelProps{
  scale:number
}
function Model(props:ModelProps) {
  const {scene} = useGLTF('/Barn_Testing.glb')
  return <primitive object={scene} {...props} />
}

function App() {

  return (
    <Canvas dpr={[1,2]} camera={{fov:45}} style={{'position':'absolute',width:'100%',height:'100%'}}>
       <color attach={'background'} args={['#101010']} />
       <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1,Math.PI /4]}>
       <Stage environment={null}>
        <Model scale={0.01}/>
       </Stage>
       </PresentationControls>
    </Canvas>
  )
}

export default App
