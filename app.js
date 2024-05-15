
function scrollTrigger(){ 
 let tl = gsap.timeline({

    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -10%",
        end:"top -12%",
        scrub:2,
    }
  })

 tl.to(".nav",{
    backgroundColor:"black",
    y:-15,
 })

     let tl2 = gsap.timeline({
     scrollTrigger:{
          
         trigger:".main",
         scroller:"body",
         start:"top -40%",
         end:"top -70%",
         scrub:2,
     }
 })

    tl2.to(".main",{
     backgroundColor:"black",
    })

    let tl3 = gsap.timeline({
      scrollTrigger:{
           
          trigger:".adds",
          scroller:"body",
          start:"top 50%",
          end:"top 40%",
          scrub:2,
      }
  })

    tl3.from(".about_us",{

        y:500,
        opacity:0,
     })

     let tl4 = gsap.timeline({
       scrollTrigger:{
          
        trigger:".pics_info",
        scroller:"body",
        start:"top 80%",
        end:"top 75%",
        scrub:2,       
       }
     })

     tl4.to(".pic",{

      height: "22vw",
      width: "24vw",    
    })

  let tl5 = gsap.timeline({
     scrollTrigger:{ 

       trigger:".feact",
       scroller:"body",
       start:"top 80%",
       end:"top 70%",
       scrub:2,
     }
  })

  tl5.to("#first_img",{
      
    top: "-27%",
    left: "15%",

  })

  let tl6 = gsap.timeline({
     scrollTrigger:{
       
      trigger:".feact",
      scroller:"body",
      start:"top 64%",
      end:"top 50%",
      scrub:2,
     }
  })

  tl6.to("#last_img",{
     
    right: "15%",
    bottom: "-16%",
  })

  let tl7 = gsap.timeline({ 
    scrollTrigger:{ 

      trigger:".end_tittles",
      scroller:"body",
      start:"top 85%",
      end:"top 75%",
      scrub:2,

    }
  })

  tl7.to(".end_tittles h2",{
      
     top:"-40%",
  })


}


function circle(){
       
        let xscale = 0;
        let yscale = 0;
        let timer = 0;

      let cir = document.querySelector(".circle");
      let cir2 = document.querySelector(".circle2");

      window.addEventListener("mousemove",(evet)=>{
        
        clearTimeout(timer);

        let xclint = evet.clientX;
        let yclint = evet.clientY;

        let xsize = xclint - xscale;
        let ysize = yclint - yscale;

        xscale = xsize;
        yscale = ysize;

        let xfinal = gsap.utils.clamp(0.8,1.2,xsize);
        let yfinal =gsap.utils.clamp(0.8,1.2,ysize);

       cir.style.transform = `translate(${xclint}px,${yclint}px) scale(${yfinal},${xfinal})`
       cir2.style.transform = `translate(${xclint-120}px,${yclint-120}px) `


         timer =  setTimeout(()=>{         
        cir.style.transform = `translate(${xclint}px,${yclint}px) scale(1)`   
        cir2.style.transform = `translate(${xclint-120}px,${yclint-120}px)`   

       },100);

      });
          
};

scrollTrigger();
circle();
