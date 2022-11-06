import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, useProgress } from '@react-three/drei';
import { Bulbasaur } from './Bulbasaur';

const Loader = () => {
  const { progress } = useProgress();
  return <Html center>{progress} %</Html>;
};

export const Scene = () => {
  return (
    <Canvas
      style={{
        width: '250px',
        alignSelf: 'center',
        backgroundColor: 'transparentt',
      }}
      camera={{ position: [100, 200, 200], zoom: 7 }}
    >
      <Suspense fallback={<Loader />}>
        <pointLight position={[5, 5, 1]} /> <ambientLight intensity={0.55} />{' '}
        <ambientLight intensity={0.2} /> <directionalLight intensity={0.4} />{' '}
        <Bulbasaur />
        <OrbitControls
          autoRotate
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.8}
          maxPolarAngle={Math.PI / 2.8}
        />
      </Suspense>
    </Canvas>
  );
};
export default Scene;
