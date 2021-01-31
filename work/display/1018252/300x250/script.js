
var creative = {};
  creative.domElements = {};
  creative.domElements.wrapper = document.getElementById('wrapper');
  creative.domElements.preloader = document.getElementById('preloader');
  creative.domElements.bg1 = document.getElementById('bg1');
  creative.domElements.bg2 = document.getElementById('bg2');
  creative.domElements.logo = document.getElementById('logo');
  creative.domElements.chevronContainer = document.getElementById('chevronContainer');
  creative.domElements.c1 = document.getElementById('c1');
  creative.domElements.c2 = document.getElementById('c2');
  creative.domElements.c3 = document.getElementById('c3');
  creative.domElements.c4 = document.getElementById('c4');
  creative.domElements.c5 = document.getElementById('c5');
  creative.domElements.tcs1 = document.getElementById('tcs1');
  creative.domElements.copy1 = document.getElementById('copy1');
  creative.domElements.copy2 = document.getElementById('copy2');
  creative.domElements.copy3 = document.getElementById('copy3');
  creative.domElements.orangeContainer = document.getElementById('orangeContainer');
  creative.domElements.orange = document.getElementById('orange');
  creative.domElements.bonus = document.getElementById('bonus');
  creative.domElements.blueContainer = document.getElementById('blueContainer');
  creative.domElements.blue = document.getElementById('blue');
  creative.domElements.copy4 = document.getElementById('copy4');
  creative.domElements.cta = document.getElementById('cta');


  var loop = 0;
  var tl = new TimelineMax({
    onComplete:function() {
      setTimeout(function() {
        loop++;
        if(loop < 2){
         // tl.restart();
        }
      }, 5000)
    }
  });

    tl.to(creative.domElements.preloader, 0.5,  { ease: Linear.easeInOut, opacity: 0 }, 0.0);

    tl.to(creative.domElements.c1, 2.20, { ease: Sine.easeInOut, x: +600, force3D:true }, 0.5).set(creative.domElements.c1, { clearProps: "all" });
    tl.to(creative.domElements.c2, 2.20, { ease: Sine.easeInOut, x: +600, force3D:true }, 0.55).set(creative.domElements.c2, { clearProps: "all" });
    tl.to(creative.domElements.c3, 2.20, { ease: Sine.easeInOut, x: +630, force3D:true }, 0.70).set(creative.domElements.c3, { clearProps: "all" });
    tl.to(creative.domElements.c4, 2.20, { ease: Sine.easeInOut, x: +600, force3D:true }, 0.65).set(creative.domElements.c4, { clearProps: "all" });
    tl.to(creative.domElements.c5, 2.20, { ease: Sine.easeInOut, x: +600, force3D:true }, 0.6).set(creative.domElements.c5, { clearProps: "all" }).set(creative.domElements.c5, { left: "100px" });
    tl.to(creative.domElements.copy1, 0.50, { ease: Sine.easeInOut, opacity: 1, force3D:true }, 2.0);

    tl.to(creative.domElements.bg2, 0.5, { ease: Sine.easeInOut, opacity: 1, force3D:true }, 5.0);
    tl.to(creative.domElements.copy2, 0.5, { ease: Sine.easeInOut, opacity: 1, force3D:true }, 5.5);

    tl.to(creative.domElements.copy2, 0.5, { ease: Sine.easeInOut, opacity: 0, force3D:true }, 9.0);
    tl.to(creative.domElements.orange, 0.5, { ease: Sine.easeInOut, opacity: 0.7, force3D:true }, 9.5);
    tl.to(creative.domElements.copy3, 0.5, { ease: Sine.easeInOut, opacity: 1, force3D:true }, 9.5);

    tl.to(creative.domElements.bonus, 2.2, { ease: Sine.easeInOut, x: +480, force3D:true, z:0.001 }, 11.80);
    tl.to(creative.domElements.blueContainer, 1.8, { ease: Sine.easeInOut, width:"700px", force3D:true, z:0.001 }, 12.20);

    tl.to(creative.domElements.orangeContainer, 1.8, { ease: Sine.easeInOut, width:0, force3D:true, z:0.001 }, 12.20);
    tl.to(creative.domElements.orange, 1.8, { ease: Sine.easeInOut, x: -400, force3D:true, z:0.001 }, 12.20);
    tl.to(creative.domElements.copy3, 0.2, { ease: Sine.easeInOut, opacity:0, force3D:true, z:0.001 }, 12.30);

    tl.to(creative.domElements.cta, 0.15, { ease: Power1.easeIn, scale:1.05, force3D:true, z:0.001}, 14.0);
    tl.to(creative.domElements.cta, 0.15, { ease: Power1.easeIn, scale:1.0, force3D:true, z:0.001}, 14.15);
    tl.to(creative.domElements.cta, 0.15, { ease: Power1.easeIn, scale:1.05, force3D:true, z:0.001}, 14.7);
    tl.to(creative.domElements.cta, 0.15, { ease: Power1.easeIn, scale:1.0, force3D:true, z:0.001}, 14.85);
    tl.to(creative.domElements.cta, 0.15, { ease: Power1.easeIn, scale:1.05, force3D:true, z:0.001}, 15.4);
    tl.to(creative.domElements.cta, 0.15, { ease: Power1.easeIn, scale:1.0, force3D:true, z:0.001}, 15.55);

