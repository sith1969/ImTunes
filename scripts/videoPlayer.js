export const videoPlayerInit= () => {
   // console.log("Videoo");
//    video-player
// video-button__play
// video-button__stop
//  video-time__passed
// video-progress
// video-time__total
 const videoPlayer=document.querySelector('.video-player');
 const videoButtonPlay=document.querySelector('.video-button__play');
 const videoButtonStop=document.querySelector('.video-button__stop');
 const videoProgress=document.querySelector('.video-progress');
 const videoTimePassed=document.querySelector('.video-time__passed');
 const videoTimeTotal=document.querySelector('.video-time__total');

 const toogleIcon = () =>{
     if (videoPlayer.paused) {
         videoButtonPlay.classList.remove('fa-pause');
         videoButtonPlay.classList.add('fa-play');
     } else {
        videoButtonPlay.classList.add('fa-pause');
        videoButtonPlay.classList.remove('fa-play');
     }

 };

 const tooglePlay =() =>{
    
        if (videoPlayer.paused){
           videoPlayer.play();
        } else {
           videoPlayer.pause();
        }
   
      //  toogleIcon();
    
 };

 const stopPlay =() =>{
    
     videoPlayer.pause();
     videoPlayer.currentTime =0;
        

};

//условие ? (ВЕРНО) : (ЛОЖЬ)
const addZero = n => n<10 ? '0' + n : n ; // return не нужно потому что в одну строку

 videoPlayer.addEventListener('click', tooglePlay);
 videoButtonPlay.addEventListener('click', tooglePlay);

 videoPlayer.addEventListener('play', toogleIcon);
 videoPlayer.addEventListener('pause', toogleIcon);

videoButtonStop.addEventListener('click', stopPlay);

videoPlayer.addEventListener('timeupdate',()=>{
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;

     videoProgress.value = (currentTime /duration) *100;

    let minutePassed =Math.floor (currentTime/60);
    let secondsPassed =Math.floor(currentTime % 60);

    let minuteTotal=Math.floor (duration/60);
    let secondsTotal =Math.floor(duration % 60);

    //videoTimePassed.textContent = addZero(minutePassed) + ':' + addZero(secondsPassed); .. и так 
    videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`; //  и так можно 
    videoTimeTotal.textContent = addZero(minuteTotal)+ ':' + addZero(secondsTotal);

});

videoProgress.addEventListener('change',()=>{
    const duration = videoPlayer.duration;
    const value = videoProgress.value;

    videoPlayer.currentTime =(value*duration) /100;
});

};