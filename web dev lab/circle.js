const circle1=document.querySelector(".circle");
inc=0;
circle1.addEventListener('click', ()=>{
inc=inc+50;
circle1.style.top=inc+"px";
})

