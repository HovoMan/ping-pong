
function game() {
    $("<div/>").attr("id", "content").appendTo("body");
    $("<div/>").attr("id", "game").appendTo("#content");
    $("<div/>").attr("id", "ball").appendTo("#game");
    $("<div/>").attr("id", "pabbleA").appendTo("#game");
    $("<div/>").attr("id", "pabbleB").appendTo("#game");
    $("<div/>").attr("id", "scoreA").appendTo("#content");
    $("<div/>").attr("id", "scoreB").appendTo("#content");
    $("<p/>").attr("id", "SCA").appendTo("#scoreA");
    $("<p/>").attr("id", "SCB").appendTo("#scoreB");
    var pauseBall = false;

    var ball = {
        speed: 3,
        x: 290,
        y: 140,
        directionX: 1,
        directionY: 1
    };

    var score = {
        pA: 0,
        pB: 0
    }

    var pA = {
        speed: 3,
        x1: $("#pabbleA").position().left,
        x2: $("#pabbleA").position().left + $("#pabbleA").width(),
        y1: $("#pabbleA").position().top,
        y2: $("#pabbleA").position().top + $("#pabbleA").height(),
        update: function () {
            this.y1 = $("#pabbleA").position().top;
            this.y2 = this.y1 + $("#pabbleA").height();
        }
    };

    var pB = {
        speed: 3,
        x1: $("#pabbleB").position().left,
        x2: $("#pabbleB").position().left + $("#pabbleB").width(),
        y1: $("#pabbleB").position().top,
        y2: $("#pabbleB").position().top + $("#pabbleB").height(),
        update: function () {
            this.y1 = $("#pabbleB").position().top;
            this.y2 = this.y1 + $("#pabbleB").height();
        }
    };

    function moveBall() {
        var gameWidth = parseInt($("#game").width());
        var gameHeight = parseInt($("#game").height());

        if (pauseBall) return;

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
            ball.x = 290;
            ball.y = 140;
            pauseBall = true;
            $("#ball").animate({
                "left": ball.x,
                "top": ball.y
            }, 2000, function () { pauseBall = false; });
            score.pA = score.pA + 1;
            return;
        }


        if (ball.x + ball.speed * ball.directionX < 0) {
            ball.directionX = 1
            ball.x = 290;
            ball.y = 140;
            pauseBall = true;
            $("#ball").animate({
                "left": ball.x,
                "top": ball.y
            }, 2000, function () { pauseBall = false; });
            score.pB = score.pB + 1;
            return;           
        }

        $("#SCA").text(score.pA)
        $("#SCB").text(score.pB)
        if(score.A == 5 || scoreB == 5){
            setTimeout()
            {menu(),5000}
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
        //ball.y = 100;

        $("#ball").css({ "left": ball.x - 5, "top": ball.y - 5 });
    };

    var directions = {};
    var speed = 4;

    $('html').keyup(stop).keydown(charMovement);

    function charMovement(e) {
        directions[e.which] = true;
        console.log(directions);
    }

    function stop(e) {
        delete directions[e.which];
        console.log(directions);
    }

    function moveA(e) {
        for (var i in directions) {
            if (pA.y1 > 0 && i == 38) {
                $("#pabbleA").css("top", (pA.y1 - speed) + "px");
            }

            if (pA.y2 < $("#game").height() && i == 40) {
                $("#pabbleA").css("top", (pA.y1 + speed) + "px");
            }
        }
        pA.update();
    }


    function moveB(e) {
        for (var i in directions) {
            if (pB.y1 > 0 && i == 87) {
                $("#pabbleB").css("top", (pB.y1 - speed) + "px");
            }

            if (pB.y2 < $("#game").height() && i == 83) {
                $("#pabbleB").css("top", (pB.y1 + speed) + "px");
            }
        }
        pB.update();
    }
    setInterval(gameLoop, 1000 / 60);

    function gameLoop() {
        moveBall();
        moveA();
        moveB();
    }

}