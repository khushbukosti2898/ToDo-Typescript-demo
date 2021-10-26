import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddListForm from "./components/AddListForm";
import StaticList from "./components/StaticList";

const App: React.FC = (): JSX.Element => {
  const [editData, setEditData] = useState<object>({});
  const [list, setList] = useState<IPeopleState<number>[]>([
    {
      name: "Khushbu",
      age: 12,
      address: "Ahmedbad",
      key: new Date().toUTCString(),
      status: false,
    },
  ]);

  const staticDataList: IStaticList[] = [
    { name: "Captain America" },
    { name: "Iron Man" },
    { name: "Black Widow" },
    { name: "Thor" },
    { name: "Hawkeye" },
    { name: "Vision" },
    { name: "Hulk" },
  ];

  const handleEdit = (data: object): void => {
    setEditData(data);
  };

  return (
    <div className="App">
      <List people={list} setPeople={setList} handleEdit={handleEdit} />
      <AddListForm people={list} setPeople={setList} editData={editData} />
      <StaticList data={staticDataList} />
    </div>
  );
};

export default App;
