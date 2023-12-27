import "../css/strategy.css"
import features from "../assest/img/features.jpg"
import Image from "next/image"
function Strategy() {
  return (
    <div>
           <section className="feature" id="strategy">
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
             
            />
        </div>
        <div className="feature__content">
          <h2 className="section__header">HOW WE WORK</h2>
          <ul>
            <li>
            Initial Client Consultation
            </li>
            <li>Establish Clear Project Objectives </li>
            <li>Create a Detailed Project Proposal </li>
            <li>Regular Communication </li>
            <li>3D Visualizations and Renderings </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Strategy