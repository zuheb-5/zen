class Game {
constructor(){

}
state(){
var gamestate = database.ref("GAMESTATE");
gamestate.on("value",function(data){
gameState = data.val()
})
}
update(game){
    database.ref("/").update({
    GAMESTATE:game
    })     
}
start(){
if(gameState === 0){
player = new Player()
player.counting()
form = new Form()
form.display()
}    
}
}