import { useEffect, useRef } from 'react';
import './App.css';
import * as THREE from 'three';
import { Socials } from './utils/enums';

function App() {
  const campfireCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = campfireCanvasRef.current;
    if (!canvas || typeof WebGLRenderingContext === 'undefined') return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(190, 170, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 190 / 170, 0.1, 100);
    camera.position.set(0, 1.5, 6);
    camera.lookAt(0, 1, 0);

    const ambient = new THREE.AmbientLight(0xffa866, 0.35);
    const point = new THREE.PointLight(0xff7b24, 2.2, 20, 2);
    point.position.set(0, 2.4, 2.1);
    scene.add(ambient, point);

    const flameGeometry = new THREE.ConeGeometry(0.95, 2.8, 24);
    const flameMaterial = new THREE.MeshStandardMaterial({
      color: 0xff8c1a,
      emissive: 0xff5a00,
      emissiveIntensity: 1,
      roughness: 0.55,
      metalness: 0,
    });
    const flame = new THREE.Mesh(flameGeometry, flameMaterial);
    flame.position.y = 1.55;
    scene.add(flame);

    const innerFlame = new THREE.Mesh(
      new THREE.ConeGeometry(0.5, 1.8, 24),
      new THREE.MeshStandardMaterial({
        color: 0xffd66e,
        emissive: 0xffcc66,
        emissiveIntensity: 0.9,
        roughness: 0.5,
        metalness: 0,
      })
    );
    innerFlame.position.y = 1.35;
    scene.add(innerFlame);

    const logGeometry = new THREE.CylinderGeometry(0.22, 0.22, 2.6, 18);
    const logMaterial = new THREE.MeshStandardMaterial({ color: 0x5a2f15, roughness: 0.85, metalness: 0.08 });
    const logLeft = new THREE.Mesh(logGeometry, logMaterial);
    logLeft.rotation.z = Math.PI / 3.6;
    logLeft.position.set(-0.2, 0.35, 0);
    const logRight = new THREE.Mesh(logGeometry, logMaterial);
    logRight.rotation.z = -Math.PI / 3.6;
    logRight.position.set(0.2, 0.35, -0.1);
    scene.add(logLeft, logRight);

    let frameId;
    const animate = (time) => {
      const flicker = 1 + Math.sin(time * 0.01) * 0.07;
      flame.scale.set(1, flicker, 1);
      innerFlame.scale.set(1, 1 + Math.sin(time * 0.013) * 0.12, 1);
      point.intensity = 2 + Math.sin(time * 0.02) * 0.35;
      flame.rotation.y += 0.005;
      innerFlame.rotation.y -= 0.007;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      flameGeometry.dispose();
      flameMaterial.dispose();
      innerFlame.geometry.dispose();
      innerFlame.material.dispose();
      logGeometry.dispose();
      logMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="portfolio-scene">
      <div className="floating-links">
        <a className="floating-circle github-circle" href={Socials.GitHubUri} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="floating-circle linkedin-circle" href={Socials.LinkedInUri} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="floating-circle about-circle" href="/about">
          About
        </a>
      </div>
      <div className="campfire" role="img" aria-label="campfire">
        <canvas ref={campfireCanvasRef} className="campfire-canvas" />
      </div>
    </div>
  );
}

export default App;
