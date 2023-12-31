"use client"
import Image from 'next/image'
import Level from '../level/Level'
import styles from './tmcard.module.css'
import Link from 'next/link'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
const Tmcard = ({ imageSrc, name, profession ,facebook,mail,instagram,linkedin,phone }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='my-4 mx-6'   data-aos="fade-up">
      <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.front}>
        
        
          
          <Image
                  src={imageSrc}
                  alt="Person Circle"
                  className={styles.personcircle}
                  width={100}
                  height={100}
                  viewBox="0 0 16 16"
                  priority
                />
          <p className={styles.heading}>{name} </p>
          <p className={styles.follow}>{profession}</p>
        </div>
        <div className={styles.back}>
          <p className={styles.heading}>Contact Me</p>
          <a href={`mailto:${mail}`}>
            <svg
    width={100}
    height={100}
      viewBox="0 0 48 48"
      version="1.1"
      fill="currentColor"
      
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
    
      <g
        id="🔍-Product-Icons"
        stroke="none"
        strokeWidth={1}
        fill="currentColor"
        fillRule="evenodd"
        viewBox="0 0 16 16"
      >
        <g id="ic_fluent_mail_48_regular" fill="#fff" fillRule="nonzero">
          <path
            d="M37.75,9 C40.6494949,9 43,11.3505051 43,14.25 L43,33.75 C43,36.6494949 40.6494949,39 37.75,39 L10.25,39 C7.35050506,39 5,36.6494949 5,33.75 L5,14.25 C5,11.3505051 7.35050506,9 10.25,9 L37.75,9 Z M40.5,18.351 L24.6023984,27.0952699 C24.2689733,27.2786537 23.8727436,27.2990297 23.5253619,27.1563978 L23.3976016,27.0952699 L7.5,18.351 L7.5,33.75 C7.5,35.2687831 8.73121694,36.5 10.25,36.5 L37.75,36.5 C39.2687831,36.5 40.5,35.2687831 40.5,33.75 L40.5,18.351 Z M37.75,11.5 L10.25,11.5 C8.73121694,11.5 7.5,12.7312169 7.5,14.25 L7.5,15.499 L24,24.573411 L40.5,15.498 L40.5,14.25 C40.5,12.7312169 39.2687831,11.5 37.75,11.5 Z"
            id="🎨-Color"
          />
        </g>
      </g>
    </svg>
         </a>
  
          <div className={styles.icons}>
           <a href={instagram} target='blank'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="currentColor"
                className="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
           </a>
           <a href={linkedin} target='blank'>
           <svg
   width={32}
   height={32}
   viewBox="0 0 16 16"
   fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 6V11M10.5 11V8.5C10.5 7.39543 9.60457 6.5 8.5 6.5C7.39543 6.5 6.5 7.39543 6.5 8.5V11V6M4 4.5H5M1.5 0.5H13.5C14.0523 0.5 14.5 0.947715 14.5 1.5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H1.5C0.947716 14.5 0.5 14.0523 0.5 13.5V1.5C0.5 0.947716 0.947715 0.5 1.5 0.5Z"
      stroke="#fff"
    />
  </svg>
           </a>
            <a href={`tel:${phone}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="currentColor"
                className="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
       <a href={facebook} target='newblank'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="currentColor"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
               
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
       </a>
          </div>
        </div>
      </div>
   
    </div>
    </div>
  
  
  )
}

export default Tmcard