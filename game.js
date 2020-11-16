let buttonColours = ["red", "blue", "green", "yellow"]

let gamePattern = []
let userClickedPattern = []

let started = false
let level = 0

$(document).keypress(function(e) {
    if (!started) {
        $("#level-title").text(`level ${level}`);
        nextSequence()
        started = true
    }
});

$('.btn').click(function(e) {

    userChosenColour = this.id;
    userClickedPattern.push(userChosenColour)

    playSound(userChosenColour);
    animatePress(userChosenColour)

    checkAnswer(userClickedPattern.length - 1)
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(() => {
                nextSequence()
            }, 1000);
        }

    } else {
        playSound('wrong')
        $('body').addClass('game-over').delay(200).queue(function() {
            $(this).removeClass("game-over").dequeue();
        });
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver()
    }
}




function nextSequence() {
    userClickedPattern = []
    level++;
    $("#level-title").text(`level ${level}`);
    randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour)

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour)
}

function animatePress(currentColour) {
    $(`.${currentColour}`).addClass('pressed').delay(200).queue(function() {
        $(this).removeClass("pressed").dequeue();
    });
}


function playSound(name) {
    audio = new Audio(`/sounds/${name}.mp3`)
    audio.play()
}

function startOver() {
    level = 0
    gamePattern = []
    started = 0
}