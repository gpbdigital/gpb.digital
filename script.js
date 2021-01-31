const grid__item = document.querySelectorAll(".grid__item");
const grid__item__lazy = document.querySelectorAll(".grid__item__lazy");
let i = 0;

setTimeout(function(){
  for (const item of grid__item) {
    loadIframe(item.id);
  }
}, 1000);

function loadIframe(id){
  let url = "/work/display/"+id+"/300x250";
  var target = document.getElementById(id);
  var iframe = document.createElement('iframe');
  iframe.classList.add('grid__item__iframe');
  iframe.src = url;
  iframe.loading = 'lazy';
  iframe.onload = iframeLoaded(iframe);
  target.appendChild(iframe);
}

function iframeLoaded(iframe){
  
  i++;

  if(i == grid__item.length){
    removeLazy();
  }
 }

function removeLazy(){

  var tl = new TimelineMax();

  tl.to(grid__item, {duration: 0.50, opacity:1, ease: Circ.easeInOut, stagger: 0.10});
  tl.to(grid__item__lazy, 0.25,  { ease: Circ.easeInOut, opacity: 0, force3D:true}, 2.5);
  tl.to(grid__item__lazy, 0.25,  { ease: Circ.easeInOut, visibility: "hidden", force3D:true}, 3.0);

}

