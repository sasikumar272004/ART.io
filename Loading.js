'use client'
import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const words = [ 'ART', 'искусство', ' 艺术', '芸術' , '예술' , 'कला ' , 'sanat' , 'nghệ thuật' , 'τέχνη' , 'ਕਲਾ ' ,'కళ ' ,'കല ' , 'කලා' , 'အနုပညာ' , 'ສິນລະປະ', 'ART' , 'ART' , ' ART' , 'ART'];

function Loading() {
  const [loading, setLoading] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2600); // 3 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 150); 
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {

      gsap.to(".load",{
        y:-2000,
        delay:3
      })

    });
    return () => ctx.revert();
  }, []);


  return (
    <div
      className={`fixed top-0 left-0 w-[100vw] h-[100vh] load bg-[#d8d4bf] z-50 transition-all duration-500 ${
        loading ? 'opacity-100' : ' opacity-0 top-0'
      }`}
    >
      <div className="spinner absolute bottom-8 right-10 opacity-[.8]"></div>
      <div className="h-screen flex items-center justify-center">
        <h1 className="h1 text-[100px] font-stl font-light text-[#331d22] ">{words[wordIndex]}</h1>
      </div>
    </div>
  );
}

export default Loading;
