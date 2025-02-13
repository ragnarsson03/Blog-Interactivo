function initEconomia() {
    const container = document.getElementById('three-container-economia');

    // Escena
    const scene = new THREE.Scene();

    // Cámara
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderizador
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // Hacer el fondo transparente y suavizar los bordes
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Luces
    const ambientLight = new THREE.AmbientLight(0x404040); // Luz ambiental suave
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Geometría y material
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xff5733, metalness: 0.5, roughness: 0.5 });
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder);

    // Animación
    function animate() {
        requestAnimationFrame(animate);

        cylinder.rotation.x += 0.01;
        cylinder.rotation.y += 0.01;

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

initEconomia();