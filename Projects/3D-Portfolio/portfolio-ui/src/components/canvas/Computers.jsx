import { Suspense,useEffect , useState } from "react";
import {Canvas} from '@react-three/fiber';
import {OrbitControls,Preload ,useGLTF} from '@react-three/drei';


// go to react three fiber docs for detail information
const Computers = () => {

  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15}  groundColor={'black'}/>
    </mesh>
  )
}

export default Computers