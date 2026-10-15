// Contact: footer email and social icons
var IC={wa:'<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.3-1.8-1-.8.7a3.6 3.6 0 0 1-1.7-1.7l.7-.8-1-1.8z"/>',ig:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',fb:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',yt:'<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z"/>',ml:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'};
var soc=document.getElementById("social");
function addSoc(k,url,label){if(!url)return;var a=document.createElement("a");a.href=url;a.target="_blank";a.rel="noopener";a.setAttribute("aria-label",label);a.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+IC[k]+'</svg>';soc.appendChild(a)}
addSoc("wa","https://wa.me/91"+PHONE,"WhatsApp");
addSoc("ig",INSTAGRAM,"Instagram");addSoc("fb",FACEBOOK,"Facebook");addSoc("yt",YOUTUBE,"YouTube");
if(EMAIL){var m=document.createElement("a");m.href="mailto:"+EMAIL;m.textContent=EMAIL;document.getElementById("mailslot").appendChild(m);addSoc("ml","mailto:"+EMAIL,"Email")}

// Floating buttons on the right side (desktop only, phones use the bottom bar)
IC.ph='<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>';
var fl=document.createElement("div");fl.className="float";
function addFl(cls,href,label,ic,ext){var a=document.createElement("a");a.className=cls;a.href=href;a.setAttribute("aria-label",label);if(ext){a.target="_blank";a.rel="noopener"}a.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+IC[ic]+'</svg>';fl.appendChild(a)}
addFl("f-wa","https://wa.me/91"+PHONE+"?text="+encodeURIComponent("Hi, I'd like to enquire about a room at Nandi Residency."),"WhatsApp","wa",true);
if(INSTAGRAM)addFl("f-ig",INSTAGRAM,"Instagram","ig",true);
addFl("f-call","tel:+91"+PHONE,"Call","ph",false);
document.body.appendChild(fl);


// Map: tap once to use it, tap anywhere else to go back to normal scrolling
// (function(){
//   var m=document.querySelector(".map"),l=m&&m.querySelector(".map-lock");
//   if(!m||!l)return;
//   l.addEventListener("click",function(){m.classList.add("active")});
//   function off(e){if(!m.contains(e.target))m.classList.remove("active")}
//   document.addEventListener("touchstart",off,{passive:true});
//   document.addEventListener("click",off);
// })();