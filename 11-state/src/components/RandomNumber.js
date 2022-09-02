import { useState } from 'react';
import generateRand from '../utils/generateRand';

function RandomNumber(props) {
  const { maxNum } = props;
  const [randomNumber, setRandomNumber] = useState(generateRand(maxNum));
  const clickNum = () => setRandomNumber(generateRand(maxNum));
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
