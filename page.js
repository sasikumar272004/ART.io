'use client'
 import React from 'react'
 import Page1  from '@/components/Page1'
 import LocomotiveScroll from 'locomotive-scroll';
 import Loading from '@/components/Loading';

 
 const page = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (

      

    <>
        <Loading/>
        <Page1/>
        
    </>
  
   )
 }
 
 export default page