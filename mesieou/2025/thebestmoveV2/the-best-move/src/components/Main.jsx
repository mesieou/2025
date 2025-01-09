import Lottie from "lottie-react";
import animationData from "../assets/Marketing/animations/map.json";

export default function Section1() {
  return (
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
  );
}
// style={{position: 'absolute', top:'300px'}}