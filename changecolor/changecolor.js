

const btn=document.querySelector('input');
const colorname=document.querySelector('h1 span');
const main=document.querySelector('.main');
colors1=['red','green','Rgba(133,122,200)','rgb(241, 80, 37)'];
function random(min,max) {
    let step1=max-min+1;
    let step2=Math.random()*step1;
    let result=Math.floor(step2);
    return result;
}
btn.addEventListener('click',()=>{
    let index=random(0,colors1.length-1);

    main.style=`background-color:${colors1[index]}`;
    colorname.innerText=`${colors1[index]}`;
    

})

