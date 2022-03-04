let menu = document.querySelector("header nav .menu"),
  ul = document.querySelector("header nav ul"),
  title = document.querySelector("header .section2 .block h3"),
  p = document.querySelector("header .section2 .block p"),
  dot = document.querySelectorAll("header .section2 .block .dots span");
  detail=document.querySelector(".about-s .about .details");

let content = [
  {
    h: "100 % FREE ",
    p: " Lorem, ipsum dolor sit amet consectetur adipisicing elit.Reiciendis sapiente eos laboriosam quo provident possimus odiounde ducimus, dolores repellat, dolore voluptatem vel.",
  },
  {
    h: "EXPERT TEACHERS!",
    p: "expert teachers from all computer science majors !all computer science majorsall computer science majorsall computer science majorsall computer science majors",
  },
  {
    h: "TITLE 2 YAY!",
    p: "ANOTHER CRINGE DESCRIPTION !ANOTHER CRINGE DESCRIPTIONANOTHER CRINGE DESCRIPTIONANOTHER CRINGE DESCRIPTION",
  },
  {
    h: " ANOTHER TITLE ",
    p: "CRINGE DESCRIPTION ANOTHER CRINGEANOTHER CRINGEANOTHER CRINGEANOTHER CRINGEANOTHER CRINGE",
  },
];
let div=document.querySelectorAll(".about .details div");
let desc=document.querySelector(".about .desc");
let h3=desc.children.item(0);
let para=desc.children.item(1);
let arrowright=document.querySelector(".about .arrowright img");
let arrowleft=document.querySelector(".about .arrowleft img");
div.forEach(e => {
 
  e.addEventListener("click", ()=>{
    div.forEach(e =>{
      e.classList.remove("active")
     
    })
    let h3text=e.children.item(0).innerHTML;
    let ptext=e.children.item(1).innerHTML;
    h3.innerHTML=h3text;
    para.innerHTML=ptext;
    e.classList.add("active")
    
    
  })
})

current = 1;
setInterval(() => {
  if (current == 4) {
    current = 0;
  }
  title.innerHTML = content[current].h;
  p.innerHTML = content[current].p;
  
  dot.forEach((element) => {
    element.classList.remove("active");
  });
  dot[current].classList.add("active");
  current++;
}, 3000);
menu.addEventListener("click", () => {
  ul.classList.toggle("open");
});
let howmuchr=370;
let howmuchl=0;
arrowright.addEventListener("click", (e)=>{
  
    detail.style.transform=`translateX(-${howmuchr}px)`;
    arrowleft.style.filter="grayscale(2)";
  
})
arrowleft.addEventListener("click", (e)=>{
  arrowleft.style.filter="grayscale(0)";
    detail.style.transform=`translateX(${howmuchl}px)`;
  
})

let reg=document.querySelector(".register .form-container div.topnav div.reg");
let formc=document.querySelector(".register .form-container .forms");
let log=document.querySelector(".register .form-container div.topnav div.log");

log.onclick=()=>{
formc.style.transform='translateX(-500px)';
log.classList.add("active");
reg.classList.remove("active");
}
reg.onclick=()=>{
  formc.style.transform='translateX(0px)';
  reg.classList.add("active");
  log.classList.remove("active");
  }