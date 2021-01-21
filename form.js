class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("CAR RACERS");
        title.position(130,0);

        var input = createInput("NAME");
        input.position(130,160);

        var button = createButtun("PLAY");
        button.position(250,200);
        button.mousePressed(function(){
        input.hide()
        button.hide()
        var name = input.value()
        playercount+=1
        player.update(name);
        player.updateCount(playercount);

        var greet = createElement("h3");
        greet.html("HELLO! "+name+" LETS GO!");
        greet.position(130,160)
        })

    }
}