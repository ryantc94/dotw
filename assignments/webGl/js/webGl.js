var myCamera, scene, light, renderer, controls;
var geometry, material, mesh;

var container = document.getElementById('container');

function init() {
  scene = new THREE.Scene();

  // // skybox files
  // var path = "images/glacier/";
  // var format = ".jpg";
  // var urls = [
  //   path + 'pos-x' + format, path + 'neg-x' + format,
  //   path + 'pos-y' + format, path + 'neg-y' + format,
  //   path + 'pos-z' + format, path + 'neg-z' + format
  // ];

  // scene.background = new THREE.CubeTextureLoader().load(urls);

  var width = window.innerWidth;
  var height = window.innerHeight;

  myCamera = new THREE.PerspectiveCamera(45, width/height, 100, 25000);
  myCamera.position.set(0, 300, 800);
  scene.add(myCamera);

  light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene.add(light);

  material = new THREE.MeshStandardMaterial({envMap: scene.background, side: THREE.DoubleSide});

  var loader = new THREE.BufferGeometryLoader();

  loader.load('media/hallows.json', function(geometry) {
    mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(80, 80, 80);
    mesh.position.y = -80;
    scene.add(mesh);
  });

  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
  renderer.setSize(width, height);
  controls = new THREE.OrbitControls(myCamera, renderer.domElement);

  container.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  if (mesh) {
    mesh.rotation.y += 0.02;
  }

  renderer.render(scene, myCamera);
  controls.update();
}

function windowResize() {
  myCamera.aspect = (window.innerWidth / window.innerHeight);
  myCamera.updateProjectionMatrix(); // updates camera
  renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
animate();

window.addEventListener('resize', windowResize);