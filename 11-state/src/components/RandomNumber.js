import { useState } from 'react';
import generateRand from '../utils/generateRand';

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(generateRand());
  const clickNum = () => setRandomNumber(generateRand());
  return (
    <div>
      <h1>
        <p>{randomNumber}</p>
      </h1>
      <button onClick={clickNum}>Generate new</button>
    </div>
  );
}

export default RandomNumber;
