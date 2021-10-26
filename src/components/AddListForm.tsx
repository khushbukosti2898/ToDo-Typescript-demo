import React, { useCallback, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const AddListForm: React.FC<IListProps> = ({
  people,
  setPeople,
  editData,
}): JSX.Element => {
  const defaultFormData = {
    name: "",
    age: 0,
    address: "",
    key: "",
    status: false,
  };
  const [input, setInput] = useState<IPeopleState<number>>(defaultFormData);

  const handleEditData = useCallback(() => {
    if (Object.keys(editData).length !== 0) {
      setInput(editData);
      const updatedPeople = people.filter(
        (person) => person.key !== editData.key
      );
      setPeople(updatedPeople);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editData]);

  useEffect(() => {
    handleEditData();
  }, [handleEditData]);

  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: [e.target.value],
    });
  };

  const clickHandler = () => {
    if (!input.name || !input.age || !input.address) return;
    setPeople([
      ...people,
      {
        name: input.name,
        age: Number(input.age),
        address: input.address,
        key: new Date().toUTCString(),
        status: false,
      },
    ]);
    setInput(defaultFormData);
  };

  return (
    <div>
      <h3>Add To List</h3>
      <form>
        <TextField
          label="Name"
          name="name"
          variant="standard"
          onChange={changeHandler}
          margin="dense"
          value={input.name || ""}
        />
        <br />
        <TextField
          type="number"
          variant="standard"
          onChange={changeHandler}
          margin="dense"
          name="age"
          label="Age"
          value={input.age || ""}
        />
        <br />
        <TextField
          variant="standard"
          onChange={changeHandler}
          margin="dense"
          name="address"
          label="Address"
          value={input.address || ""}
        />
        <br />
        <Button variant="contained" className="mt-4" onClick={clickHandler}>Add</Button>
      </form>
    </div>
  );
};

export default AddListForm;
