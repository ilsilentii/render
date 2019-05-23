var canvas = document.getElementById('renderCanvas');

var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);
 
  // Creating a camera looking to the zero point (0,0,0), a light, and a sphere of size 1
  var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

  camera.upVector = new BABYLON.Vector3(0.1, 0.2, 0);

  camera.attachControl(canvas, true);

  camera.setPosition(new BABYLON.Vector3(0, 0, -9.2));
  camera.inputs.clear();
  var light0 = new BABYLON.HemisphericLight("Omni", new BABYLON.Vector3(1, 1, 0), scene);
  //var origin = BABYLON.Mesh.CreateSphere("origin", 10, 1.0, scene);

 

	var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 8}, scene);
  sphere.position.x = 2.9;
  sphere.position.y = -1

	var materialSphere = new BABYLON.StandardMaterial("earth", scene);
	materialSphere.diffuseTexture = new BABYLON.Texture("earth.png", scene);
	sphere.material = materialSphere;


  camera.rotation.y = 2

  scene.clearColor = new BABYLON.Color3(0, 0, 0);
 
  
 
  // Once the scene is loaded, just register a render loop to render it
  engine.runRenderLoop(function () {
    scene.render();
    //sphere.rotation.y += -0.0005;
    sphere.rotate(BABYLON.Axis.Y, -0.0005, BABYLON.Space.WORLD);
    
    /*var url = "https://upload.wikimedia.org/wikipedia/commons/e/e9/Gradient_1024x768.jpg";
    var background = new BABYLON.Layer("back", url, scene);
  background.isBackground = true;*/

  });