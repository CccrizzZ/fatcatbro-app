import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide, Mesh, TextureLoader, Vector3 } from "three";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
// import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

const FatCatLogo = () => {
  const meshRef = useRef<Mesh>(null);
  const mesh2Ref = useRef<Mesh>(null);
  const pillarRef = useRef<Mesh>(null);
  const pillar2Ref = useRef<Mesh>(null);
  const fbxModel = useLoader(FBXLoader, 'assets/fatcatbroLogo.fbx')
  const pillarModal = useLoader(OBJLoader, 'assets/pillar.obj')
  // const jp_font = useLoader(FontLoader, '../assets/851Gkktt_004.ttf')
  // const logo_geometry = new TextGeometry(
  //   'Hello three.js!',
  //   {
  //     font: jp_font,
  //     size: 80,
  //     height: 5,
  //     curveSegments: 12,
  //     bevelEnabled: true,
  //     bevelThickness: 10,
  //     bevelSize: 8,
  //     bevelOffset: 0,
  //     bevelSegments: 5
  //   }
  // )

  // textures
  const colorMap = useLoader(TextureLoader, 'assets/metalTexture/Metal048C_1K-JPG_Color.jpg')
  const normalMap = useLoader(TextureLoader, 'assets/metalTexture/Metal048C_1K-JPG_NormalGL.jpg')
  const roughnessMap = useLoader(TextureLoader, 'assets/metalTexture/Metal048C_1K-JPG_Roughness.jpg')
  const displacementMap = useLoader(TextureLoader, 'assets/metalTexture/Metal048C_1K-JPG_Displacement.jpg')
  const metalnessMap = useLoader(TextureLoader, 'assets/metalTexture/Metal048C_1K-JPG_Metalness.jpg')

  // update function
  useFrame(() => {
    if (meshRef.current) {
      // meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.02
    }
    if (mesh2Ref.current) {
      // meshRef.current.rotation.x += 0.01
      mesh2Ref.current.rotation.y -= 0.02
    }

    if (pillar2Ref.current && pillarRef.current) {
      pillarRef.current.rotation.y -= 0.01
      pillar2Ref.current.rotation.y += 0.01
    }
  })

  return (
    <>
      <mesh
        ref={pillarRef}
        geometry={(pillarModal.children[0] as Mesh).geometry}
        scale={new Vector3(0.5, 0.5, 0.5)}
        position={new Vector3(4, -3, 0)}
      >
        <meshStandardMaterial
          side={DoubleSide}
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
          displacementScale={0.0}
          metalnessMap={metalnessMap}
        />
      </mesh>
      <mesh
        ref={pillar2Ref}
        geometry={(pillarModal.children[0] as Mesh).geometry}
        scale={new Vector3(0.5, 0.5, 0.5)}
        position={new Vector3(-4, -3, 0)}
      >
        <meshStandardMaterial
          side={DoubleSide}
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
          displacementScale={0.0}
          metalnessMap={metalnessMap}
        />
      </mesh>
      <mesh
        ref={meshRef}
        geometry={(fbxModel.children[0] as Mesh).geometry}
        scale={new Vector3(2, 2, 2)}
        position={new Vector3(0, 0.2, 0)}
      >
        <meshStandardMaterial
          side={DoubleSide}
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
          displacementScale={0.0}
          metalnessMap={metalnessMap}
        />
      </mesh>
      {/* <mesh
        geometry={logo_geometry}
        scale={new Vector3(2, 2, 2)}
        position={new Vector3(0, 0.2, 0)}
      >
        <meshStandardMaterial color="blue" />
      </mesh> */}
    </>
  )
}

export default FatCatLogo