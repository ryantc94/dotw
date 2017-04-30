var myCamera, scene, light, renderer, controls;
var geometry, material, mesh;

var container = document.getElementById('container');

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