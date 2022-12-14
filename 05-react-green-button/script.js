const App = () => {
  React.state('Click me');

  let buttonText = 'CLICK ME';
  const onButtonClick = () => {
    buttonText = 'Hello from React';
  };
  return (
    <div className="app">
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
