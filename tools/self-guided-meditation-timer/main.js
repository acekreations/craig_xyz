var audioFiles = [
  {
    name: "event horizon",
    file: "assets/audio/event-horizon.mp3"
  }
];
var duration = 10;
var audioFile = audioFiles[0];
var timeDelta = 0;
var meditationRunning = false;

function start(player, playerSource) {
  playerSource.src = audioFile.file;
  player.load();
  player.volume = 1;
  meditationRunning = true;
  player.play();
  timer(player);
}

function fadeVolumeDown(player) {
  i = setInterval(function() {
    if (player.volume > 0.1) {
      player.volume = player.volume - 0.1;
    } else {
      clearInterval(i);
    }
  }, 50);
}

function msToTime(duration) {
  //   var milliseconds = parseInt((duration % 1000) / 100),
  (seconds = Math.floor((duration / 1000) % 60)),
    (minutes = Math.floor((duration / (1000 * 60)) % 60)),
    (minutes = minutes < 10 ? "0" + minutes : minutes);
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return minutes + ":" + seconds;
}

function timer(player) {
  timeDelta = duration * 60 * 1000;
  var timer = setInterval(function() {
    if (timeDelta <= 1000) {
      fadeVolumeDown(player);
    }
    if (timeDelta == 0) {
      clearInterval(timer);
      player.pause();
      meditationRunning = false;
      document.getElementById("play-btn").style.display = "block";
      document.getElementById("stop-btn").style.display = "none";
    } else {
      timeDelta -= 1000;
      document.getElementById("countdown-text").textContent = msToTime(
        timeDelta
      );
    }
  }, 1000);
}

function stop(player) {
  fadeVolumeDown(player);
  setTimeout(function() {
    timeDelta = 0;
  }, 500);
}

window.onload = function() {
  var player = document.getElementById("player");
  var playerSource = document.getElementById("player-source");

  var playBtn = document.getElementById("play");
  playBtn.addEventListener("click", function() {
    if (meditationRunning) {
      stop(player);
    } else {
      document.getElementById("play-btn").style.display = "none";
      document.getElementById("stop-btn").style.display = "block";
      start(player, playerSource);
    }
  });
};
