var camera, scene, renderer, controls, spotlight;
var geometry, material, mesh;

function init() {
  scene = new THREE.Scene();
  var width = window.innerWidth;
  var height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
  camera.position.set(0, 200, 700);
  scene.add(camera);

  var light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1); // location x, y, z
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

  // view shadow camera
  // var helper = new THREE.CameraHelper(spotlight.shadow.camera);
  // scene.add(helper);

  var modelMaterial = new THREE.MeshStandardMaterial({color: 0xffffff})

  var loader = new THREE.BufferGeometryLoader();


  //http://stackoverflow.com/questions/28203846/three-js-blender-is-only-exporting-a-single-object
  //if this works you have to click geometry and click faceMaterials then switch back to BufferedGeometry
  loader.load('media/test2.json', function(modelGeometry) {
    var modelMesh = new THREE.Mesh(modelGeometry, modelMaterial);
    modelMesh.scale.set(40, 40, 40);
    scene.add(modelMesh);
  });
 

  var planeMaterial = new THREE.MeshStandardMaterial({color: 0xffffff, side: THREE.DoubleSide});
  var planeGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = Math.PI / -2;
  plane.receiveShadow = true;
  scene.add(plane);

  // scene.fog = new THREE.Fog(0xffffff, 1, 1000); // hex, near, far
  // scene.fog = new THREE.FogExp2(0xffffff, 0.002); // hex color, density

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}

init();
animate();