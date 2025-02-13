function init() {
    const container = document.getElementById('three-container');

    // Escena
    const scene = new THREE.Scene();

    // Cámara
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderizador
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Hacer el fondo transparente
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Geometría y material
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x3498db });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Añadir más geometrías
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff5733 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(2, 0, 0);
    scene.add(sphere);

    const coneGeometry = new THREE.ConeGeometry(0.5, 1, 32);
    const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x33ff57 });
    const cone = new THREE.Mesh(coneGeometry, coneMaterial);
    cone.position.set(-2, 0, 0);
    scene.add(cone);

    // Animación
    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;

        cone.rotation.x += 0.01;
        cone.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    animate();

    // Ajustar el tamaño del renderizador al cambiar el tamaño de la ventana
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

init();