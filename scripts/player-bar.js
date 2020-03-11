{
  //Play/Pause Song
  $('button#play-pause').on('click', function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });

//Next Song
  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;

    if (nextSongIndex >= album.songs.length) {
      return;
    }
    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

//Previous Song
  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;

    if (previousSongIndex === -1) {
      return;
    }
    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });

  //Change Time input
  $('#time-control input').on('input', function(event) {
    player.skipTo(event.target.value);
  })

  //Change volume
  $('#volume-control input').on('input', function(event) {
    player.setVolume(event.target.value);
  })

  //Song Timer
  setInterval( () => {
    if (player.playState !== 'playing') { return; }

    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text(currentTime);
    $('#time-control input').val(percent);
    $('#time-control .total-time').text(duration);
  }, 1000);
}
