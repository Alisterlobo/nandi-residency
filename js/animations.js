// Animations: scroll reveal, header shadow
(function(){
var reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
var hdr=document.querySelector("header");
function onScroll(){if(hdr)hdr.classList.toggle("scrolled",window.scrollY>10)}
window.addEventListener("scroll",onScroll,{passive:true});onScroll();
if(reduce||!("IntersectionObserver" in window))return;
var groups=["#rooms .rooms .room","#about .about > *","#gallery .gal div","#services .svc div","#location .loc > *",".cta","section h2",".sub",".chips"];
groups.forEach(function(sel){
document.querySelectorAll(sel).forEach(function(el,i){
el.classList.add("reveal");
el.style.animationDelay=Math.min(i,6)*90+"ms";
});
});
var io=new IntersectionObserver(function(es){
es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}});
},{threshold:.12,rootMargin:"0px 0px -40px 0px"});
document.querySelectorAll(".reveal").forEach(function(el){io.observe(el)});
})();
