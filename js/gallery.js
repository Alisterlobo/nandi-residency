// Gallery: click a photo to open it big. Swipe or use arrow keys to move.
(function(){
var gal=document.querySelector(".gal");
if(gal&&typeof GALLERY!=="undefined"&&GALLERY.length){
gal.innerHTML="";
GALLERY.forEach(function(f,n){var d=document.createElement("div"),im=document.createElement("img");im.src="images/gallery/"+f;im.alt="Nandi Residency photo "+(n+1)+", Dharwad";im.loading="lazy";d.appendChild(im);gal.appendChild(d)});
}
var lb=document.getElementById("lb"),im=document.getElementById("lbi");
var items=[].slice.call(document.querySelectorAll(".gal div")).filter(function(d){return d.querySelector("img")});
if(!lb||!items.length)return;
var i=0,x0=null;
function show(n){i=(n+items.length)%items.length;var p=items[i].querySelector("img");im.src=p.currentSrc||p.src;im.alt=p.alt||"Nandi Residency photo"}
function open(n){show(n);lb.showModal()}
items.forEach(function(d,n){
d.tabIndex=0;d.setAttribute("role","button");
d.addEventListener("click",function(){open(n)});
d.addEventListener("keydown",function(e){if(e.key==="Enter")open(n)});
});
document.getElementById("lbx").onclick=function(){lb.close()};
document.getElementById("lbp").onclick=function(){show(i-1)};
document.getElementById("lbnx").onclick=function(){show(i+1)};
lb.addEventListener("click",function(e){if(e.target===lb)lb.close()});
document.addEventListener("keydown",function(e){if(!lb.open)return;if(e.key==="ArrowLeft")show(i-1);if(e.key==="ArrowRight")show(i+1)});
lb.addEventListener("touchstart",function(e){x0=e.touches[0].clientX},{passive:true});
lb.addEventListener("touchend",function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>50)show(dx<0?i+1:i-1);x0=null});
})();
