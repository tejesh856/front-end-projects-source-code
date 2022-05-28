const input=document.querySelector('#text-box');
const items=document.querySelector('.cover');
const submit=document.querySelector('.submit');
const notify=document.querySelector('.notify');
const clear=document.querySelector('.clear');
const inputbox=document.querySelector('.input');

function arr(){
    let ar=[...items.children];
    return ar;
}

function additems(){
    if(input.value.length>0){
        const div1=document.createElement('div');
        div1.classList.add('items');
        const span=document.createElement('span');
        const div2=document.createElement('div');
        div2.classList.add('btns');
        const edit=document.createElement('button');
        edit.classList.add('btn1');
        const del=document.createElement('button');
        del.classList.add('btn2');
        span.innerHTML=input.value;
        input.value='';
        
        edit.innerHTML=`<i class="fa-solid fa-pen-to-square"></i>`;
        del.innerHTML=`<i class="fa-solid fa-trash"></i>`;
        items.appendChild(div1);
        div1.appendChild(span);
        div1.appendChild(div2);
        div2.appendChild(edit);
        div2.appendChild(del);
        notify.style=`visibility: visible; background-color: lightgreen; color:black`;
        notify.innerHTML=`item added to list`;
        setTimeout(() => {
            notify.style=`visibility:hidden`;
        }, 1000);
        
        
        
        
        

    }
    else{
        notify.style=`visibility: visible; background-color:rgba(255, 0, 0, 0.171); color:rgba(165, 7, 7, 0.452)`;
        notify.innerHTML=`empty item`;
        setTimeout(()=>{
            notify.style=`visibility:hidden`;

        },1000);
        

    }
    if(arr().length>0){
        clear.classList.add('clears');
    }
    
    
    

    

}


function changeitem(s){
    
    
   
    
    inputbox.children[1].replaceWith(submit);
    s.innerText=input.value;
    input.value=``;
    notify.style=`visibility: visible; background-color: lightgreen; color:black`;
    notify.innerHTML=`item edited`;
    setTimeout(()=>{
        notify.style=`visibility:hidden`;

    },1000);
    





}
function delitems(e) {
    let i=e.target;
   
    if(i.classList[1]==='fa-trash'){
        const p=i.parentElement.parentElement.parentElement;
        notify.style=`visibility: visible; background-color:rgba(255, 0, 0, 0.171); color:rgba(165, 7, 7, 0.452)`;
        notify.innerHTML=`item deleted`;
        setTimeout(() => {
            notify.style=`visibility:hidden`;
        },1000);
        
        p.remove();
        
    }
    if(i.classList[1]==='fa-pen-to-square'){
        input.value=i.parentElement.parentElement.parentElement.children[0].innerText;
        const editbtn=document.createElement('button');
        editbtn.classList.add('edit');
        editbtn.innerHTML='edit';
        submit.replaceWith(editbtn);
        inputbox.children[1].addEventListener('click',()=>{
            changeitem(i.parentElement.parentElement.parentElement.children[0]);
        });
    }

    if(arr().length===0){
        clear.classList.remove('clears');
    }
    
    
}
function dellist(){
    items.innerHTML=``;
    clear.classList.remove('clears'); 
       
    notify.style=`visibility: visible; background-color:rgba(255, 0, 0, 0.171); color:rgba(165, 7, 7, 0.452)`;
    notify.innerHTML=`empty list`;
    setTimeout(()=>{
        notify.style=`visibility:hidden`;
    },1000);
}
submit.addEventListener('click',additems);

items.addEventListener('click',delitems);

clear.addEventListener('click',dellist);


