let btns = document.querySelectorAll(".drum");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let butt = this.innerHTML;
        decision(butt);
        buttonAnnimation(butt);
    });
}
document.addEventListener("keydown", function(event) {
    let kpress = event.key;
    decision(kpress);
    buttonAnnimation(kpress);
})

function decision(letter) {
    switch (letter) {
        case "w":
            let audio1 = new Audio("./tom-0.mp3");
            audio1.play();
            break;
        case "a":
            let audio2 = new Audio("./tom-1.mp3");
            audio2.play();
            break;
        case "s":
            let audio3 = new Audio("./tom-2.mp3");
            audio3.play();
            break;
        case "d":
            let audio4 = new Audio("./tom-3.mp3");
            audio4.play();
            break;
        case "j":
            let audio5 = new Audio("./tom-4.mp3");
            audio5.play();
            break;
        case "k":
            let audio6 = new Audio("./tom-5.mp3");
            audio6.play();
            break;
        case "l":
            let audio7 = new Audio("./tom-6.mp3");
            audio7.play();
            break;
        default:
            console.log("Wrong key pressed");
    }
}

function buttonAnnimation(key) {
    currentKey = document.querySelector("." + key);
    currentKey.classList.add("pressed");
    setTimeout(function() {
        currentKey.classList.remove("pressed");
    }, 100)
}
