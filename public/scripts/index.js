import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.155.0/build/three.module.js';
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.155.0/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.155.0/examples/jsm/loaders/GLTFLoader.js';


const main = document.getElementById("scene");

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Use separate width and height
main.appendChild(renderer.domElement);

// Create a basic cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'green' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 15;

const lineMaterial = new THREE.LineBasicMaterial( {color: "blue"} )

const points = []
points.push(new THREE.Vector3(-5, 0, 0))
points.push(new THREE.Vector3(0, 5, 0))
points.push(new THREE.Vector3(0, 0, 5))

const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

const line = new THREE.Line(lineGeometry, lineMaterial)

scene.add(line)

const animate = () => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    //line.rotation.x -= .01;
    //line.rotation.y -= .01;

    renderer.render(scene, camera);
};

// Start the animation loop
renderer.setAnimationLoop(animate);
