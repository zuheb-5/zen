var database;
var playercount=0;
var gameState=0;
var player;
var form;
var game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

 game = new Game();
 game.state();
 game.start();
}

function draw(){
  background("white");
  
}

