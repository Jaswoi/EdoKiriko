const button=document.querySelector("#next");
const hide=document.querySelector("#third");
const footer=document.querySelector("footer");
const second=document.querySelector("#second");
button.addEventListener("click",()=>{
button.style.display="none";
hide.style.display="flex";
footer.style.paddingTop="30px";
second.style.border="none";
});