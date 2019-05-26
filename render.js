$(function() {



var canvas = document.getElementById('renderCanvas');

var engine = new BABYLON.Engine(canvas, true);

var scene = new BABYLON.Scene(engine);
 
  
  var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);

  camera.upVector = new BABYLON.Vector3(0.1, 0.2, 0);

  camera.attachControl(canvas, true);

  camera.setPosition(new BABYLON.Vector3(0, 0, -9.2));
  camera.inputs.clear();

  var light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(1, -1, -8), scene); // (10,0,-20) (1, -1, -6)
  //var light1 = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(1,-1,-3.5), scene);
  
 

  light.intensity = 4;
  //light1.intensity = 10;

  //light1.diffuse = new BABYLON.Color3(0, 0, 0.5);
  light.specular = new BABYLON.Color3(1.5,1.5,1.5);

  
	var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 8}, scene);
  sphere.position.x = 2.9;
  sphere.position.y = -1

  


	var materialSphere = new BABYLON.StandardMaterial("earth", scene);
	//materialSphere.diffuseTexture = new BABYLON.Texture("earth.png", scene);

   materialSphere.diffuseTexture = new BABYLON.Texture('texture.jpg', scene)
   materialSphere.specularTexture = new BABYLON.Texture("texture.jpg", scene);
   materialSphere.specularPower = 4;
   //materialSphere.emissiveTexture = new BABYLON.Texture('lights2.png', scene);
   //materialSphere.opacityTexture = new BABYLON.Texture('lights2.png',scene)

  

  function textureEarth() {

        $.ajax({
            method: 'GET',
            url: "https://api.fantalitystudios.ca/resources/heatmap",
            success: function(data) {
              console.log(data)
                let earth = new Image();
                earth.src = data.image;
                
                
               
            
            }
        });

    } 

//textureEarth()


  var gl =new BABYLON.GlowLayer('glow', scene)
  
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


  })