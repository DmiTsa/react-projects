import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Button from './components/Button';

const captionButtons = [
  'Button 1',
  'Button 2',
  'Button 3',
  'Button 4',
  'EEEE',
  'SHIT!!!',
];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter counter={count} />
      {captionButtons.map((caption, index) => {
        return (
          <Button onClick={incrementCount} caption={caption} key={index} />
        );
      })}
    </div>
  );
}

export default App;
