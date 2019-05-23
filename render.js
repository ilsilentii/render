var canvas = document.getElementById('renderCanvas');

var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);
 
  
  var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

  camera.upVector = new BABYLON.Vector3(0.1, 0.2, 0);

  camera.attachControl(canvas, true);

  camera.setPosition(new BABYLON.Vector3(0, 0, -9.2));
  camera.inputs.clear();

  var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(10, 0, -20), scene);
  light.intensity = 0.8;
  light.specular = new BABYLON.Color3(0.1, 0.1, 0.1,);
  
	var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 8}, scene);
  sphere.position.x = 2.9;
  sphere.position.y = -1

	var materialSphere = new BABYLON.StandardMaterial("earth", scene);
	materialSphere.diffuseTexture = new BABYLON.Texture("earth.png", scene);

  //lightSphere = emissiveTexture = new BABYLON.Texture("earth2.png", scene);


  
	sphere.material = materialSphere;

 


  camera.rotation.y = 2

  scene.clearColor = new BABYLON.Color3(0, 0, 0);
 
 /*var url = "https://upload.wikimedia.org/wikipedia/commons/e/e9/Gradient_1024x768.jpg";
    var background = new BABYLON.Layer("back", url, scene);
  background.isBackground = true;*/
  
  engine.runRenderLoop(function () {
    scene.render();
    sphere.rotate(BABYLON.Axis.Y, -0.0005, BABYLON.Space.WORLD);
    
  });