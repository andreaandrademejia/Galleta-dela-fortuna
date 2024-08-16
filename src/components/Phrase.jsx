import React from 'react';

const Phrase = ({ phraseSelected }) => {
	return (
		<p className="text-x1 text-center font-semibold mb-6">
			{phraseSelected.phrase}
		</p>
	);
};

export default Phrase;
