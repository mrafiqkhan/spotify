const getAudio = document.querySelector(".hidden");

let audioObj = document.createElement("audio");
audioObj.src = getAudio.innerText;
// audioObj.play();
console.log(audioObj.duration);
// let audioSrc = getAudio.childNodes[1].getAttribute("src");
// // let getAudio.
// let getAudioObj = new Audio(audioSrc);


// getAudioObj.addEventListener("loadeddata", function () {

// });
// let song = ''