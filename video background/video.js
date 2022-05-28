const slider=document.querySelector('.slider');
const pause=document.querySelector('.pause');
const play=document.querySelector('.play');
const video=document.querySelector('video');
const loader=document.querySelector('.loader');

window.addEventListener('load',()=>{
    this.setTimeout(loading,3000);
    
    
})
function loading(){
    loader.style='display:none';

}
pause.addEventListener('click',()=>{
    slider.classList.add('slide-pause');
    video.pause();
})
play.addEventListener('click',()=>{
    slider.classList.remove('slide-pause');
    video.play();
})
slider.addEventListener('click',()=>{
    if(slider.className==='slider slide-pause'){
        slider.classList.remove('slide-pause');
        video.play();
    }
    else{
        slider.classList.add('slide-pause');
        video.pause();
    }
})

