import Lottie from "lottie-react";
import animationData from "../assets/Marketing/animations/map.json";
import houseMoveAnimation from "../assets/Marketing/animations/preparing-to-move-house.svg";
import furnitureAnimation from "../assets/Marketing/animations/movers-picking-up-sofa.svg";
import businessAnimation from "../assets/Marketing/animations/relocation-service-application.svg";


export default function Section1( ) {
  return (
    <>
      <section className="section1">
        <div className="animation">
          <Lottie animationData={animationData} className="map"/>
        </div>
        <div className="main-message" >
          <h1>
            Move
            <span className="key-word">anything</span>
            <br />
            <span className="gray-title">easy and affordable</span>
          </h1>
          <h2>Reliable. Same day. Not breaking your bank</h2>
        </div>
      </section>
      <section className="section2">
        <h1>High-quality services</h1>
        <h2 className="no-space-h3">Stree-free moving experience tailored to your needs</h2>
        <div className="cards">
          <div className="card">
            <h3>House moving</h3>
            <p>From studio apartments to large homes, we have the capacity to move all your belongings safely and efficiently</p>
            <img className='animation-image-card'src={houseMoveAnimation} alt="two removalist doing a house move in Melbourne" />
          </div>
          <div className="card">
            <h3>Furniture moving</h3>
            <p>Our team of experts will ensure a smooth and stress-free move to your delicate furniture or antique</p>
            <img className='animation-image-card' src={furnitureAnimation} alt="furniture removal. Melbourne removalists moving a sofa" />
          </div>
          <div className="card">
            <h3>Commercial moving</h3>
            <p>Our professional movers will take care of your office equipment and furniture, so you can focus on your business</p>
            <img className='animation-image-card' src={businessAnimation} alt="office removal. Melbourne removalists moving office furniture" />
          </div>
    
        </div>
      </section>
    </>
  );
}
// style={{position: 'absolute', top:'300px'}}