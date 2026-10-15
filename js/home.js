// Home: Book now popup (call / WhatsApp) and mobile bar
var d=document.getElementById("dlg");
document.getElementById("mcall").href="tel:+91"+PHONE;
document.getElementById("mwa").href="https://wa.me/91"+PHONE+"?text="+encodeURIComponent("Hi, I'd like to enquire about a room at Nandi Residency.");
document.getElementById("num").textContent="+91 "+PHONE;
document.getElementById("call").href="tel:+91"+PHONE;
document.getElementById("wa").href="https://wa.me/91"+PHONE+"?text="+encodeURIComponent("Hi, I'd like to enquire about a room at Nandi Residency.");
document.querySelectorAll("[data-book]").forEach(function(b){b.addEventListener("click",function(e){e.preventDefault();d.showModal()})});
document.getElementById("close").onclick=function(){d.close()};
d.addEventListener("click",function(e){if(e.target===d)d.close()});

// Burger menu (phones and small tablets)
(function(){
  var h=document.querySelector("header"),b=document.getElementById("burger"),n=document.getElementById("nav");
  if(!h||!b||!n)return;
  function set(o){h.classList.toggle("open",o);b.setAttribute("aria-expanded",o);b.setAttribute("aria-label",o?"Close menu":"Open menu")}
  b.addEventListener("click",function(e){e.stopPropagation();set(!h.classList.contains("open"))});
  n.addEventListener("click",function(e){if(e.target.closest("a"))set(false)});
  document.addEventListener("click",function(e){if(!h.contains(e.target))set(false)});
  document.addEventListener("keydown",function(e){if(e.key==="Escape")set(false)});
  window.addEventListener("resize",function(){if(innerWidth>860)set(false)});
})();
