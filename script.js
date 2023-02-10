const bodyE = document.querySelector("body");

bodyE.addEventListener("mousemove",(event)=>{
     const PosX = event.offsetX;
     const PosY = event.offsetY;
     const spanE = document.createElement("span");
     spanE.style.left = PosX + "px";
     spanE.style.top= PosY + "px";
     const size = Math.random()*100;
     spanE.style.width = size + "px";
     spanE.style.height = size + "px";
     bodyE.appendChild(spanE);
     setTimeout(()=>{
        spanE.remove();
     },3000);
})
