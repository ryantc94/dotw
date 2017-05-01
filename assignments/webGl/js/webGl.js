var camera, scene, light, renderer, controls;
var geometry, material, mesh;

var container = document.getElementById('container');

function init() {
  scene = new THREE.Scene();
  var width = window.innerWidth;
  var height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
  camera.position.set(0, 200, 700);
  scene.add(camera);

  var modelMaterial = new THREE.MeshStandardMaterial({color: 0xffffff});
  var loader = new THREE.BufferGeometryLoader();

  loader.load('media/iceCream.json', function(modelGeometry) {
    var modelMesh = new THREE.Mesh(modelGeometry, modelMaterial);
    modelMesh.scale.set(40, 40, 40);
    scene.add(modelMesh);
  });

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  document.body.appendChild(renderer.domElement);
}

init();

