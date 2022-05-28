const review=[{img:'person-1.jpg',name:'susan smith',profession:'web developer',content:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"},
{img:'person-2.jpg',name:'anna johnson',profession:'web designer',content:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},
{img:'person-3.jpg',name:'peter jones',profession:'intern',content:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},
{img:'person-4.jpg',name:'bill anderson',profession:'the boss',content:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."}];

const buttons=document.querySelectorAll('button');
const card=document.querySelector('.card');
const img=document.querySelector('img');
const names=document.querySelector('.name span');
const professions=document.querySelector('.profession span');
const detail=document.querySelector('.content p');
let index=0;


window.addEventListener('load',()=>{
    show(index);

    
})
function show(i){
    img.src=review[i].img;
    names.innerHTML=review[i].name;
    professions.innerHTML=review[i].profession;
    detail.innerHTML=review[i].content;   
}
buttons[0].addEventListener('click',()=>{
    index--;
    if(index<0){
        index=review.length-1;
    }
   
    show(index);
   
    console.log('left');

})
buttons[1].addEventListener('click',()=>{
    index++;
    if(index>review.length-1){
        index=0;
    }
    show(index);
    
    console.log('right');
})
buttons[2].addEventListener('click',()=>{
    index=Math.floor(Math.random()*4);
    show(index);
})