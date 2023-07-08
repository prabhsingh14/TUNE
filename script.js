console.log("Welcome to TUNE");

// initialise var
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgress = document.getElementById('myProgress');
let gif = document.getElementById('gif');

let songs = [
    {songName: "SELFMADE", filePath: "1.mp3", coverPath: "/covers/10.jpg"},
    {songName: "AAM JAHE MUNDE", filePath: "2.mp3", coverPath: "/covers/11.jpg"},
    {songName: "GAME", filePath: "3.mp3", coverPath: "/covers/12.jpg"},
    {songName: "WE MADE IT", filePath: "4.mp3", coverPath: "/covers/13.jpg"},
    {songName: "DOLLAR", filePath: "5.mp3", coverPath: "/covers/14.jpg"},
    {songName: "LEVELS", filePath: "6.mp3", coverPath: "/covers/15.jpg"},
    {songName: "PANJAB", filePath: "7.mp3", coverPath: "/covers/16.jpg"},
    {songName: "295", filePath: "8.mp3", coverPath: "/covers/17.jpg"}
]

//audioElement.play();

// Handle play/pause btn
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// listen
audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgress.value = progress;
});

myProgress.addEventListener('change', () => {
    audioElement.currentTime = myProgress.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) =>{
        makeAllPlays();
        songIndex = parseInt(e.target.id) - 1;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if(songIndex >= 8){
        songIndex = 0;
    }

    else{
        songIndex += 1;
    }

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if(songIndex <= 0){
        songIndex = 0;
    }

    else{
        songIndex -= 1;
    }

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})