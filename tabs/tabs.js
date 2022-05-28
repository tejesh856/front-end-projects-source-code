const tabsvalue=[{name:'history',context:"I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up."},
{name:'vision',context:"Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.list itemlist itemlist item"},
{name:'goals',context:"Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones."}];
const links=document.querySelectorAll('a');
const id=document.querySelector('.para span');
const detail=document.querySelector('.para p');
let i=0;
window.addEventListener('load',()=>{
    links[0].classList.add('change');
    id.innerText=tabsvalue[0].name;
    detail.innerText=tabsvalue[0].context;
})
links.forEach((item,index)=>{
    item.addEventListener('click',(e)=>{
        if(item.innerText.toLowerCase()===tabsvalue[index].name){
            id.innerText=tabsvalue[index].name;
            detail.innerText=tabsvalue[index].context;
        }
        if(e.currentTarget.innerText.toLowerCase()==='history'){
            e.currentTarget.classList.add('change');
            links[1].classList.remove('change');
            links[2].classList.remove('change');
        }
        else if(e.currentTarget.innerText.toLowerCase()==='vision'){
            e.currentTarget.classList.add('change');
            links[0].classList.remove('change');
            links[2].classList.remove('change');
        }
        else if(e.currentTarget.innerText.toLowerCase()==='goals'){
            e.currentTarget.classList.add('change');
            links[0].classList.remove('change');
            links[1].classList.remove('change');
        }
        
        
        
    })
})
