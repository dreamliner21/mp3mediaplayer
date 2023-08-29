function playSong(songUrl) {
  var audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.src = songUrl;
  audioPlayer.play();
}

var volumeBar = document.getElementById("volumeBar");
var volumePercentage = document.getElementById("volumePercentage");

volumeBar.addEventListener("input", function() {
  var audioPlayer = document.getElementById("audioPlayer");
  audioPlayer.volume = volumeBar.value;
  volumePercentage.innerText = Math.round(volumeBar.value * 100) + "%";
});

volumeBar.addEventListener("change", function() {
  volumePercentage.innerText = (volumeBar.value * 100).toFixed(1) + "%";
});

window.addEventListener("load", function() {
  var audioPlayer = document.getElementById("audioPlayer");
  var playlist = document.getElementById("playlist");
  var firstSong = playlist.getElementsByTagName("li")[0];
  playSong(firstSong.getAttribute("onclick").replace("playSong('", "").replace("')", ""));
});