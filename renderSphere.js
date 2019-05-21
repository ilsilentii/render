var canvas = document.getElementById('renderCanvas');

var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);
 
  // Creating a camera looking to the zero point (0,0,0), a light, and a sphere of size 1
  var camera = new BABYLON.ArcRotateCamera("Camera", 1, 0.8, 10, new BABYLON.Vector3(0, 0, 0), scene);
  var light0 = new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 0, 10), scene);
  //var origin = BABYLON.Mesh.CreateSphere("origin", 10, 1.0, scene);

  BABYLON.SceneLoader.Append("./", "cube.gltf", scene, function (scene) {
    scene.createDefaultCameraOrLight(true, true, true);
    scene.activeCamera.alpha += Math.PI;
	});

  scene.clearColor = new BABYLON.Color3(0, 0, 0);
 
  // Attach the camera to the scene
  scene.activeCamera.attachControl(canvas);
 
  // Once the scene is loaded, just register a render loop to render it
  engine.runRenderLoop(function () {
    scene.render();
  });