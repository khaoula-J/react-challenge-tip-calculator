import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [price, setPrice] = useState("");
  const [satisfaction, setSatifaction] = useState(0);
  const [satifactionCompany, setSatifactionCompany] = useState(0);

  function priceMenu(sum) {
    setPrice(sum);
  }
  function pourcentage1(p) {
    setSatifaction(p);
  }
  function pourcentage2(p) {
    setSatifactionCompany(p);
  }
  function reset() {
    setPrice("");
    setSatifaction(0);
    setSatifactionCompany(0);
  }
  const globalPourcentage = (satisfaction + satifactionCompany) / 2;
  const finalPrice = Number(price) + Number(globalPourcentage);

  return (
    <div>
      <h1>hello word </h1>
      <InputBil priceMenu={priceMenu} />
      <ClienSatisfaction pourcentage1={pourcentage1} />
      <CompanySatisfaction pourcentage2={pourcentage2} />
      {finalPrice > 0 && (
        <>
          <CalcTip
            price={price}
            globalPourcentage={globalPourcentage}
            finalPrice={finalPrice}
          />
          <ButtonReset reset={reset} />
        </>
      )}
    </div>
  );
}
function InputBil({ priceMenu }) {
  function handelSubmit(e) {
    e.preventDefault;
    priceMenu(e.target.value);
    console.log(e);
  }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label>How much was the bill?</label>

        <input onInput={handelSubmit} placeholder="enter the sum of bill" />
      </form>
    </div>
  );
}

function ClienSatisfaction({ pourcentage1 }) {
  return (
    <div>
      <label>How did you like the service?</label>
      <select
        name="percentageOfSatisfaction"
        onChange={(e) => pourcentage1(Number(e.target.value))}
      >
        <option value="0 ">dissatisfied (0%)</option>
        <option value="5">It was okay (5 %)</option>
        <option value="10">It was good (10 %)</option>
        <option value="20">Absolutely amazing ! (20%)</option>
      </select>
    </div>
  );
}

function CompanySatisfaction({ pourcentage2 }) {
  return (
    <div>
      <label>How did you like the service?</label>
      <select
        name="percentageOfSatisfaction"
        onChange={(e) => pourcentage2(Number(e.target.value))}
      >
        <option value="0 ">dissatisfied (0%)</option>
        <option value="5">It was okay (5 %)</option>
        <option value="10">It was good (10 %)</option>
        <option value="20">Absolutely amazing ! (20%)</option>
      </select>
    </div>
  );
}

function CalcTip({ price, globalPourcentage, finalPrice }) {
  return (
    <p>
      You pay ${finalPrice} (${price} + ${globalPourcentage} tip)
    </p>
  );
}

function ButtonReset({ reset }) {
  return <button onClick={reset}> Reset</button>;
}
