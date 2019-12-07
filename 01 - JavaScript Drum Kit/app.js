let audios = document.querySelectorAll("audio");
let divs = document.querySelectorAll(".key");

divs_dict = {};

for (let div of divs) {
  divs_dict[div.getAttribute("data-key")] = div;
}

document.addEventListener("keydown", function(event) {
  for (let audio of audios) {
    if (audio.getAttribute("data-key") === String(event.keyCode)) {
      audio.currentTime = 0;
      audio.play();
      divs_dict[event.keyCode].classList.add("playing");
    }
  }
});

document.addEventListener("keyup", function(event) {
  for (let audio of audios) {
    if (audio.getAttribute("data-key") === String(event.keyCode)) {
      divs_dict[event.keyCode].classList.remove("playing");
    }
  }
});
