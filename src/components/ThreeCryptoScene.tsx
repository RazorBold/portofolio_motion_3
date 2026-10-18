/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeCryptoSceneProps {
  interactive?: boolean;
}

export function ThreeCryptoScene({ interactive = true }: ThreeCryptoSceneProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Pre-allocated math helpers outside render loop
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.035);

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Studio Lighting
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(10, 15, 10);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x888888, 1.2);
    fillLight.position.set(-10, -10, -5);
    scene.add(fillLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x222222, 1.0);
    scene.add(hemiLight);

    // Composite 3D Cryptographic Enclave Structure (Group of 5 procedural parts)
    const enclaveGroup = new THREE.Group();

    // Part 1: Outer Icosahedron Wireframe
    const outerGeo = new THREE.IcosahedronGeometry(4.2, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      wireframe: true,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.35,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    enclaveGroup.add(outerMesh);

    // Part 2: Inner Faceted Octahedron Crystal Core
    const coreGeo = new THREE.OctahedronGeometry(2.2, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      metalness: 0.95,
      roughness: 0.2,
      flatShading: true,
      transparent: true,
      opacity: 0.75,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    enclaveGroup.add(coreMesh);

    // Part 3: Inner Core Wireframe Accent
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    });
    const coreWire = new THREE.Mesh(coreGeo.clone(), coreWireMat);
    coreWire.scale.setScalar(1.02);
    enclaveGroup.add(coreWire);

    // Part 4: Orbital Ring 1
    const ring1Geo = new THREE.TorusGeometry(5.4, 0.025, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.9,
      roughness: 0.2,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    enclaveGroup.add(ring1);

    // Part 5: Orbital Ring 2 (Counter-axis)
    const ring2Geo = new THREE.TorusGeometry(5.8, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      metalness: 0.8,
      roughness: 0.3,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    enclaveGroup.add(ring2);

    scene.add(enclaveGroup);

    // Dynamic 3D Cryptographic Particle Constellation (700 procedural nodes)
    const particleCount = 700;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 45;
      positions[i + 1] = (Math.random() - 0.5) * 35;
      positions[i + 2] = (Math.random() - 0.5) * 40;
      scales[i / 3] = Math.random() * 0.8 + 0.4;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Particle Material
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Subtle 3D Grid Plane at Bottom
    const gridHelper = new THREE.GridHelper(60, 60, 0x444444, 0x1a1a1a);
    gridHelper.position.y = -8;
    scene.add(gridHelper);

    // Pre-warm shaders
    renderer.compile(scene, camera);

    // Mouse Tracking with damping
    const handlePointerMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    if (interactive) {
      window.addEventListener('mousemove', handlePointerMove, { passive: true });
    }

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const time = clock.getElapsedTime();

      // Exponential damping for mouse camera parallax
      mouse.x += (mouse.targetX - mouse.x) * (1 - Math.exp(-4 * delta));
      mouse.y += (mouse.targetY - mouse.y) * (1 - Math.exp(-4 * delta));

      camera.position.x = mouse.x * 2.5;
      camera.position.y = mouse.y * 1.5;
      camera.lookAt(0, 0, 0);

      // Rotate Enclave components
      enclaveGroup.rotation.y = time * 0.15;
      enclaveGroup.rotation.x = Math.sin(time * 0.1) * 0.2;

      outerMesh.rotation.y = time * 0.08;
      outerMesh.rotation.z = time * 0.05;

      coreMesh.rotation.y = -time * 0.25;
      coreMesh.rotation.x = time * 0.15;

      ring1.rotation.z = time * 0.2;
      ring2.rotation.x = -time * 0.18;

      // Slowly rotate particle constellation
      particles.rotation.y = time * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handlePointerMove);
      }
      // Proper disposal
      outerGeo.dispose();
      outerMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      coreWireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      gridHelper.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
    />
  );
}
