"use client"
import "../css/strategy.css"
import features from "../assest/img/features.jpg"
import Image from "next/image"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
function Strategy() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
           <section className="feature" id="strategy" data-aos="fade-right">
      <div className="section__container feature__container">
        <div className="feature__image">
        <Image
              src={features}
              alt=" features"
            className="ftimg"
              width={1000}
              height={1000}
              loading="lazy"
              placeholder="blur"
              data-aos="zoom-in" 
            />
        </div>
        <div className="feature__content">
          <h2 className="section__header"    data-aos="zoom-in" >HOW WE WORK</h2>
          <ul>
            <li   data-aos="fade-right">
            Initial Client Consultation
            </li>
            <li data-aos="fade-left">Establish Clear Project Objectives </li>
            <li data-aos="fade-right">Create a Detailed Project Proposal </li>
            <li data-aos="fade-left">Regular Communication </li>
            <li data-aos="fade-right">3D Visualizations and Renderings </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Strategy