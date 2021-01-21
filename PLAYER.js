class Player {
    constructor(){

    }
counting(){

 var  PlayerA = database.ref("PLAYERCOUNT")
 PlayerA.on("value",function(data){
  playercount = data.val()
 })
 }
 updateCount(count){
 database.ref("/").update({
 PLAYERCOUNT:count
 })     
}
update(name){
var zuheb = "player"+playercount
database.ref(zuheb).set({
    NAME:name
})
}
}