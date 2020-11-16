let exec = false;
let userArr = []
let gameArr = []
let level = 1
let fail = 0;
let z = 0;
let l = 0


$("body").keypress(function() {
    if (!exec) {
        exec = true
        userArr = []
        gameArr = []
        level = 1
        fail = 0;
        startGame()
    }
});

function startGame() {
    $("#level-title").text(`level ${level}`);
    fail = 0
    let gameArr = generateRandomBtn(gameArr)
    play(gameArr)
}

function generateRandomBtn(gameArr) {
    rand = Math.ceil(Math.random() * 4)
    if (rand == 1) {
        gameArr.push('green')
    } else if (rand == 2) {
        gameArr.push('red')
    } else if (rand == 3) {
        gameArr.push('yellow')
    } else if (rand == 4) {
        gameArr.push('blue')
    }
    anime(gameArr)
    return gameArr
}

/* 
function next(gameArr) {
    generateRandomBtn(gameArr)
    setTimeout(anime(gameArr), 2000)
    play(gameArr)
}
 */
function anime(arr) {
    let chosed = arr[arr.length - 1];
    $(`.${chosed}`).addClass('pressed').delay(200).queue(function() {
        $(this).removeClass("pressed").dequeue();
    });
    audio = new Audio(`/sounds/${chosed}.mp3`)
    audio.play()

}

/* function play(gameArr) {
    if (z != 0 || fail != 0) return
    z = 0;
    console.log(gameArr);
    userArr = []
    $(".btn").click(function(e) {
        clicked = this.id;
        console.log(gameArr[z]);
        console.log(clicked);
        if (clicked == gameArr[z]) {
            userArr.push(clicked);
            anime(userArr)
        } else if (gameArr[z] != clicked) {
            $("#level-title").text("Game Over, Press Any Key to Restart");
            audio = new Audio('/sounds/wrong.mp3');
            audio.play();
            gameOver()
            return
        } else return

            z++;

        if (z == gameArr.length) {
            z = 0;
            userArr = []
            setTimeout(function() {
                ++level;
                $("#level-title").text(`level ${level}`);
                generateRandomBtn(gameArr)
                return
            }, 1000)
        }
    })
    return
}
 */


function play(arr) {
    console.log(arr);
    l = 0
    userArr = []
    console.log(l);
    $('.btn').click(function(e) {
        clicked = this.id;
        if (clicked == arr[l]) {
            userArr.push(clicked)
            anime(userArr)
            l++;
        } else if (clicked != arr[l]) {
            $("#level-title").text("Game Over, Press Any Key to Restart");
            audio = new Audio('/sounds/wrong.mp3');
            audio.play();
            gameOver()

        }


        if (l == gameArr.length) {
            l = 0;
            userArr = []
            setTimeout(function() {
                ++level;
                $("#level-title").text(`level ${level}`);
                generateRandomBtn(gameArr)
                return
            }, 1000)
        }
    })


    /* if (l == arr.length) {
            setTimeout(function() {
                ++level;
                $("#level-title").text(`level ${level}`);
                generateRandomBtn(gameArr)
                return
            }, 1000)
        }
    }); */

}

function gameOver() {
    exec = false;
    fail = 1
    gameArr = []

}

/*  */