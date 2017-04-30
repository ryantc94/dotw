var myCamera, scene, light, renderer, controls;
var geometry, material;

var container = document.getElementById('container');

var mesh = null;
function initMesh() {
    var loader = new THREE.JSONLoader();
    loader.load('media/random.json', function(g) {
        mesh = new THREE.Mesh(g);
        scene.add(mesh);
    });
}

function init() {
  scene = new THREE.Scene();

  // skybox files
  var path = "media/skybox/";
  var format = ".jpg";
  var urls = [
    path + 'pos-x' + format, path + 'neg-x' + format,
    path + 'pos-y' + format, path + 'neg-y' + format,
    path + 'pos-z' + format, path + 'neg-z' + format
  ];

  scene.background = new THREE.CubeTextureLoader().load(urls);

  var width = window.innerWidth;
  var height = window.innerHeight;

  myCamera = new THREE.PerspectiveCamera(45, width/height, 1, 25000);
  myCamera.position.set(0, 0, 600);
  scene.add(myCamera);

  light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene.add(light);

  spotlight = new THREE.SpotLight(0xffffff, 0.8, 2000); // color, intensity, distance
  spotlight.position.set(500, 500, 500);
  spotlight.castShadow = true;
  scene.add(spotlight);

  // shadow map texture width
  spotlight.shadow.mapSize.width = 4096;
  // shadow map texture height
  spotlight.shadow.mapSize.height = 4096;
  // perspective shadow camera frustum near parameter
  spotlight.shadow.camera.near = 500;
  // perspective shadow camera frustum far parameter
  spotlight.shadow.camera.far = 2000;
  // perspective shadow camera frustum field of view
  spotlight.shadow.camera.fov = 45;

  var modelMaterial = new THREE.MeshStandardMaterial({color: 0xffffff})

  var loader = new THREE.BufferGeometryLoader();

  loader.load('media/icecream.json', function(modelGeometry) {
    mesh = new THREE.Mesh(modelGeometry, modelMaterial);
    mesh.scale.set(40, 40, 40);
    scene.add(mesh);
  });
 
  var planeMaterial = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide});
  var planeGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = Math.PI / -2;
  plane.receiveShadow = true;
  scene.add(plane);

  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
  renderer.setSize(width, height);
  controls = new THREE.OrbitControls(myCamera, renderer.domElement);

  container.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  mesh.rotation.y += 0.01;

  renderer.render(scene, myCamera);
  controls.update();
}

init();
animate();