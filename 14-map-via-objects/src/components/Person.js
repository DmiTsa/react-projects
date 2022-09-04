function Person(props) {
  const { id, name, img } = props;

  return (
    <div className="card">
      <h3>ID number: {id}</h3>
      <h3>Name: {name}</h3>
      <h3>Reff: {img}</h3>
    </div>
  );
}

export default Person;
