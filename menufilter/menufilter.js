const menuitems=[{type:'Breakfast',img:'item-1.jpg',price:'$15.99',title:'Buttermilk Pancakes',detail:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"},
{type:'Breakfast',img:'item-2.jpg',price:'$20.99',title:'Country Delight',detail:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"},
{type:'Breakfast',img:'item-3.jpg',price:'$8.99',title:'Bacon Overflow',detail:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"},
{type:'Lunch',img:'item-4.jpg',price:'$13.99',title:'Diner Double',detail:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"},
{type:'Shakes',img:'item-5.jpg',price:'$6.99',title:'Godzilla Milkshake',detail:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."},
{type:'Lunch',img:'item-6.jpg',price:'$22.99',title:'Egg Attack',detail:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"},
{type:'Shakes',img:'item-7.jpg',price:'$18.99',title:'Oreo Dream',detail:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"},
{type:'Lunch',img:'item-8.jpg',price:'$12.99',title:'American Classic',detail:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"},
{type:'Shakes',img:'item-9.jpg',price:'$16.99',title:'Quarantine Buddy',detail:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."},
{type:'Dinner',img:'item-10.jpg',price:'$39.99',title:'Steak Dinner',detail:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."}];

const button=document.querySelectorAll('a');

const menus=document.querySelector('.menu');
const loader=document.querySelector('.loader');
window.addEventListener('load',()=>{
    this.setTimeout(loading,1000);
})
function loading() {
    loader.style='display:none';
}

console.log(menuitems);

function eating(item){
    menus.innerHTML+=`
    <div class="item1">
        <div class="img1">
            <img src="${item.img}">
        </div>
        <div class="itemcontent">
            <div class="itemtitle">
                <h3>${item.title}</h3>
                <span>${item.price}</span>
            </div>
            <hr>
            <div class="itemdetail1">${item.detail}</div>
        </div>
    </div>`;
}
menuitems.forEach((item)=>{
    eating(item);
})
let items=menus.children;
button[1].addEventListener('click',()=>{
    
    menuitems.forEach((it,index)=>{
        if (it.type==="Breakfast") {
            items[index].style='display:flex';
            
        }
        else{
            items[index].style='display:none';
        }
    })
})
console.log(items);
button[2].addEventListener('click',()=>{
    
    menuitems.forEach((it,index)=>{
        if (it.type==="Lunch") {
            items[index].style='display:flex';
            
        }
        else{
            items[index].style='display:none';
        }
    })
})
console.log(items);
button[3].addEventListener('click',()=>{
    
    menuitems.forEach((it,index)=>{
        if (it.type==="Shakes") {
            items[index].style='display:flex';
            
        }
        else{
            items[index].style='display:none';
        }
    })
})

button[4].addEventListener('click',()=>{
    
    menuitems.forEach((it,index)=>{
        if (it.type==="Dinner") {
            items[index].style='display:flex';
            
        }
        else{
            items[index].style='display:none';
        }
    })
})
button[0].addEventListener('click',()=>{
    menuitems.forEach((it,index)=>{
        items[index].style='display:flex';
    })
})
