var l = document.querySelectorAll("button").length;

//Detecting Button pressed
for (var i = 0; i < l; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var clickedButton = this.innerHTML;
        getSound(clickedButton);
        buttonAnimation(clickedButton);
    });

}

//Detecting Keyboard pressed
// the event variable here get whole information from pressed keyboard and i used event.key to get
//just the string of pressed key
//https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
document.addEventListener("keydown", function (event) {
    getSound(event.key);
    buttonAnimation(event.key);
});


//Function to get sound
function getSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;       
        case "a":
            var kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break;       
        case "s":
            var snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;       
        case "d":
            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;       
        case "j":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break;       
        case "k":
            var tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
            break;       
        case "l":
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;       
        
        default: console.log(clickedButton);
    }
}

function buttonAnimation(flash) {
    var activeOne = document.querySelector("." + flash);
    activeOne.classList.add("pressed");
    setTimeout(function() {
        activeOne.classList.remove("pressed");
    }, 100);
}