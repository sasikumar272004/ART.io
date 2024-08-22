'use client'
import React, { useEffect, useState } from 'react';
import CircleType from 'circletype';
import Image from 'next/image';
import img2 from '@/assets/img3.png';
import fw2 from '@/assets/fw2.png';
import smoke from '@/assets/smoke.png';
import flower from '@/assets/flower.png';
import l1 from '@/assets/long/l1.png';
import l2 from '@/assets/long/l2.png';
import l3 from '@/assets/long/l3.png';
import l4 from '@/assets/long/l4.png';
import l5 from '@/assets/long/l5.png';
import l6 from '@/assets/long/l6.png';
import l7 from '@/assets/long/l7.png';
import l8 from '@/assets/long/l8.png';
import l9 from '@/assets/long/l9.png';
import l10 from '@/assets/long/l10.png';
import l11 from '@/assets/long/l11.png';
import b1 from '@/assets/big/b1.png';
import b2 from '@/assets/big/b2.png';
import b3 from '@/assets/big/b3.png';
import b4 from '@/assets/big/b4.png';
import b5 from '@/assets/big/b5.png';
import b6 from '@/assets/big/b6.png';
import b7 from '@/assets/big/b7.png';
import b8 from '@/assets/big/b8.png';
import b9 from '@/assets/big/b9.png';
import b10 from '@/assets/big/b10.png';
import b11 from '@/assets/big/b11.png';
import des from '@/assets/des.png';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




gsap.registerPlugin(ScrollTrigger);
const Page1 = () => {
 
  useEffect(() => {

    const circleType = new CircleType(document.querySelector('.circle'));
    circleType.radius(360); 
   
    let ctx = gsap.context(() => {

    





  gsap.from(".nav a",{
    opacity:0,
    delay:3.3,
    duration:1,   
    stagger:.5, 
  }),
  gsap.from(".head",{
    y:120,
    
    delay:3.3,
    duration:1
  })
  gsap.from(".p2cap",{
    y:120,
    
    delay:3.8,
    duration:1
  })
  gsap.from(".img1",{
    opacity:0,
    
    delay:3.8,
    duration:2
  })
  gsap.to(".circle",{
    rotate:360,
    duration:15,
    repeat:-1,
    ease:'none',
  })
  gsap.from(".p2head", {
    y: 120,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2",
      start: "top 30%",
      end:"top 50%",     
      scroller: "body",
      scrub:5,
    }
  })
   
  gsap.from(".pcap", {
    y: 150,
    duration: 1,
    scrollTrigger: {
      trigger: ".page2",
      start: "top 20%",
      end:"top 40%",     
      scroller: "body",
      scrub:5,
    }
  })

  gsap.to(".row1", {
    x: '-3200px',
    scrollTrigger: {
      trigger: ".gallery",
      start: "top -7%",
      end: "+=500%",
      pin: true,
      scroller: "body",
      scrub: 1,
      ease: 'none',
    }
  }, 's');
  
  gsap.to(".row2", {
    x: '100px', 
    scrollTrigger: {
      trigger: ".gallery",
      start: "top -7%",
      end: "+=500%",
      scroller: "body",
 
      scrub: 1,
      ease: 'none',
    }
  }, 's');
  

 gsap.to(".galcap", {
  x:'-150vw',
 scrollTrigger: {
   trigger: ".galcap",
   start: "top 80%", 
   end:"top -10%",    
    scroller: "body",
   scrub:5,
 }
})

 

  
  });
    return () => ctx.revert();
  }, []);

  return (
    < >
    
    <div className='overflow-hidden m-0  body'>    

        <div data-scroll data-scroll-speed="-.8"  className='page1 bg-[#E2DFD0] h-screen relative   '>

           <div className=' nav flex justify-between  pl-12 pr-12  text-[#481d0f] cursor-pointer font-light  font-Almendra text-[10px]' >
          <h1 className='font-light z-[1000]'><a>ART.io</a></h1>
          <h1 className='lnav flex gap-10 z-[1000] font-light font-Almendra '>
          <a href='#gallery  '>Art</a>
          
          </h1>      
          </div>     
        
          <div className='h-[100vh]'>   

            <div className='w-[55vw] h-[160px] overflow-hidden hdiv'><h1   className="head text-[110px] w-[55vw] text-left pl-10 mt-[5%] mb-0  pr-8 font-extralight font-Elsie text-[#431c12] " >Art that stands </h1>
            </div>
            <div className='w-[55vw] h-[130px] overflow-hidden hdiv hdiv2'><h1   className="head head2 text-[110px] w-[55vw] text-left pl-10 mt-[3%] mb-0  pr-8 font-extralight font-Elsie text-[#431c12] " > the test of time</h1>
            </div>   

            <div className='h-[70px] overflow-hidden pdiv'><h3 className=' p2cap  text-[35px] pl-12 mt-5 font-spirax font-light  text-[#918a78] '>Explore timeless classics that capture </h3>
            </div>
            <div className='h-[70px] overflow-hidden pdiv pdiv2'><h3 className=' p2cap  text-[35px] pl-12 mt-2 font-spirax font-light  text-[#918a78] '>  the essence of history and creativity . . .</h3>
            </div>

             </div>


          <Image src={smoke} className='h-[100vh] w-[120vw] absolute top-[0%] left-0 opacity-[0.4] z ' />
          <Image src={img2} className='img1 piccc h-[90vh] w-[40vw] absolute top-[12%] right-10 rounded-3xl  object-center object-cover  ' />
          <Image src={flower} className='img1 absolute left-[-10%] bottom-[-20%] h-[60vh] w-[30vw] f2 opacity-[.5] ' />
          <Image src={flower} className='img1 absolute left-[-10%] bottom-[-20%] h-[60vh] w-[30vw] f3 opacity-[.5] ' />
         
        </div>
        
        <div   className=' bg-[#E2DFD0] h-[100vh] relative page2 z-0 overflow-hidden'>

          <div className='h-[100vh] flex justify-center items-center flex-col '>
          <div className='h-[13vh] overflow-hidden p2d1 '><h1 className='p2head text-[90px] text-center font-Elsie text-[#533831] m-0  '>A Glimpse into timeless beauty.</h1></div>
          <div className='h-[150px] overflow-hidden p2d2'><h1 className=' text-[30px] pcap font-spirax text-[#8a8779] text-center mx-[12%] font-medium '>Explore the grandeur of timeless artistry, where every brushstroke tells a story of elegance,  emotion, and the eternal beauty of the classics.</h1></div>
          </div>
 
          <Image src={smoke} className='h-[100vh] w-[120vw] absolute top-[0%] left-0 opacity-[0.4]  ' />
          <Image src={flower} className='f1 h-[450px] w-[500px]  opacity-[.5] absolute top-[-17%] right-[-12%] rotate-90 z-0 ' />
          <Image src={flower} className='f2 h-[450px] w-[500px] opacity-[.5] absolute left-[-12%] bottom-[-17%] rotate-[45deg] z-0 ' />
        </div>

       

        <div id='gallery'    className='gallery h-[100%] bg-[#251d1d] overflow-hidden   '>

        <div className='galcap h-[10vh] bg-[#251d1d]  text-center text-[5vh] m-0   text-[#F4EEE0] '>

        <h1 className='font-spirax m-0 font-light whitespace-nowrap'>A Journey through artistic brilliance. </h1>

        </div>
           <div className=' row1  h-[43vh] flex  w-[4500px] gap-5 pl-5  pt-5 '>
            <div className='bg-black h-[40vh] w-[450px] rounded-2xl  '>
              <Image src={b5} className='w-full h-full object-cover rounded-2xl' />
            </div>
            <div className='bg-black h-[40vh] w-[450px] rounded-2xl '>
            <Image src={b6} className='w-full h-full object-cover rounded-2xl' />

            </div>
            <div className='bg-black h-[40vh] w-[450px] rounded-2xl'>
            <Image src={b8} className='w-full h-full object-cover rounded-2xl' />

            </div>
            <div className='bg-black h-[40vh] w-[450px] rounded-2xl '>
            <Image src={b1} className='w-full h-full object-cover rounded-2xl' />

            </div>
            <div className='bg-black h-[40vh] w-[450px] rounded-2xl '>
            <Image src={b2} className='w-full h-full object-cover rounded-2xl' />

            </div>
            <div className='h-[40vh] w-[450px] bg-black  rounded-2xl'>
            <Image src={b10}  className='w-full h-full object-fill rounded-2xl' />

            </div>
            <div  className='bg-black h-[40vh] w-[450px] rounded-2xl'>
            <Image src={b3}  className='w-full h-full object-fill rounded-2xl' />

            </div>
            <div className='h-[40vh] w-[450px] bg-black  rounded-2xl'>
            <Image src={b11}  className='w-full h-full object-fill rounded-2xl' />

            </div>
            <div  className='bg-black h-[40vh] w-[450px] rounded-2xl'>
            <Image src={b4}  className='w-full h-full object-fill rounded-2xl' />

            </div>
            <div className='h-[40vh] w-[450px] bg-black  rounded-2xl'>
            <Image src={b9}  className='w-full h-full object-fill rounded-2xl' />

            </div>
           </div>

           <div className=' row2 m-0 h-[65vh] px-5  flex gap-10 w-[3000px] '>
            <div className='h-[53vh] w-[300px] bg-black  rounded-2xl'>
              <Image src={l1}  className='w-full h-full object-cover object-center rounded-2xl' />
            </div>
            <div className='h-[53vh] w-[300px] bg-black rounded-2xl'>
            <Image src={l8}  className='w-full h-full object-cover object-center rounded-2xl' />
            </div>
            <div className='h-[53vh] w-[300px] bg-black rounded-2xl'>
            <Image src={l3}  className='w-full h-full object-cover  object-center rounded-2xl' />
            </div>
            <div className='h-[53vh] w-[300px] bg-black rounded-2xl'>
            <Image src={l9}  className='w-full h-full object-cover  object-center rounded-2xl' />
            </div>
            <div className='h-[53vh] w-[300px] bg-black rounded-2xl'>
            <Image src={l11}  className='w-full h-full object-cover s object-center rounded-2xl' />
            </div>
            <div  className='bg-black h-[53vh] w-[300px] rounded-2xl'>
            <Image src={l6}  className='w-full h-full object-cover rounded-2xl' />

            </div>
            <div  className='bg-black h-[53vh] w-[300px] rounded-2xl'>
            <Image src={l7}  className='w-full h-full object-cover rounded-2xl' />

            </div>
            <div  className='bg-black h-[53vh] w-[300px] rounded-2xl'>
            <Image src={l4}  className='w-full h-full object-cover rounded-2xl' />

            </div>
            <div  className='bg-black h-[53vh] w-[300px] rounded-2xl'>
            <Image src={l5}  className='w-full h-full object-cover rounded-2xl' />

            </div>
            <div  className='bg-black h-[53vh] w-[300px] rounded-2xl'>
            <Image src={l2}  className='w-full h-full object-cover rounded-2xl' />

            </div>
           </div>    
        
         

        </div>


    <div className='h-[60vh] relative last  bg-[#d8d3bd]'
    style={{clipPath:"polygon(0% 0, 100% 0, 100% 100%, 0% 100%"}}>
      <div className='fixed h-[60vh] w-full bottom-0'> 
      <Image src={smoke} className='h-[120vh] w-[120vw] absolute top-[0%] left-0 opacity-[.3]  ' />
       


      <h1 class="text-[90px] circle absolute left-[50%] font-serif font-light scale-[1.3] text-[#513535] fd">
  <div class="s1">✧❁ Art</div>
  <div class="s2">✧❁ 艺术</div>
  <div class="s3">✧❁ Искусство</div>
  <div class="s4">✧❁ 芸術</div>
  <div class="s5">✧❁ ศิลปะ</div>
  <div class="s6">✧❁ 예술</div>
  <div class="s7">✧❁ فن</div>
  <div class="s8">✧❁ कला</div>
  <div class="s9">✧❁ Τέχνη</div>
  <span class="s10">✧❁ కళ</span>
  <span class="s11">✧❁ ხელოვნება</span>
  <span class="s12">✧❁ Art</span>
  <span class="s13">✧❁ 芸術</span>
  <span class="s14">✧❁ ศิลปะ</span>
</h1>

        
        <h1 className='text-center  pt-[17%] text-[70px] font-king font-extralight text-[#5b4343] fc ' > The Legacy of ART , Lives On.......</h1>
       </div>      
    </div>
      


  
    
    </div> 

    
 
   
   
 
  
     
    </>
  )
}

export default Page1