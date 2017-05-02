var camera, scene, renderer, controls;
var geometry, material, mesh;

function init() {
  scene = new THREE.Scene();

  var width = window.innerWidth;
  var height = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
  camera.position.set(0, 200, 700);
  scene.add(camera);

  var light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(0, 1, 0); // location x, y, z
  scene.add(light);

  var light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(1, 0, 0); // location x, y, z
  scene.add(light);

  var light = new THREE.DirectionalLight(0xffffff, 2);
  light.position.set(0, 0, 1); // location x, y, z
  scene.add(light);

  //stars

  var colors = [0xffffff, 0x3ccbab, 0x15c5a6, 0x008282, 0x45ccb4, 0x00a98f, 0x00587c, 0x005d82, 0xc70f3f, 0xd26d2b, 0x9dbd17, 0x27b9cb, 0xf4d200, 0x008080, 0xa09ecc, 0xd4e35a, 0xde6842, 0xde3e50, 0xacbaff,
                0xcf9693, 0xf5af9f, 0x436abc, 0xa97ecc, 0x88edd6, 0x40e2bd, 0xfaebd7, 0xd1eadb, 0x0abab5, 0xf4e8d9, 
                0xdfa855, 0xe70000];

  var loader = new THREE.BufferGeometryLoader();
  loader.load('media/starBlender.json', function(modelGeometry) {
    for (var i = 0; i < 20000; i++) {
      var c = colors[Math.floor(Math.random()*colors.length)];
      var material = new  THREE.MeshStandardMaterial({color: c});
      var star = new THREE.Mesh(modelGeometry, material);
      star.scale.x = 20;
      star.scale.y = 20;
      star.scale.z = 20;
      star.position.x = (Math.random() - 0.5) * (Math.random() * 100000);
      star.position.y = (Math.random() - 0.5) * (Math.random() * 100000);
      star.position.z = (Math.random() - 0.5) * (Math.random() * 100000);
      star.updateMatrix();
      star.MatrixAutoUpdate = false;
      scene.add(star);
    }
  });

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);

  var date = new Date();
  var timer = date.getTime() * 0.0002;  
  renderer.render(scene, camera);
  controls.update();
}

init();
animate();