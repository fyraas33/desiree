
"use client"


import "@/css/footer.css"




import logo from "@/assest/img/logo.png"
import Image from "next/image";


function Footer() {

 


  return (
    <div className="fotter ">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <footer className="bg-neutral-100  text-center text-neutral-600 dark:6 lg:text-left">
        <div className="flex  content-center bg-black justify-center border-b-2 border-neutral-200 p-4 dark:border-neutral-500 lg:justify-center">
          <div className=" mr-12 text-white lg:block  ">
            <h1 className=" ">Follow Us</h1>
          </div>
          
          <div className="ftricon">
            <ul className="ftrul">
    <li >
      <a className="facebook" href="https://www.facebook.com/profile.php?id=61553156021093" target="blank">
        <span />
        <span />
        <span />
        <span />
        <i className="fa fa-facebook" aria-hidden="true" />
      </a>
    </li>
  
    <li>
      <a className="instagram" href="https://www.instagram.com/designer_desire_0/?fbclid=IwAR2g-wjWLvgPnApx3yCe1kWGidlAx0NM1k4Q0VVjy1pJm6F9gl1mEJxALX8" target="blank">
        <span />
        <span />
        <span />
        <span />
        <i className="fa fa-instagram" aria-hidden="true" />
      </a>
    </li>
   
  </ul>
          </div>

          
        </div>
       
        <div className=" content-center cntttnt justify-center border-b-2 border-neutral-200 p-8 dark:border-neutral-500 lg:justify-center">
          <div className=" grid-1 grid gap-8 md:grid-cols-5 lg:flex space-x-4  ftrabts  content-center  justify-center    lg:justify-center mr-20">
          

            <div className=" ftrimg ">
              <Image
                src={logo}
                alt=" Logo"
              
                width={100}
                height={50}
                loading="lazy"
                placeholder="blur"
              />
            
            </div>
            <div className="">
            <div className="vl"></div>
        
       </div>
            <div className="ftrcntc ">
              
          
              <p className=" flex items-center lg:mt-14  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <a
                  href="mailto:sstkdesign@gmail.com"
                  className="body-4 sidebar-link"
                >
                  sstkdesign@gmail.com
                </a>
              </p>
             
            </div>
          
    
     
        
     
     
           
          </div>
          
        </div>
        
        {/*Copyright section*/}
     
            <div className="flex  content-center bg-black justify-center  p-4  lg:justify-center">
              <p
                className=" text-white  ftrtxtdw  "
                
              >
                2023 © Designer Desire - All Rights Reserved - Designed By FIRAAS
              </p>
     
             
            </div>
      
      </footer>
    </div>
  );
}

export default Footer;
