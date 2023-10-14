// JSX ES6 arrow function

const Hello = () => {
	return (
		<div>
			<h1 style={{ color: 'red' }}> Hello world!</h1>
		</div>
	);
};

// step 1 : inject where
const rootContainter = document.querySelector('#root');

// step 2 : Virtual DOM
const root = ReactDOM.createRoot(rootContainter);

// step 3: Which React Element
root.render(/** KEY */ <Hello />);
