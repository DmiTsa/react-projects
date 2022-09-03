function Button(props) {
  const { onClick, caption } = props;
  return <button onClick={onClick}>{caption}</button>;
}

export default Button;
