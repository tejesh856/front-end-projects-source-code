const navbar=document.querySelector('.nav button');
const cross=document.querySelector('.logo button');
const sidebar=document.querySelector('aside');

navbar.addEventListener('click',()=>{
    if(sidebar.className===''){
        sidebar.className='nav-show';
    }
    else{
        sidebar.className='';
    }
})
cross.addEventListener('click',()=>{
    sidebar.className='';
})