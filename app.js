import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js';

var renderizador, camara, escena;

function crearEscena() {
    escena = new THREE.Scene();
}

function crearRenderizador() {
    renderizador = new THREE.WebGLRenderer({ antialias: true });
    renderizador.setSize(window.innerWidth, window.innerHeight);
    renderizador.setClearColor(0x000000);
    document.body.appendChild(renderizador.domElement)
}

function render() {
    renderizador.render(escena, camara);
    requestAnimationFrame(render);
}

function crearCamara() {
    camara = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    var controls = new OrbitControls(camara, renderizador.domElement);
    camara.name = "camara";
    camara.position.set(0, 10, 100);
    controls.update();

}

function crearCubo() {
    var geometry = new THREE.BoxGeometry(10, 10, 10, 10, 10, 10);
    var material = new THREE.MeshBasicMaterial({ color: 0xFFFFF, wireframe: true });
    var cubo = new THREE.Mesh(geometry, material);
    var cubo2 = new THREE.Mesh(geometry, material);
    var cubo3 = new THREE.Mesh(geometry, material);
    cubo.name = "cubo";
    cubo.position.x = -20;
    cubo3.position.x = -10;
    cubo3.position.y = 10;
    escena.add(cubo, cubo2, cubo3);
}

function crearDona() {
    var torusGeometria = new THREE.TorusGeometry(40, 5, 100, 100);
    var torusMaterial = new THREE.MeshNormalMaterial({
        wireframe: true
    });
    var torus = new THREE.Mesh(torusGeometria, torusMaterial);
    torus.name = "torus";
    torus.position.y = 7
    escena.add(torus);
}
let esfera = () => {
    const geometry = new THREE.SphereGeometry(15, 35, 35);
    const geometry2 = new THREE.SphereGeometry(8, 6, 35);
    const geometry3 = new THREE.SphereGeometry(2, 6, 35);
    const geometry4 = new THREE.SphereGeometry(1, 6, 35);
    const material = new THREE.MeshNormalMaterial({ color: 0xFF000 });
    const material2 = new THREE.MeshBasicMaterial({ color: 0x00000 });
    const sphere = new THREE.Mesh(geometry, material);
    const sphere2 = new THREE.Mesh(geometry2, material);
    const sphere3 = new THREE.Mesh(geometry3, material2);
    const sphere4 = new THREE.Mesh(geometry4, material2);
    sphere2.position.y = 20
    sphere3.position.y = 22
    sphere3.position.z = 7
    sphere3.position.x = -1
    sphere4.position.y = 20
    sphere4.position.z = 7
    sphere4.position.x = 2
    escena.add(sphere, sphere2, sphere3, sphere4);
}
let cilindro = () => {
    const geometry = new THREE.CylinderGeometry(0.4, 0.4, 20, 3);
    const geometry2 = new THREE.CylinderGeometry(0.4, 0.4, 15, 3);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cylinder = new THREE.Mesh(geometry, material);
    const cylinder2 = new THREE.Mesh(geometry2, material);
    cylinder.position.y = 23
    cylinder.position.x = 1.5
    cylinder2.position.y = 23
    cylinder2.position.x = 0
    escena.add(cylinder, cylinder2);
}

function init() {
    crearEscena();
    crearRenderizador();
    crearCamara();
    //crearCubo();
    crearDona();
    esfera();
    cilindro();
    render();
}
init();