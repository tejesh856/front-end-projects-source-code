
const hex=document.querySelector('a')[1];
const btn=document.querySelector('input');
const main=document.querySelector('.main');
const colorname=document.querySelector('h1 span');
colors2=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
function random(min,max) {
    let step1=max-min+1;
    let step2=Math.random()*step1;
    let result=Math.floor(step2);
    return result;
}
btn.addEventListener('click',()=>{
    let hex='#';
    for(let i=0;i<6;i++){
        hex+=colors2[random(0,colors2.length-1)];
    }
    

    main.style=`background-color:${hex}`;
    colorname.innerText=hex;
    

})