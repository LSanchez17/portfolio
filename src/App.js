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

    const outerFlameGeometry = new THREE.SphereGeometry(0.9, 22, 22);
    const outerFlameMaterial = new THREE.MeshStandardMaterial({
      color: 0xff8c1a,
      emissive: 0xff5a00,
      emissiveIntensity: 1,
      roughness: 0.55,
      metalness: 0,
      transparent: true,
      opacity: 0.82,
    });
    const outerFlame = new THREE.Mesh(outerFlameGeometry, outerFlameMaterial);
    outerFlame.position.y = 1.55;
    outerFlame.scale.set(0.95, 1.45, 0.85);
    scene.add(outerFlame);

    const midFlameGeometry = new THREE.SphereGeometry(0.58, 20, 20);
    const midFlameMaterial = new THREE.MeshStandardMaterial({
      color: 0xffb347,
      emissive: 0xff9d3b,
      emissiveIntensity: 0.95,
      roughness: 0.5,
      metalness: 0,
      transparent: true,
      opacity: 0.86,
    });
    const midFlame = new THREE.Mesh(midFlameGeometry, midFlameMaterial);
    midFlame.position.y = 1.45;
    midFlame.position.z = 0.08;
    midFlame.scale.set(0.82, 1.28, 0.72);
    scene.add(midFlame);

    const coreFlameGeometry = new THREE.SphereGeometry(0.34, 18, 18);
    const coreFlameMaterial = new THREE.MeshStandardMaterial({
        color: 0xffd66e,
        emissive: 0xffcc66,
        emissiveIntensity: 0.9,
        roughness: 0.42,
        metalness: 0,
        transparent: true,
        opacity: 0.9,
      });
    const coreFlame = new THREE.Mesh(coreFlameGeometry, coreFlameMaterial);
    coreFlame.position.set(0, 1.34, 0.16);
    coreFlame.scale.set(0.66, 1.2, 0.58);
    scene.add(coreFlame);

    const emberGlow = new THREE.Mesh(
      new THREE.CircleGeometry(1.25, 32),
      new THREE.MeshBasicMaterial({ color: 0xff7a1a, transparent: true, opacity: 0.28 })
    );
    emberGlow.rotation.x = -Math.PI / 2;
    emberGlow.position.set(0, 0.34, 0);
    scene.add(emberGlow);

    const logGeometry = new THREE.CylinderGeometry(0.22, 0.22, 2.6, 18);
    const logMaterial = new THREE.MeshStandardMaterial({ color: 0x5a2f15, roughness: 0.85, metalness: 0.08 });
    const logLeft = new THREE.Mesh(logGeometry, logMaterial);
    logLeft.rotation.z = Math.PI / 3.6;
    logLeft.position.set(-0.2, 0.35, 0);
    const logRight = new THREE.Mesh(logGeometry, logMaterial);
    logRight.rotation.z = -Math.PI / 3.6;
    logRight.position.set(0.2, 0.35, -0.1);
    const logBack = new THREE.Mesh(logGeometry, logMaterial);
    logBack.rotation.x = Math.PI / 2.7;
    logBack.rotation.z = Math.PI / 18;
    logBack.position.set(0, 0.32, -0.32);
    scene.add(logLeft, logRight, logBack);

    const sparkCount = 14;
    const sparkXSpread = 0.55;
    const sparkZSpread = 0.42;
    const sparkPositions = new Float32Array(sparkCount * 3);
    for (let i = 0; i < sparkCount; i += 1) {
      sparkPositions[i * 3] = (Math.random() - 0.5) * sparkXSpread;
      sparkPositions[i * 3 + 1] = 0.55 + Math.random() * 1.2;
      sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * sparkZSpread;
    }
    const sparkGeometry = new THREE.BufferGeometry();
    sparkGeometry.setAttribute('position', new THREE.BufferAttribute(sparkPositions, 3));
    const sparkMaterial = new THREE.PointsMaterial({
      color: 0xffb44c,
      size: 0.06,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
    });
    const sparks = new THREE.Points(sparkGeometry, sparkMaterial);
    scene.add(sparks);

    let frameId;
    const animate = (time) => {
      const flicker = 1 + Math.sin(time * 0.01) * 0.07;
      outerFlame.scale.y = 1.45 * flicker;
      midFlame.scale.y = 1.28 * (1 + Math.sin(time * 0.013) * 0.12);
      coreFlame.scale.y = 1.2 * (1 + Math.sin(time * 0.016) * 0.15);
      outerFlame.position.x = Math.sin(time * 0.002) * 0.06;
      midFlame.position.x = Math.sin(time * 0.0024 + 0.45) * 0.045;
      coreFlame.position.x = Math.sin(time * 0.0031 + 1.1) * 0.032;
      point.intensity = 2 + Math.sin(time * 0.02) * 0.35;
      emberGlow.material.opacity = 0.24 + (Math.sin(time * 0.014) + 1) * 0.08;
      outerFlame.rotation.y += 0.005;
      midFlame.rotation.y -= 0.007;
      coreFlame.rotation.y += 0.009;
      const positions = sparkGeometry.attributes.position.array;
      for (let i = 0; i < sparkCount; i += 1) {
        const yIndex = i * 3 + 1;
        positions[yIndex] += 0.02 + Math.sin((time + i * 95) * 0.0012) * 0.003;
        if (positions[yIndex] > 2.5) {
          positions[i * 3] = (Math.random() - 0.5) * sparkXSpread;
          positions[yIndex] = 0.6;
          positions[i * 3 + 2] = (Math.random() - 0.5) * sparkZSpread;
        }
      }
      sparkGeometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      outerFlameGeometry.dispose();
      outerFlameMaterial.dispose();
      midFlameGeometry.dispose();
      midFlameMaterial.dispose();
      coreFlameGeometry.dispose();
      coreFlameMaterial.dispose();
      emberGlow.geometry.dispose();
      emberGlow.material.dispose();
      sparkGeometry.dispose();
      sparkMaterial.dispose();
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
