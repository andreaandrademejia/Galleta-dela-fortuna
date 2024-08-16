import React, { useState } from 'react';
import quotes from './data/phrases.json';
import getRandomNumbers from './utils/getRandomNumbers';
import Phrase from './components/Phrase';
import photos from './data/photos.json';
import BtnPhrase from './components/BtnPhrase';

function App() {
	const indexRandom = getRandomNumbers(quotes.length);
	const [phraseSelected, setPhraseSelected] = useState(quotes[indexRandom]);
	const [bgSelected, setBgSelected] = useState(
		photos[getRandomNumbers(photos.length)],
	);

	const objStyles = {
		backgroundImage: `url(/images/fondo${bgSelected}.png)`,
	};

	//	const handleButtonClick = () => {
	//setIsAnimating(true);
	//setShowCookie(true);
	//setTimeout(() => {
	//	setIsAnimating(false);
	//setShowCookie(false);
	//	}, 3000);//
	//};//

	return (
		<div
			style={objStyles}
			className="min-h-screen bg-cover bg-center flex justify-center items-center px-4"
		>
			<h1 className="text-5xl text-left text-white absolute top-20 uppercase font-black drop-shadow-lg stroke">
				🍪🥠 Galleta de la Fortuna 🥠🍪
			</h1>
			<article
				className="max-w-[300px] bg-white p-6 rounded-xl shadow-2x1 border-double border-4
       border-sky-950 font-mono"
			>
				<Phrase phraseSelected={phraseSelected} />
				<BtnPhrase
					setPhraseSelected={setPhraseSelected}
					setBgSelected={setBgSelected}
				/>
			</article>
			<footer
				className="absolute bottom-20 bg-amber-900/75 p-5 rounded-lg
       text-white"
			>
				<p>{phraseSelected.author}</p>
			</footer>
		</div>
	);
}

export default App;
