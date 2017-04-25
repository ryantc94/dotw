
var camera, scene, renderer, controls, spotlight;
var geometry, material, mesh;

function init() {
	scene = new THREE.Scene();
	
	var path = "media/mp_orbital/";
  	var format = ".png";
  	var urls = [
    	path + 'pos-x' + format, path + 'neg-x' + format,
    	path + 'pos-y' + format, path + 'neg-y' + format,
    	path + 'pos-z' + format, path + 'neg-z' + format
  	];

  	scene.background = new THREE.CubeTextureLoader().load(urls);

  	var width = window.innerWidth;
	var height = window.innerHeight;

	camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
	camera.position.set(0, 200, 700);
	scene.add(camera);

	var light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(1, 1, 1); // location x, y, z
	scene.add(light);

	// spotlight = new THREE.SpotLight(0xffffff, 0.8, 2000); // color, intensity, distance
	// spotlight.position.set(500, 500, 500);
	// spotlight.castShadow = true;
	// scene.add(spotlight);

	// spotlight.shadow.mapSize.width = 4096;
	// spotlight.shadow.mapSize.height = 4096;
	// spotlight.shadow.camera.near = 500;
	// spotlight.shadow.camera.far = 2000;
	// spotlight.shadow.camera.fov = 45;

	geometry = new THREE.SphereGeometry(100, 20, 20); // radius, additional vertices x and y
	material = new  THREE.MeshBasicMaterial({color: 0xffff00, wireframe: true});
	mesh = new THREE.Mesh(geometry, material); // combine geometry and material
	mesh.position.y = 120;
	scene.add(mesh);

	var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10); // x, y, vertices
	var floorMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.rotation.x = Math.PI / 2; // rotate to lay flat
	scene.add(floor);

	renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
	renderer.setSize(width, height);
	controls = new THREE.OrbitControls(camera, renderer.domElement);

	document.body.appendChild(renderer.domElement);
	renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

init();
animate();
