function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload()
{
    img = loadImage("WIN_20211227_17_23_52_Pro.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill('red');
    text(tv, 150, 240 );
    nofill();
    stroke('red')
rect(150, 240, 450, 600);
}