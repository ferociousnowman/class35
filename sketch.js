var ball;
var database,position;
var form,player,game,playerCount,gameState=0;
game=new Game();
game.getState();
game.start();

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    
}
function draw(){
    background("white");

}
