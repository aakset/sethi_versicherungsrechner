import React from "react";
import "../Durchschnitt.css";
import cat from "../Images/cat.jpg";
import tiger from "../Images/tiger.jpg";
import dear from "../Images/dear.jpg";
import giraffe from "../Images/giraffe.jpg";
import moose from "../Images/moose.jpg";
import lion from "../Images/lion.jpg";
import dog from "../Images/dog.jpg";

function Durchschnitt() {
  return (
    <div>
      <h2>
        Hoppala! Das geht wohl leider nicht. Versuchen Sie es mit der eigenen
        Summe!
      </h2>

      <h3>
        Gerne können Sie, falls Sie zufälligerweise zu viel Zeit haben, diese
        unnötige Gallerie durchschauen!
      </h3>

      <div className="gallery">
        <img src={cat} alt="cat" />
        <img src={tiger} alt="tiger" />
        <img src={dear} alt="dear" />
        <img src={giraffe} alt="giraffe" />
        <img src={moose} alt="moose" />
        <img src={lion} alt="lion" />
        <img src={dog} alt="dog" />
      </div>

    </div>
  );
}

export default Durchschnitt;
