const myFace = document.getElementById("myFace");
const muteBtn = document.getElementById("mute");
const cameraBtn = document.getElementById("camera");

let muted = false;
let cameraOff = false;

let myStream;

async function getMedia() {
  try {
    myStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    myFace.srcObject = myStream;
  } catch (e) {
    console.log(e);
  }
}

getMedia();
const handleMuteClick = () => {
  if (!muted) {
    muteBtn.innerText = "UnMute";
    muted = true;
  } else {
    muteBtn.innerText = "Mute";
    muted = false;
  }
};

const handleCameraClick = () => {
  if (!cameraOff) {
    cameraBtn.innerText = "Camera Off";
    cameraOff = true;
  } else {
    cameraBtn.innerText = "Camera On";
    cameraOff = false;
  }
};

muteBtn.addEventListener("click", handleMuteClick);
cameraBtn.addEventListener("click", handleCameraClick);
