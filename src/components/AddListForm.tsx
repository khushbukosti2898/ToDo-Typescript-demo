import React, { useState } from "react";


const AddListForm: React.FC<IPeopleProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState<IPeopleState>({
    name: "",
    age: 0,
    address: "",
    key: "",
    status: false,
  });
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
    setInput({
      name: "",
      age: 0,
      address: "",
      key: "",
      status: false,
    });
  };

  return (
    <div>
      <h3>Add To List</h3>
      <form>
        <input
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Enter name"
          value={input.name}
        />
        <br />
        <input
          onChange={changeHandler}
          type="number"
          name="age"
          placeholder="Enter age"
          value={input.age}
        />
        <br />
        <textarea
          onChange={changeHandler}
          name="address"
          placeholder="Enter address"
          value={input.address}
        />
        <br />
        <input type="button" value="Add" onClick={clickHandler} />
      </form>
    </div>
  );
};

export default AddListForm;
