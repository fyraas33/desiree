"use client";

import Image from "next/image";
import "../css/hero.css";

import { useEffect, useState } from "react";
import "../css/letter.css";

import bnr1 from "@/assest/img/13.jpg"
import bnr3 from "@/assest/img/16.jpg"
import bnr2 from "@/assest/img/23.jpg"
import bnr4 from "@/assest/img/18.png"
import bnr5 from "@/assest/img/19.jpg"
import bnr6 from "@/assest/img/21.png"
function Hero() {
  useEffect(() => {
    const heroSliderItems = document.querySelectorAll(
      "[data-hero-slider-item]"
    );
    const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
    const heroSliderNextBtn = document.querySelector("[data-next-btn]");

    let currentSlidePos = 0;
    let lastActiveSliderItem = heroSliderItems[0];

    const updateSliderPos = function () {
      lastActiveSliderItem.classList.remove("active");
      heroSliderItems[currentSlidePos].classList.add("active");
      lastActiveSliderItem = heroSliderItems[currentSlidePos];
    };

    const slideNext = function () {
      if (currentSlidePos >= heroSliderItems.length - 1) {
        currentSlidePos = 0;
      } else {
        currentSlidePos++;
      }

      updateSliderPos();
    };

    if (heroSliderNextBtn) {
      heroSliderNextBtn.addEventListener("click", slideNext);
    }

    const slidePrev = function () {
      if (currentSlidePos <= 0) {
        currentSlidePos = heroSliderItems.length - 1;
      } else {
        currentSlidePos--;
      }

      updateSliderPos();
    };

    if (heroSliderPrevBtn) {
      heroSliderPrevBtn.addEventListener("click", slidePrev);
    }

    /**
     * Auto slide
     */

    let autoSlideInterval;

    const autoSlide = function () {
      autoSlideInterval = setInterval(function () {
        slideNext();
      }, 7000);
    };

    const handleMouseOver = () => {
      clearInterval(autoSlideInterval);
    };

    const handleMouseOut = () => {
      autoSlide();
    };

    if (heroSliderNextBtn && heroSliderPrevBtn) {
      // Check if both buttons exist before adding event listeners
      heroSliderNextBtn.addEventListener("mouseover", handleMouseOver);
      heroSliderNextBtn.addEventListener("mouseout", handleMouseOut);
      heroSliderPrevBtn.addEventListener("mouseover", handleMouseOver);
      heroSliderPrevBtn.addEventListener("mouseout", handleMouseOut);
    }

    autoSlide();

    return () => {
      clearInterval(autoSlideInterval);
      if (heroSliderNextBtn && heroSliderPrevBtn) {
        heroSliderNextBtn.removeEventListener("mouseover", handleMouseOver);
        heroSliderNextBtn.removeEventListener("mouseout", handleMouseOut);
        heroSliderPrevBtn.removeEventListener("mouseover", handleMouseOver);
        heroSliderPrevBtn.removeEventListener("mouseout", handleMouseOut);
      }
    };
  }, []);
  return (
    <div className="heroo">
      <section className="hero text-center" aria-label="home" id="home">
        <ul className="hero-slider" data-hero-slider="">
          <li className="slider-item active" data-hero-slider-item="">
            <div className="slider-bg">
              <Image
                src={bnr1}
                alt=" Logo"
                className="img-cover"
                width={1880}
                height={950}
                priority
              />
            </div>
            <p className="label-2 section-subtitle slider-reveal ownr">
              Designer Desire
            </p>
            <h1 className="display-1 hero-title slider-reveal prgrphha">
            ~Design is where science and art break even~ 
 <br />
 Robin Mathew
            </h1>
          </li>
          <li className="slider-item" data-hero-slider-item="">
            <div className="slider-bg">
              <Image
                src={bnr2}
                alt=" Logo"
                className="img-cover"
                width={1880}
                height={950}
                priority
              />
            </div>
            <p className="label-2 section-subtitle slider-reveal ownr">
              Designer Desire
            </p>
            <h1 className="display-1 hero-title slider-reveal prgrphha">
            ~Design is where science and art break even~ 
 <br />
 Robin Mathew

            </h1>
          </li>
          <li className="slider-item" data-hero-slider-item="">
            <div className="slider-bg">
              <Image
                src={bnr3}
                alt=" Logo"
                className="img-cover"
                width={1880}
                height={950}
                priority
              />
            </div>
            <p className="label-2 section-subtitle slider-reveal ownr">
              Designer Desire
            </p>
            <h1 className="display-1 hero-title slider-reveal prgrphha">
            ~Design is where science and art break even~ 
 <br />
 Robin Mathew
            </h1>
          </li>
          <li className="slider-item" data-hero-slider-item="">
            <div className="slider-bg">
              <Image
                src={bnr6}
                alt=" Logo"
                className="img-cover"
                width={1880}
                height={950}
                priority
              />
            </div>
            <p className="label-2 section-subtitle slider-reveal ownr">
              Designer Desire
            </p>
            <h1 className="display-1 hero-title slider-reveal prgrphha">
            ~Design is where science and art break even~ 
 <br />
 Robin Mathew

            </h1>
          </li>
          <li className="slider-item" data-hero-slider-item="">
            <div className="slider-bg">
              <Image
                src={bnr5}
                alt=" Logo"
                className="img-cover"
                width={1880}
                height={950}
                priority
              />
            </div>
            <p className="label-2 section-subtitle slider-reveal ownr">
              Designer Desire
            </p>
            <h1 className="display-1 hero-title slider-reveal prgrphha">
            ~Design is where science and art break even~ 
 <br />
 Robin Mathew

            </h1>
          </li>
          <li className="slider-item" data-hero-slider-item="">
            <div className="slider-bg">
              <Image
                src={bnr4}
                alt=" Logo"
                className="img-cover"
                width={1880}
                height={950}
                priority
              />
            </div>
            <p className="label-2 section-subtitle slider-reveal ownr">
              Designer Desire
            </p>
            <h1 className="display-1 hero-title slider-reveal prgrphha">
            ~Design is where science and art break even~ 
 <br />
 Robin Mathew

            </h1>
          </li>
        </ul>

       <a href="mailto:sstkdesign@gmail.com">
          <div className="hero-btn has-after">  <div className="">
    <div
      className="relative bg-black w-[200px] sm:w-[200px] group transition-all duration-700 aspect-video flex items-center justify-center"
    >
      <div
        className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16"
      >
        <p className="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
          Thank You
        </p>
        <p className="px-10 text-[10px] sm:text-[12px] text-gray-700">
          It’s so nice that you had the time to view this idea
        </p>
        <p className="font-serif text-[10px] sm:text-[12px text-gray-700">
          Wishing you a fantastic day ahead!
        </p>
        <p className="font-sans text-[10px] text-gray-700 pt-5">SMOOKYDEV</p>
      </div>
      <button
        className="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900"
      >
        SMKY
      </button>
      <div
        className="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
      ></div>
      <div
        className="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
      ></div>
      <div
        className="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"
      ></div>
      <div
        className="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"
      ></div>
    </div>
  </div></div>
       </a>
      </section>
    </div>
  );
}

export default Hero;
