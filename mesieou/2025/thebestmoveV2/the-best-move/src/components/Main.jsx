import Lottie from "lottie-react";
import animationData from "../assets/Marketing/animations/map.json";
import houseMoveAnimation from "../assets/Marketing/animations/house-relocation-service.svg";
import furnitureAnimation from "../assets/Marketing/animations/movers-picking-up-sofa.svg";
import businessAnimation from "../assets/Marketing/animations/relocation-service-application.svg";
import oneRemovalist from "../assets/Marketing/animations/moving-house-services.svg";
import twoRemovalists from "../assets/Marketing/animations/movers-picking-up-sofa.svg";

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
      <section className="section2" id="services">
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
      <section className="section2" id="pricing">
        <h1>Simple pricing</h1>
        <h2 className="no-space-h3">No hidden fees. No surprises</h2>
        <p>Pay only for the time we spend moving your belongings. Time starts and end at our depot in Blackburn South</p>
        <div className="pricing-cards">
          <div className="card-hourly-rate">
            <h3 className="h3-centered">One Removalist</h3>
            <img className='animation-image-card'src={oneRemovalist} alt="cheap house removalist packing a house in Melbourne" />
            <h1 className="hourly-rate">$95/hour</h1>
            <p className="title-pricing-text">It might require assistance from your at pick up and drop off locations</p>
          </div>
          <div className="card-hourly-rate">
            <h3 className="h3-centered">Two Removalists</h3>
            <img className='animation-image-card'src={twoRemovalists} alt="best high-quality Melbourne removalists doing a same-day job" />
            <h1 className="hourly-rate">$145/hour</h1>
            <p className="title-pricing-text">Enjoy from a full hands-off removalist experience</p>
          </div>
        </div>
      </section>
      <section className="section3" id="contact">
        <div className="form-title-description">
          <h1>Contact us</h1>
          <h2 className="no-space-h3">Get in touch with us</h2>
          <p>Phone: 0401 234 567</p>
          <p>Email: info@thebestmove.com.au </p>
          <br />
          <p>Call us or send us a message to book your move today</p>
        </div>
        <div className="contact-form ">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <textarea placeholder="Message"></textarea>
            <button>Send</button>
          </form>
        </div>
      </section>
    </>
  );
}
// style={{position: 'absolute', top:'300px'}}