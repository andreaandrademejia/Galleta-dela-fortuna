import React from 'react';

const BtnCookie = ({ setShowCookie, setAnimate }) => {
	const changeCookie = () => {
		setAnimate(true);
		setShowCookie(true);

		setTimeout(() => {
			setAnimate(false);
			setShowCookie(false);
		}, 1000);
	};

	return (
		<button
			className="hover:scale-120 transition-transform cursor-pointer ml-auto block bg-indigo-600 py-2 px-4 rounded-xl text-white"
			onClick={changeCookie}
		>
			Abrir Galleta
		</button>
	);
};

export default BtnCookie;
