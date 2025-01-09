import React from 'react';
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Section1() {
  return (
    <section>
      <DotLottieReact
        src="https://lottie.host/72a8f565-3370-43ab-9a3d-00dce2aa4c3c/vIrjh18P9Q.lottie"
        loop
        autoplay
      />
      <div className="main-message">
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
