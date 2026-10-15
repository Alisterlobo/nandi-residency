// Reviews: sliding floating Google reviews
var fb=document.getElementById("fb");
if(fb&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
for(var i=0;i<2;i++){
    [].slice.call(fb.children).forEach(function(k){
        var c=k.cloneNode(true);
        c.setAttribute("aria-hidden","true");
        fb.appendChild(c)
    }
)
}
fb.style.setProperty("--dur",(fb.children.length/2*8)+"s");
fb.classList.add("run")}
