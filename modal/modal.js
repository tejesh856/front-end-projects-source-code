const modalbtn=document.querySelector('.head .banner button');
const cross =document.querySelector('.overlay .overban button');
const overlay=document.querySelector('.overlay');
console.log(modalbtn);
console.log(cross);
console.log(overlay);

modalbtn.addEventListener('click',()=>{
    overlay.className='overlay show';

})
cross.addEventListener('click',()=>{
    overlay.className='overlay';
})