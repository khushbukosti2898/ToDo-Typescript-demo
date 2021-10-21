import React from "react";
import Button from "@material-ui/core/Button";

const List: React.FC<IPeopleProps> = ({ people, setPeople }) => {
  const deleteItem = (key: string) => {
    const updatedPeople = people.filter((person) => person.key !== key);
    setPeople(updatedPeople);
  };

  const checkItem = (key: string) => {
    const updatedPeople = people.map((person) => {
      if (person.key === key) {
        return {
          ...person,
          status: !person.status,
        };
      }
      return person;
    });
    setPeople(updatedPeople);
  };

  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li key={person.key}>
          <p className={`${person.status && "line-through"}`}>
            Name: {person.name}, Age: {person.age}, Address: {person.address}
          </p>
          <Button
            variant="outlined"
            color="primary"
            className="cursor-pointer"
            onClick={() => deleteItem(person.key)}
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            className="cursor-pointer"
            onClick={() => checkItem(person.key)}
          >{`${person.status ? "Clear" : "Check"}`}</Button>
          <hr />
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
