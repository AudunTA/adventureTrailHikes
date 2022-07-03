
const buttons = document.querySelectorAll("button");

const info = document.querySelector("#selected-info");
const infoTitle = document.querySelector("#info-title");
const selected = document.querySelector("#select-options");

const objInfo = [{
    "title": "How do I book a tour",
    "info": "You can go to the contact page to get in touch, or you can call us on 555 1000." 
},
{   
    "title": "Prices",
    "info": "Our tours are most often created with a specific group of people in mind, so our prices vary. Contact us for more information."
},
{
    "title": "What do I need to bring?",
    "info": "We encourage hikers to pack sensibly and bring their own appropriate clothing and gear. We are always well-stocked and prepared, just in case you have forgotten something or would rather travel light. Be aware that our package prices do not include extra equipment!"
},
{
    "title": "Insurance",
    "info": "We offer a special all-inclusive insurance package which covers all aspects of a tour. Contact us for more information about this."
},
{
    "title": "Accessibility",
    "info": "We also offer tours for people with disabilities. Contact us for more information."
}];

const btnP = document.querySelector("#price");
for(let i=0; i< buttons.length-2; i++) {
buttons[i].addEventListener("click",handleP)




}

selected.addEventListener("change", handleP);

function handleP() {
    let width = window.innerWidth;
    let value = selected.value;
    if(width > 700) {
        value = null;
    }
    console.log(width);
    console.log(selected.value);
    for(let i=0; i <buttons.length-2; i++) {
        buttons[i].style.backgroundColor="gray";
    }
    
    if(this.classList =="book" || value ==1) {
        infoTitle.innerHTML=`<h2>${objInfo[0].title}</h2>`
        info.innerHTML= `${objInfo[0].info}`;
        buttons[0].style.backgroundColor="#F09A33";
    }
    if(this.classList =="price" || value ==2) {
        infoTitle.innerHTML=`<h2>${objInfo[1].title}</h2>`
       info.innerHTML = `${objInfo[1].info}`;
       buttons[1].style.backgroundColor="#F09A33";
    }
    if(this.classList =="bring" || value ==3) {
        infoTitle.innerHTML=`<h2>${objInfo[2].title}</h2>`
       info.innerHTML = `${objInfo[2].info}`;
       buttons[2].style.backgroundColor="#F09A33";
    }
    if(this.classList =="insurance" || value ==4) {
        infoTitle.innerHTML=`<h2>${objInfo[3].title}</h2>`
       info.innerHTML = `${objInfo[3].info}`;
       buttons[3].style.backgroundColor="#F09A33";
    }
    if(this.classList =="accessibility" || value ==5) {
        infoTitle.innerHTML=`<h2>${objInfo[4].title}</h2>`
       info.innerHTML = `${objInfo[4].info}`;
       buttons[4].style.backgroundColor="#F09A33";
    }
}

console.log("ha");