"use client"

import React, { useState } from "react";
import wrk7 from "@/assest/img/17.jpg"

import Image from "next/image";
import Test from "./Carousel";
const Work = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-20 pb-12 lg:pt-[59px] lg:pb-[90px] dark:bg-dark" id="work">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold section__header">
                Our Recent Projects
                </span>
              
                <p className="text-body-color text-base dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary txthover"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary txthover"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("branding")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "branding"
                        ? "activeClasses bg-primary txthover"
                        : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary txthover"
                    }`}
                  >
                    Branding
                  </button>
                </li>
               
               
               
              </ul>
            </div>
          </div>
          <div className="">
            <PortfolioCard
              ImageHref={wrk7}
              category="Branding"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
         
             {showCard === "all" && <Test />}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "Branding" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
       
            <Image
                src={ImageHref}
                alt="portfolio"
                className="w-full"
                width={500}
                height={500}
                loading="lazy"
                placeholder="blur"
              />
             
          </div>
         
        </div> 
      </div>
    </>
  );
};