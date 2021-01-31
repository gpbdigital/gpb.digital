  var creative = {};
  creative.domElements = {};
  creative.domElements.wrapper = document.getElementById('wrapper');
  creative.domElements.preloader = document.getElementById('preloader');
  creative.domElements.bg = document.getElementById('bg');
  creative.domElements.coin1 = document.getElementById('coin1');
  creative.domElements.coin2 = document.getElementById('coin2');
  creative.domElements.coin3 = document.getElementById('coin3');
  creative.domElements.coin4 = document.getElementById('coin4');
  creative.domElements.coin5 = document.getElementById('coin5');
  creative.domElements.coin6 = document.getElementById('coin6');
  creative.domElements.coin7 = document.getElementById('coin7');
  creative.domElements.coin8 = document.getElementById('coin8');
  creative.domElements.coin9 = document.getElementById('coin9');
  creative.domElements.logo = document.getElementById('logo');
  creative.domElements.copy1 = document.getElementById('copy1');
  creative.domElements.line1C = document.getElementById('line1C');
  creative.domElements.line1 = document.getElementById('line1');
  creative.domElements.line2C = document.getElementById('line2C');
  creative.domElements.line2 = document.getElementById('line2');
  creative.domElements.line3C = document.getElementById('line3C');
  creative.domElements.line3 = document.getElementById('line3');
  creative.domElements.line4C = document.getElementById('line4C');
  creative.domElements.line4 = document.getElementById('line4');
  creative.domElements.copy2 = document.getElementById('copy2');
  creative.domElements.copy3 = document.getElementById('copy3');
  creative.domElements.taglineC = document.getElementById('taglineC');
  creative.domElements.tagline = document.getElementById('tagline');
  creative.domElements.tcs = document.getElementById('tcs');
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

  //tl.to(creative.domElements.coin2, 1.5,  { ease: Sine.easeInOut, opacity: 1 }, 0.0);
  tl.to(creative.domElements.coin3, 1.5,  { ease: Sine.easeInOut, opacity: 1 }, 0.0);
  tl.to(creative.domElements.coin4, 1.5,  { ease: Sine.easeInOut, opacity: 1 }, 1.25);
  tl.to(creative.domElements.coin5, 1.5,  { ease: Sine.easeInOut, opacity: 1 }, 2.5);
  tl.to(creative.domElements.coin6, 1.5,  { ease: Sine.easeInOut, opacity: 1 }, 3.75);
  tl.to(creative.domElements.coin7, 1.5,  { ease: Sine.easeInOut, opacity: 1 }, 5.0);
  tl.to(creative.domElements.coin8, 1.5,  { ease: Sine.easeInOut, opacity: 1 }, 6.25);
  tl.to(creative.domElements.coin9, 1.5,  { ease: Sine.easeInOut, opacity: 1 }, 7.5);

  tl.to(creative.domElements.line1, 0.25,  { ease: Sine.easeInOut, y: -16 }, 1.0);
  tl.to(creative.domElements.line2, 0.25,  { ease: Sine.easeInOut, y: -19 }, 1.25);
  tl.to(creative.domElements.line3, 0.25,  { ease: Sine.easeInOut, y: -15 }, 1.5);
  tl.to(creative.domElements.line4, 0.25,  { ease: Sine.easeInOut, y: -19 }, 1.75);

  tl.to(creative.domElements.copy1, 0.25,  { ease: Sine.easeInOut, opacity: 0 }, 5.0);
  tl.to(creative.domElements.copy2, 0.25,  { ease: Sine.easeInOut, opacity: 1 }, 5.25);

  tl.to(creative.domElements.copy2, 0.25,  { ease: Sine.easeInOut, opacity: 0 }, 8.5);
  tl.to(creative.domElements.copy3, 0.25,  { ease: Sine.easeInOut, opacity: 1 }, 8.75);

  tl.to(creative.domElements.logo, 0.40,  { ease: Sine.easeInOut, x: -115 }, 10.0);
  tl.to(creative.domElements.tagline, 0.40,  { ease: Sine.easeInOut, opacity:1, x: +130 }, 10.20);
  tl.to(creative.domElements.tcs, 0.25,  { ease: Sine.easeInOut, opacity:1 }, 10.25);

  tl.to(creative.domElements.copy3, 0.25,  { ease: Sine.easeInOut, opacity: 0 }, 12.0);
  tl.to(creative.domElements.cta, 0.25,  { ease: Sine.easeInOut, opacity: 1 }, 12.25);

