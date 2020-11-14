
var songcount = 5;

for(var i = 1; i < songcount + 1; i++) {
	var e = document.getElementById("song" + i)
	e.addEventListener('click',playsong, [i]);
}

var song = new Audio();
var song_playing = 0;

function playsong(i){
	if (song_playing != i) {

		switch (i) {
		case 1:
		song.src = "tracks/The World We Created.wav";
		song.play();
		break;

		case 2:
		song.src = "tracks/The World We Created.wav";
		song.play();
		break;

		case 3:
		song.src = "tracks/The World We Created.wav";
		song.play();
		break;

		case 4:
		song.src = "tracks/The World We Created.wav";
		song.play();
		break;
		
		case 5:
		song.src = "tracks/The World We Created.wav";
		song.play();
		break;

		default:
		break;
		}
		song_playing = i;
	}
	else {
		song.pause();
	} 
		
}
