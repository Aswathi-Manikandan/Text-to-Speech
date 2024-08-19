let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = voice.name;
        voiceSelect.appendChild(option);
    });
};

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    speech.voice = voices[voiceSelect.value];
    window.speechSynthesis.speak(speech);
});
