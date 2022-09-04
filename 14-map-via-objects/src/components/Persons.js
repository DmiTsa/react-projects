import Person from './Person';
import persons from '../data/persons';

function Persons() {
  return (
    <div className="cards">
      {persons.map((el) => {
        return <Person key={el.id} {...el} />;
      })}
    </div>
  );
}

export default Persons;
