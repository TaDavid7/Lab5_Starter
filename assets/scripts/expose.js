// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const hornImage = document.querySelector('#expose > img');
  const audio = document.querySelector('audio');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    if (horn === 'select'){ return; }
    hornImage.src = `assets/images/${horn}.svg`; //picks based on selected horn
    audio.src = `assets/audio/${horn}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);
    audio.volume = volume / 100;

    let level;
    if (volume === 0){
      level = 0;
    }
    else if (volume < 33){
      level = 1;
    }
    else if (volume < 67){
      level = 2;
    }
    else{
      level = 3;
    }

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
  });

  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
