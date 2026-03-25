import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as Three from 'three';
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing';

// Scene component to handle the rotating cylinder
const TechScene = () => {
  // using the public mapping from Vite (public/images/MERNimg.png -> /images/MERNimg.png)
  const tex = useTexture("/images/MERNimg.png");
  const cyl = useRef<Three.Mesh>(null);
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    const handleResize = () => {
      // Use 640px as the breakpoint (matching Tailwind's sm breakpoint)
      setScale(window.innerWidth < 640 ? 0.9 : 1.5);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame((state, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta;
    }
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl} scale={scale}>
        <cylinderGeometry args={[2, 2, 2, 30, 30, true]} />
        <meshBasicMaterial map={tex} transparent side={Three.DoubleSide} />
      </mesh>
    </group>
  );
};

const TechStack3D = () => {
  return (
    <div className="w-full h-[400px] sm:h-[500px] mb-8 relative rounded-2xl overflow-hidden bg-white flex items-center justify-center">
      <Suspense fallback={<div className="text-gray-500 font-semibold animate-pulse">Loading 3D Scene...</div>}>
        <Canvas camera={{ fov: 55 }} className="w-full h-full cursor-grab active:cursor-grabbing">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1.5} />
          <TechScene />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={0.2}
              luminanceThreshold={0}
              luminanceSmoothing={0}
            />
            <ToneMapping adaptive />
          </EffectComposer>
        </Canvas>
      </Suspense>
    </div>
  );
};

export default TechStack3D;
