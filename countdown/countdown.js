const boxes=document.querySelectorAll('.box');
console.log(boxes);
var id=setInterval(countdown,1000);

function countdown(){
    const todate=new Date('Dec 31,2022 00:00:00').getTime();
    const fordate=new Date().getTime();
    const gap=todate-fordate;
    
    
    const secs=1000;
    const mins=60*secs;
    const hour=60*mins;
    const days=24*hour;
    const textday=Math.floor(gap/days)<10?'0'+Math.floor(gap/days):Math.floor(gap/days);
    const texthour=Math.floor((gap%days)/hour)<10?'0'+Math.floor((gap%days)/hour):Math.floor((gap%days)/hour);
    const textmin=Math.floor((gap%hour)/mins)<10?'0'+Math.floor((gap%hour)/mins):Math.floor((gap%hour)/mins);
    const textsec=Math.floor((gap%mins)/secs)<10?'0'+Math.floor((gap%mins)/secs):Math.floor((gap%mins)/secs);
    if(gap>0){
        boxes[0].querySelectorAll('span')[0].innerText=textday;
        boxes[1].querySelectorAll('span')[0].innerText=texthour;
        boxes[2].querySelectorAll('span')[0].innerText=textmin;
        boxes[3].querySelectorAll('span')[0].innerText=textsec;
    }
    else{
        clearInterval(id);

    }
}

