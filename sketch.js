function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let params = getURLParams();
  console.log(params.name);
}
