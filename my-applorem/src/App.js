import React, { useState } from 'react';
import data from './data';
function App() {
	const [ text, setText ] = useState([]);
	const [ count, setCount ] = useState(0);
	const submitHandelr = (e) => {
		e.preventDefault();
		let amount = count;
		if (count <= 0) {
			amount = 1;
		}
		if (count > 8) {
			amount = 8;
		}
		setText(data.slice(0, amount));
	};
	return (
		<section className="section-center">
			<h3>tired of borung lorem</h3>
			<form className="lorem-form" onSubmit={submitHandelr}>
				<label htmlFor="amount" className="amount" />
				<input type="number" name="amount" id="amount" onChange={(e) => setCount(e.target.value)} />
				<button className="btn" type="submit">
					generate
				</button>
			</form>
			<articlecle className="lorem-text">
				{text.map((item, index) => {
					return (
						<p className="text" key={index}>
							{item}
						</p>
					);
				})}
			</articlecle>
		</section>
	);
}

export default App;
