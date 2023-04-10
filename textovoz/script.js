let text = document.getElementById('txt');

let submitBtn = document.getElementById('submit');
let resumeBtn = document.getElementById('resume');
let pauseBtn = document.getElementById('pause');
let audioMessage;
submitBtn.addEventListener('click', ()=> {
    //set the text
    audioMessage.text = text.value;
    //lectura de texto 
    window.speechSynthesis.speak(audioMessage);
    
});
resumeBtn.addEventListener('click', ()=> {
    pauseBtn.style.display ='block';
    resumeBtn.style.display = 'none';
    //continuar si está en pausa
    if(speechSynthesis.pause){
        speechSynthesis.resume();
    }
});
pauseBtn.addEventListener('click', ()=> {
    pauseBtn.style.display ='none';
    resumeBtn.style.display = 'block';
    //pausar si está en proceso
    speechSynthesis.speaking ? speechSynthesis.pause():'';
    }
);


window.onload = () => {
    resumeBtn.style.display='none';
    if ('speechSynthesis' in window){
        audioMessage = new SpeechSynthesisUtterance();

    } else {
        alert ('Sintetizador no soportado...')
    }
}