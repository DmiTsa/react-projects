function ResetButton({ count, setCount }) {
  const resetCounter = () => {
    setCount(0);
  };
  return (
    count > 0 && (
      <button className="resetButton" onClick={resetCounter}>
        RESET
      </button>
    )
  );
}

export default ResetButton;
