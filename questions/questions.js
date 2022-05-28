const btn1=document.querySelector('.ques1 .q1 button');
const btn2=document.querySelector('.ques2 .q2 button');
const btn3=document.querySelector('.ques3 .q3 button');

const content1=document.querySelector('.ques1 .c1');
const content2=document.querySelector('.ques2 .c2');
const content3=document.querySelector('.ques3 .c3');

const i1=btn1.querySelector('i');
const i2=btn2.querySelector('i');
const i3=btn3.querySelector('i');
const hr=document.querySelectorAll('hr');

btn1.addEventListener('click',()=>{
    console.log('button clicked');
    if(i1.className==='fa fa-square-plus'){
        i1.className='fa fa-square-minus';
        content1.style='height: 70px';
        hr[0].style='display:block';
        i2.className='fa fa-square-plus';
        content2.style='height: 0px';
        hr[1].style='display:none';
        i3.className='fa fa-square-plus';
        content3.style='height: 0px';
        hr[2].style='display:none';


    }
    else{
        i1.className='fa fa-square-plus';
        content1.style='height: 0px';
        hr[0].style='display:none';

    }

})
btn2.addEventListener('click',()=>{
    console.log('button clicked');
    if(i2.className==='fa fa-square-plus'){
        i2.className='fa fa-square-minus';
        content2.style='height: 70px';
        hr[1].style='display:block';
        i1.className='fa fa-square-plus';
        content1.style='height: 0px';
        hr[0].style='display:none';
        i3.className='fa fa-square-plus';
        content3.style='height: 0px';
        hr[2].style='display:none';


    }
    else{
        i2.className='fa fa-square-plus';
        content2.style='height: 0px';
        hr[1].style='display:none';

    }

})
btn3.addEventListener('click',()=>{
    console.log('button clicked');
    if(i3.className==='fa fa-square-plus'){
        i3.className='fa fa-square-minus';
        content3.style='height: 70px';
        hr[2].style='display:block';
        i1.className='fa fa-square-plus';
        content1.style='height: 0px';
        hr[0].style='display:none';
        i2.className='fa fa-square-plus';
        content2.style='height: 0px';
        hr[1].style='display:none';



    }
    else{
        i3.className='fa fa-square-plus';
        content3.style='height: 0px';
        hr[2].style='display:none';

    }

})