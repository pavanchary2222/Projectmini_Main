const menuicon=document.querySelector('.menu-icon');
const sidebar=document.querySelector(".side-bar");
menuicon.addEventListener("click",function(){
  sidebar.classList.toggle("active");
});

// close button animtion toggle
const closebutton=document.querySelector(".close_button");
closebutton.addEventListener("click",function(){
  const button=document.querySelector(".active");
 button.classList.remove("active");
});

//display submenu on click
const eventsubmenu=document.querySelector(".eventdrop");
eventsubmenu.addEventListener("click",function(){
  const menu=document.querySelector(".eventsub");
  menu.classList.toggle("submenu1");
});
const volunteersubmenu=document.querySelector(".voldrop")
volunteersubmenu.addEventListener("click",function(){
  const menu=document.querySelector(".volsub");
  menu.classList.toggle("submenu1");
});
const repsubmenu=document.querySelector(".repdrop")
repsubmenu.addEventListener("click",function(){
  const menu=document.querySelector(".repsub");
  menu.classList.toggle("submenu1");
});
const donatesubmenu=document.querySelector(".donatedrop")
donatesubmenu.addEventListener("click",function(){
  const menu=document.querySelector(".donatesub");
  menu.classList.toggle("submenu1");
});
const helpsubmenu=document.querySelector(".helpdrop")
helpsubmenu.addEventListener("click",function(){
  const menu=document.querySelector(".helpsub");
  menu.classList.toggle("submenu1");
});
const financesubmenu=document.querySelector(".findrop")
financesubmenu.addEventListener("click",function(){
  const menu=document.querySelector(".finsub");
  menu.classList.toggle("submenu1");
});
const constsubmenu=document.querySelector(".constdrop")
constsubmenu.addEventListener("click",function(){
  const menu=document.querySelector(".constsub");
  menu.classList.toggle("submenu1");
});
