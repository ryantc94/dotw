var myCamera, scene, light, renderer, controls;
var geometry, material, mesh;

var container = document.getElementById('container');

function init() {
  scene = new THREE.Scene();

  // skybox files
  var path = "images/glacier/";
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

  loader.load('media/fireMonkey.json', function(modelGeometry) {
    var modelMesh = new THREE.Mesh(modelGeometry, modelMaterial);
    modelMesh.scale.set(40, 40, 40);
    scene.add(modelMesh);
  });
  
  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
  renderer.setSize(width, height);

  container.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  // Animate camera around sphere
  var date = new Date();
  var timer = date.getTime() * 0.0002;
  myCamera.position.x = 600 * Math.cos(timer); // 600 is z position of camera
  myCamera.position.z = 600 * Math.sin(timer);
  myCamera.lookAt(scene.position);
  myCamera.updateMatrixWorld();

  renderer.render(scene, myCamera);
}

init();
animate();