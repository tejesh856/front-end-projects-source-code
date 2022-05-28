
window.addEventListener('scroll',()=>{
    var header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>60);
    console.log(window.scrollY);
    
   


})
var ul=document.querySelector('ul');
const links=document.querySelectorAll('a');
links.forEach((item)=>{
    item.addEventListener('click',()=>{
        let el=document.getElementById(item.getAttribute('data-link'));
        el.scrollIntoView({behavior:'smooth',block:'center'});
        if (ul.className==='') {
            ul.classList.add('change');
        } else {
            ul.classList.remove('change');
        }
    })
    

})
const buttons=document.querySelectorAll('button');
buttons[1].addEventListener('click',()=>{
    let i=document.getElementById(buttons[1].getAttribute('data-link'));
    i.scrollIntoView({behavior:'smooth',block:'center'});
    if (ul.className==='change') {
        ul.classList.remove('change');
    }
})

buttons[0].addEventListener('click',()=>{
    if (ul.className==='') {
        ul.classList.add('change');
    } else {
        ul.classList.remove('change');
    }
})