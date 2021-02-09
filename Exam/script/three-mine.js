const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
			
const geometry = new THREE.ConeGeometry( 5, 20, 20 );
const material = new THREE.MeshBasicMaterial( {color: 0xff5733} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );
			
//OrbitControls
const controls = new THREE.OrbitControls( camera, renderer.domElement );
			
 //Ambiante
var light = new THREE.AmbientLight( 0x888888 );
scene.add( light );

//Directionelle
var light = new THREE.DirectionalLight( 0xfdfcf0, 1 );
light.position.set(20,10,20);
scene.add( light );
			
camera.position.z = 25;
			
//animation
const animate = function () {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
};

animate();