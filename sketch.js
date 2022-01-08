function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let character = localStorage.getItem("nftImg");
  console.log(character);
}
