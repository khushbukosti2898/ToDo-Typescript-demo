import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Edit from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const List: React.FC<IPeopleProps> = ({
  people,
  setPeople,
  handleEdit,
}): JSX.Element => {
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

  const handleEditData = (data: React.MouseEvent<any, MouseEvent>) => {
    handleEdit(data);
  };

  const renderList = (): JSX.Element[] => {
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    return people.map((person) => {
      return (
        <li key={person.key}>
          <p className={`${person.status && "line-through"}`}>
            Name: {person.name}, Age: {person.age}, Address: {person.address}
            <IconButton placeholder="Edit" onClick={() => handleEditData(person)}>
              <Edit />
            </IconButton>
            <IconButton onClick={() => deleteItem(person.key)}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => checkItem(person.key)}>
              {person.status ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
            </IconButton>
          </p>

          <IconButton aria-label="fingerprint" color="secondary">
            <Fingerprint />
          </IconButton>
          <Checkbox
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
          <Checkbox
            {...label}
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
          />

          <hr />
        </li>
      );
    });
  };

  return <ul className="p-0">{renderList()}</ul>;
};

export default List;
