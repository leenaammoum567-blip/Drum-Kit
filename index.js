var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        var button = this.innerHTML;

        if (button == 'w') {
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            this.style.backgroundImage = "url('images/crash.png')";
        }

        if (button == 'a') {
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            this.style.backgroundImage = "url('images/kick.png')";
        }

        if (button == 's') {
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            this.style.backgroundImage = "url('images/snare.png')";
        }

        if (button == 'd') {
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            this.style.backgroundImage = "url('images/tom1.png')";
        }

        if (button == 'j') {
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            this.style.backgroundImage = "url('images/tom2.png')";
        }

        if (button == 'k') {
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            this.style.backgroundImage = "url('images/tom3.png')";
        }

        if (button == 'l') {
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            this.style.backgroundImage = "url('images/4.png')";
        }

    });
}
