console.log("Spotify");
let songIndex = 0;
let audioElement = new Audio('songs/audio1.mp3');
let play = document.getElementById('play');
let progress = document.getElementById('progress');
let songlist = Array.from(document.getElementsByClassName('songlist'));
let playButtons = document.querySelectorAll('.card .playbutt');
let songcard = document.querySelector('.scrollbar');

play.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        play.classList.remove('ri-play-circle-line');
        play.classList.add('ri-pause-circle-line');
    } else{
        audioElement.pause();
        play.classList.remove('ri-pause-circle-line');
        play.classList.add('ri-play-circle-line');
    }
});

audioElement.addEventListener('timeupdate' , () => {
    let prog = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progress.value = prog;
})

progress.addEventListener('change',() => {
    audioElement.currentTime = (progress.value *audioElement.duration) / 100;
})

songlist.forEach((ele,i) => {
    ele.getElementsByTagName("img")[0].src = songs[i].cover;
    ele.getElementsByTagName("span")[0].innerText = songs[i].title;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('ri-pause-circle-line');
        element.classList.add('ri-play-circle-line');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click',(e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex= parseInt(e.target.id)
        e.target.classList.remove('ri-play-circle-line');
        e.target.classList.add('ri-pause-circle-line');
        audioElement.src = `songs/audio${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        play.classList.remove('ri-play-circle-line');
        play.classList.add('ri-pause-circle-line');
    })
})


document.getElementById('prev').addEventListener('click',() => {
    if(songIndex <=0 ){
        songIndex = 0;
    }
    
    else{
        songIndex -= 1;
    }

    audioElement.src = `songs/audio${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove('ri-play-circle-line');
    play.classList.add('ri-pause-circle-line');
})

document.getElementById('next').addEventListener('click',() => {
    if(songIndex >= 6 ){
        songIndex = 0;
    }
    
    else{
        songIndex += 1;
    }

    audioElement.src = `songs/audio${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    play.classList.remove('ri-play-circle-line');
    play.classList.add('ri-pause-circle-line');
})

playButtons.forEach(button => {
    button.addEventListener('click',() => {
        console.log("Play button clicked");
        songcard.classList.remove('hidden');
    })
})



