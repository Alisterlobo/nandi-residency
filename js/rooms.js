// Rooms: filter buttons (All, AC, Non-AC, Twin)
var chips=document.querySelectorAll(".chip"),rooms=document.querySelectorAll(".room");
chips.forEach(function(c){c.addEventListener("click",function(){
chips.forEach(function(x){x.setAttribute("aria-pressed",x===c)});
var f=c.dataset.f;
rooms.forEach(function(r){r.hidden=!(f==="all"||r.dataset.t.split(" ").indexOf(f)>-1)});
})});
