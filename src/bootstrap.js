const Hello = () => <div>Hello react!</div>;

var container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Hello />);
