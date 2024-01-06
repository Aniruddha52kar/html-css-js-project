// <a href = "#" class = "menu"</a> => is ko run kare ge
// toggle menu btn 

function toggleMenu() {
    const menu = document.querySelector('.menu');
    
    //nav ka variable declear karo 

    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
    menu.classList.toggle('active');
}

// class= gallery  Change the background video when click on the gallery img

function changeVideo(name){
    const bgVideoList = document.querySelectorAll('.bg-video');
    //trailer ko call kare ge video run ke liye 

    const trailers = document.querySelectorAll('.trailer');
    const models =  document.querySelectorAll('.model');

    //javascript higher order array function forEach
    //this is easier to do data mapping

    bgVideoList.forEach(video => {
        video.classList.remove('active');
        if(video.classList.contains(name)) {
            video.classList.add('active');
        }
    }); 

    //mapping model name change 
    // div.content

    models.forEach(model => {
        model.classList.remove('active');
        if(model.classList.contains(name)) {
            model.classList.add('active');
        }
    }); 

    // mapping trailer video change 

    trailers.forEach(video => {
        video.classList.remove('active');
        if(video.classList.contains(name)) {
            video.classList.add('active');
        }
    }); 
}

  //change the playh and pause btn on click event

  function toggleplay(){
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.classList.toggle('active');
    pause.classList.toggle('active');


}

  //video play and pause 

  function pauseVideo()  {
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video=>{
        video.pause();
    });
    // a challenge for you 
    //think how to hide the video in the screen on pause
    toggleplay();
  }


     
  function playVideo()  {
    const bgVideoList = document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video=>{
        video.play();
    });
    // think how to show the video in the screen on play
    //see the intro again if you don't know what I mean 
    toggleplay();
  }


     