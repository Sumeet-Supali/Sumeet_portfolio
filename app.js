//import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var mn = document.querySelector("#main");
var dot = document.querySelector("#circle");

mn.addEventListener("mousemove",function(dets){
    dot.style.left = dets.x + "px";
    dot.style.top = dets.y + "px";
})

function firstpageanim() {
    
    var t1 = gsap.timeline();

    t1.from("#nav",{
        y:'-10',
        opacity:0,
        
        duration:2,
        ease:Expo.easeInOut
    })

    .to(".boundingelem",{
        y:0,
        delay:-1,
        ease: Expo.easeInOut,
        duration : 2,
        stagger : .2
    })
}

document.querySelectorAll(".elem").forEach(function(elem) {
    var rotate = 0;
    var diffrot = 0;
    var img = elem.querySelector("img");
  
    elem.addEventListener("mousemove", function(dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
  
      img.style.opacity = 1;
      img.style.height = "130%";
      img.style.top = diff + "px";
      img.style.left = dets.clientX + "px";
      img.style.transform = `rotate(${Math.min(20, Math.max(-20, diffrot))}deg)`;
    });
  
    elem.addEventListener("mouseleave", function() {
      img.style.opacity = 0;
    });
  });
  

firstpageanim();
