const input=document.querySelectorAll('input');
const h2=document.querySelector('h2');

function number(){
    if(parseInt(h2.innerText)>0){
        h2.style='color:green; opacity:1';
    }
    else if(parseInt(h2.innerText)<0){
        h2.style='color:red; opacity:1;';
    }
    else{
        h2.style='color:black;';
    }
    return h2.style;
    
}

input[0].addEventListener('click',()=>{
    h2.innerText=eval(parseInt(h2.innerText)+1);
    number();
    
    
})
input[1].addEventListener('click',()=>{
    h2.innerText='0';
    number();
    
})
input[2].addEventListener('click',()=>{
    h2.innerText=parseInt(h2.innerText)-1;
    number();
    
})
