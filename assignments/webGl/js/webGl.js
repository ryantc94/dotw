
var camera, scene, renderer, controls, spotlight;
var geometry, material, mesh;

function init() {
	scene = new THREE.Scene();
	var width = window.innerWidth;
	var height = window.innerHeight;

	camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
	camera.position.set(0, 200, 700);
	scene.add(camera);

	// var light = new THREE.DirectionalLight(0xffffff, 1);
	// light.position.set(1, 1, 1); // location x, y, z
	// scene.add(light);

	// spotlight = new THREE.SpotLight(0xffffff, 0.8, 2000); // color, intensity, distance
	// spotlight.position.set(500, 500, 500);
	// spotlight.castShadow = true;
	// scene.add(spotlight);

	// spotlight.shadow.mapSize.width = 4096;
	// spotlight.shadow.mapSize.height = 4096;
	// spotlight.shadow.camera.near = 500;
	// spotlight.shadow.camera.far = 2000;
	// spotlight.shadow.camera.fov = 45;

	geometry = new THREE.OctahedronGeometry(200, 0); // radius, additional vertices
	material = new  THREE.MeshBasicMaterial({color: 0xffff00, wireframe: true});
	mesh = new THREE.Mesh(geometry, material); // combine geometry and material
	scene.add(mesh);

	renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
	renderer.setSize(width, height);
	container.appendChild(renderer.domElement);

	renderer.render(scene, camera);
}

init();
