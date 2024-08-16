import getRandomNumbers from '../utils/getRandomNumbers';
import quotes from '../data/phrases.json';
import photos from '../data/photos.json';

const BtnPhrase = ({ setPhraseSelected, setBgSelected }) => {
	const handleClick = () => {
		const indexRandom = getRandomNumbers(quotes.length);
		setPhraseSelected(quotes[indexRandom]);
		setBgSelected(photos[getRandomNumbers(photos.length)]);
	};

	return (
		<button
			className="text-center hover:scale-110 transition-transform cursor-pointer ml-16 block bg-lime-600 py-2 px-4 rounded-x1 text-white"
			onClick={handleClick}
		>
			Abrir Galleta
		</button>
	);
};

export default BtnPhrase;
