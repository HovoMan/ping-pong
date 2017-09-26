$(document).ready(menu);

function menu() {
    $("<div/>").attr("id", "map").appendTo("body");

    $("<img/>").attr("src", "images/nkar.jpg")
        .attr("id", "img")
        .appendTo("#map")

    var btn = $("<button/>").attr("id", "btn").text("Play").appendTo("#map");
    btn.click(function () {
        $("body").empty();
        setTimeout(game, 10);
    });


    var sound = $("<img/>").attr("id", "sound")
        .attr("src", "images/sound.png")
        .appendTo("#map").text("Sound");
        

    var clickSound = $("<audio/>").appendTo("body");
    clickSound[0].src = "sounds/click.wav";
    sound.click(function () {
        console.log($(this));
        clickSound[0].play();
        if ($(this).children("img").attr("src") == "images/sound.png") {
            $(this).children("img").attr("src", "images/soff.jpg")
        }
    });

}
