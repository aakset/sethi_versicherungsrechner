import React, { useState } from "react";
import "../Summe.css";

function Summe() {
  const [inputSumme, setInputSumme] = useState(0);
  const [inputWert, setInputWert] = useState(0);
  const [inputSchaden, setInputSchaden] = useState(0);

  const calculateInsurance = () => {
    const insurance = (inputSumme / inputWert) * inputSchaden;
    return insurance.toFixed(2); 
  };

  return (
    <div className="SummeInput">
      <h1>Versicherungübernahme</h1>
      <div className="InputSumme">
        <label htmlFor="inputSumme">Input Summe:</label>
        <input
          type="number"
          id="inputSumme"
          value={inputSumme}
          onChange={(e) => setInputSumme(parseFloat(e.target.value))}
        />
      </div>

      <div className="WertInput">
        <label htmlFor="inputWert">Input Wert:</label>
        <input
          type="number"
          id="inputWert"
          value={inputWert}
          onChange={(e) => setInputWert(parseFloat(e.target.value))}
        />
      </div>
      
      <div className="SchadenInput">
        <label htmlFor="inputSchaden">Input Schaden:</label>
        <input
          type="number"
          id="inputSchaden"
          value={inputSchaden}
          onChange={(e) => setInputSchaden(parseFloat(e.target.value))}
        />
      </div>
      <p>Die Versicherung übernimmt {calculateInsurance()} CHF des Schadens.</p>
    </div>
  );
}

export default Summe;
