function PetInfo(props) {
  const { animal, age, hasPet } = props;
  const text = hasPet ? `My ${animal} is ${age} years old` : "I don't have pet";

  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}
export default PetInfo;
