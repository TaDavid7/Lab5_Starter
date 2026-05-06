// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textarea = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const faceImage = document.querySelector('img');

  function populateVoices() {
    const voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default){ 
        option.textContent += ' -- DEFAULT'; 
      }
      option.setAttribute('data-name', voice.name);
      option.setAttribute('data-lang', voice.lang);
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  speechSynthesis.onvoiceschanged = populateVoices;

  button.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(textarea.value);
    const selectedName = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const voices = speechSynthesis.getVoices();
    utterThis.voice = voices.find((v) => v.name === selectedName);

    utterThis.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });
    utterThis.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });

    speechSynthesis.speak(utterThis);
  });
}
