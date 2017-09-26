
function game() {
    $("<div/>").attr("id", "content").appendTo("body");
    $("<div/>").attr("id", "game").appendTo("#content");
    $("<div/>").attr("id", "ball").appendTo("#game");
    $("<div/>").attr("id", "pabbleA").appendTo("#game");
    $("<div/>").attr("id", "pabbleB").appendTo("#game");

    var ball = {
        speed: 3,
        x: 290,
        y: 140,
        directionX: 1,
        directionY: 1
    };

    var pA = {
        speed: 3,
        x1: $("#pabbleA").position().left,
        x2: $("#pabbleA").position().left + $("#pabbleA").width(),
        y1: $("#pabbleA").position().top,
        y2: $("#pabbleA").position().top + $("#pabbleA").height()
    };

    var pB = {
        speed: 3,
        x1: $("#pabbleB").position().left,
        x2: $("#pabbleB").position().left + $("#pabbleB").width(),
        y1: $("#pabbleB").position().top,
        y2: $("#pabbleB").position().top + $("#pabbleB").height()
    };

    $(document).ready(function () {

        setInterval(gameLoop, 1000 / 60);
    });


    function gameLoop() {
        moveBall();
    }



    function moveBall() {
        var gameWidth = parseInt($("#game").width());
        var gameHeight = parseInt($("#game").height());


        if (ball.y + ball.speed * ball.directionY > 
        (gameHeight - parseInt($("#ball").height()))) {
            ball.directionY = -1
        }


        if (ball.y + ball.speed * ball.directionY < 0) {
            ball.directionY = 1
        }


        if (ball.x + ball.speed * ball.directionX > 
        (gameWidth - parseInt($("#ball").width()))) {
            ball.directionX = -1
        }


        if (ball.x + ball.speed * ball.directionX < 0) {
            ball.directionX = 1
        }

        if (ball.x + ball.speed * ball.directionX < pA.x2) {
            if (ball.y + ball.speed * ball.directionY > pA.y1 && 
            ball.y + ball.speed * ball.directionY < pA.y2) {
                ball.directionX = 1
            }

        }
        if (ball.x + ball.speed * ball.directionX > 
        pB.x1 - parseInt($("#ball").width())) {
            if (ball.y + ball.speed * ball.directionY > pB.y1 && 
            ball.y + ball.speed * ball.directionY < pB.y2) {
                ball.directionX = -1
            }

        }


        ball.x += ball.speed * ball.directionX;
        ball.y += ball.speed * ball.directionY;


        $("#ball").css({ "left": ball.x-5, "top": ball.y-5 });
    };


}