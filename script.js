// locomotive scrollTrigger code

// codepen code start
//#main applied to scroller
function scroll_loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
scroll_loco()

// end

const scroll = new LocomotiveScroll({
    el:document.querySelector("main"),
    smooth:true
})

var menu = document.querySelector('#menu')
var full = document.querySelector('#full-scr-nav')

var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var flag = 0

menu.addEventListener('click', function(){
    if(flag === 0){
        full.style.top = "0"
        document.querySelector('nav h2').style.color = "#222"
        document.querySelector('nav #nav-right').style.color = "#222"
        line1.style.backgroundColor = `#232025`;
        line2.style.backgroundColor = `#232025`;
        line1.style.transform = `rotate(40deg)`;
        line1.style.width = `70%`;
        line2.style.transform = `rotate(-40deg)`;
        line2.style.backgroundColor = `#232025`;
        flag = 1
    }
    else {
        full.style.top = "-100vh"
        document.querySelector('nav h2').style.color = "#d1d1d1"
        document.querySelector('nav #nav-right').style.color = "#d1d1d1"
        line1.style.backgroundColor = `#cecece`;
        line2.style.backgroundColor = `#cecece`;
        line1.style.transform = `rotate(00deg)`;
        line1.style.width = `100%`;
        line2.style.transform = `rotate(-0deg)`;
        line2.style.backgroundColor = `#cecece`;
        flag = 0
    }
})

// moving mouse

var main = document.querySelector('main')
var h1 = document.querySelector('#heading')
var h1D = h1.getBoundingClientRect()

var h1CenterX = h1D.width/2 + h1D.left      // left + cause of padding extra
var h1CenterY = h1D.height/2 + h1D.top

var xVal = 0
var yVal = 0

main.addEventListener('mousemove',function(dets){
    xVal = (dets.x - h1CenterX)/25
    yVal = -(dets.y - h1CenterY)/7
    if(yVal > -60 && yVal < 40){
        gsap.to(h1,{
            transform : `translateY(-50%) rotateY(${xVal}deg) rotateX(${yVal}deg)`,
            duration : 5,
            ease : 'expo.out'
        })
    }
})

// GSAP Timeline

var tl =  gsap.timeline()

tl.from("nav h2",{
    y:-600,
    opacity:0,
    duration:0.5,
    stagger:0.3
})

tl.from("#nav-right h3",{
    y:-30,
    opacity:0,
    duration:0.5,
    stagger:0.3
})


tl.from("#page1 h1",{
    y:60,
    duration: 0.8,
    opacity:0
})
.from("#page1 h2",{
    y:50,
    duration: 0.8,
    opacity:0,
    delay: "-0.2"
})
.from("#page1 h3",{
    y:50,
    duration: 0.8,
    opacity:0,
    delay: "-0.2"
})

gsap.to("#page2 img",{
    scale:0.95,
    scrollTrigger:{
        trigger:"#page2 img",
        scroller:"main",
        // markers:true,
        start:"top 70%",
        end:"top 5%",
        scrub:3
    }
})

gsap.to("#page3 p",{
    rotateX: 0,
    scrollTrigger:{
        trigger:"#page3 p",
        scroller:"main",
        // markers:true,
        start:"top 90%",
        end:"top 50%",
        scrub:2
    }
})

gsap.to('#page5 h1', {
    x:100,
    scrollTrigger: {
      trigger: '#page5 h1',
      scroller: 'main',
      scrub:2,
    //   markers:true,
      start: 'top 60%',
      end:'top 40%'
    },
    opacity: 1,
    duration:0.5,
    onStart: function () {
      $(document).ready(function () {
        $('#finish h1').textillate({ in: { effect: 'fadeInUp' } });
      })
    },
  })



// smiley 360deg

gsap.to('#smiley',{
    rotation: 360,
    duration: 3,
    repeat: -1,
    ease: 'linear'
})

// moving scroll ONE

var one = document.querySelectorAll('#page7 #slides h1')
var one2 = document.querySelectorAll('#page7 #slides2 h1')

one.forEach(function(elem){
    gsap.to(elem,{
        transform: 'translateX(-100%)',
        duration:4,
        ease: 'linear',
        scrollTrigger:{
            trigger:'#page7',
            scroller:'main',
            scrub:3
        }
    })
})

one2.forEach(function(elem){
    gsap.to(elem,{
        transform: 'translateX(0%)',
        duration:4,
        ease: 'linear',
        scrollTrigger:{
            trigger:'#page7',
            scroller:'main',
            scrub:3
        }
    })
})

// yes no

document.querySelector('#yes').addEventListener('mousemove', function(dets){
    var img = document.querySelector('#yes img')

    var rect = img.getBoundingClientRect()

    var offsetX = rect.width / 15
    var offsetY = rect.height / 2

    img.style.opacity = 1
    img.style.left = `${dets.x - offsetX}px`
    img.style.top = `${dets.y - offsetY}px`

})

document.querySelector('#no').addEventListener('mousemove', function(dets){
    var img = document.querySelector('#no img')

    var rect = img.getBoundingClientRect()

    var offsetX = rect.width / 15
    var offsetY = rect.height / 2

    img.style.opacity = 1
    img.style.left = `${dets.x - offsetX}px`
    img.style.top = `${dets.y - offsetY}px`

})

document.querySelector('#yes').addEventListener('mouseleave', function(dets){
    var img = document.querySelector('#yes img')
    img.style.opacity = 0
})

document.querySelector('#no').addEventListener('mouseleave', function(dets){
    var img = document.querySelector('#no img')
    img.style.opacity = 0
})

// fruits

gsap.to('#page4-contents #line', {
    scrollTrigger: {
      trigger: '#page4-contents',
      scroller: 'main',
      scrub: 2,
      end: 'bottom 90%',
      // markers:true,
      start: 'top 80%',
    },
    width: '100%',
  })

function setupFruitCard(cardSelector, triggerSelector) {
    const card = document.querySelector(cardSelector);
    const trigger = document.querySelector(`${triggerSelector} h1`);
    const container = document.querySelector(triggerSelector);
  
    trigger.addEventListener('mouseenter', () => {
      card.style.opacity = 1;
      card.style.transform = `translate(-50%,-50%) rotate(20deg)`;
      card.style.left = `40%`;
    });
  
    container.addEventListener('mousemove', (dets) => {
      card.style.left = `${dets.x}px`;
    });
  
    container.addEventListener('mouseleave', () => {
      card.style.opacity = 0;
      card.style.transform = `translate(-50%,-50%) rotate(0deg)`;
      card.style.left = `20%`;
    });
  }
  
  // Initialize for each fruit
  setupFruitCard('.mangocard', '#mango');
  setupFruitCard('.bananacard', '#Banana');
  setupFruitCard('.pinecard', '#PineApple');
  setupFruitCard('.pithayacard', '#Pithaya');
  

