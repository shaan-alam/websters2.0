import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useThree } from "@react-three/fiber";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/scene.gltf");
  const mesh = useRef(null);
  const { viewport } = useThree();

  return (
    <mesh ref={mesh} scale={(viewport.width / 6) * 1}>
      <primitive object={gltf.scene} scale={1.7} />
    </mesh>
  );
};

export default Model;
