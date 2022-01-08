let params;
function preload() {
  params = getURLParams();
  console.log(params.name);
  
}

function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(220);
  document.getElementById("myImg").src = params.name;
}
