'use client';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import './gsap.css';

export default function GsapTest() {
  const container = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline()
    tl.to(circle, { x: 400, duration: 2 },1);
    tl.to(circleRed, { x: 400, duration: 1 },"<");

    gsap.to(circleBlue, {
      scrollTrigger: {
        trigger: circleBlue,
        triggerActions: "restart pause reverse pause"
      },
      scale: 2,
      ease: "elastic.out(1,0.3)",
      duration: 3,
      rotation: 360,
    });
  },[])

  return (
      <div ref={container} className="container">
        <div ref={el => circle = el} className="circle"></div>
        <div ref={el => circleRed = el} className="circle red"></div>
        <div ref={el => circleBlue = el} className="circle blue"></div>
      </div>
  )
}
