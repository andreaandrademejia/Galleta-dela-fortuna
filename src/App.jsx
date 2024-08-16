import React, { useState } from "react";
import quotes from "./data/phrases.json";
import getRandomNumbers from "./utils/getRandomNumbers";
import Phrase from "./components/Phrase";
import photos from "./data/photos.json";
import BtnPhrase from "./assets/components/BtnPhrase";
import "./App.css"; 

function App() {
  const [phraseSelected, setPhraseSelected] = useState("");
  const [bgSelected, setBgSelected] = useState("");
  const [showPhrase, setShowPhrase] = useState(false); 

  const handleClick = () => {
    const indexRandom = getRandomNumbers(quotes.length);
    setPhraseSelected(quotes[indexRandom]);
    setBgSelected(photos[getRandomNumbers(photos.length)]);
    setShowPhrase(true);
  };

  const objStyles = {
    backgroundImage: bgSelected
      ? `url(/images/fondo${bgSelected}.png)`
      : "none",
  };

  return (
    <div style={objStyles}>
      <h1>Galleta de la Fortuna</h1>
      <CSSTransition
        in={showPhrase}
        timeout={500}
        classNames="phrase"
        unmountOnExit
      >
        <Phrase phraseSelected={phraseSelected} />
      </CSSTransition>
      <article>
        <BtnPhrase handleClick={handleClick} />
      </article>
      <footer></footer>
    </div>
  );
}

export default App;

//function App() {
//const indexRandom = getRandomNumbers(quotes.length);
//const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom]);
//const [bgSelected, setBgSelected] = useState(
//photos[getRandomNumbers(photos.length)]

//  );

//const objStyles = {
//backgroundImage: `url(/images/fondo${bgSelected}.png)`,
//};

//return (
//<div style={objStyles}>
// <h1>Galleta de la Fortuna</h1>
//<Phrase phraseSelected={phraseSelected} />
//<article>
//<BtnPhrase
//setPhraseSelected={setPhraseSelected}
//setBgSelected={setBgSelected}
// />
// </article>
// <footer></footer>
// </div>
// );
//}

//export default App;
