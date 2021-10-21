import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import AddListForm from "./components/AddListForm";

const App: React.FC = (): JSX.Element => {
  const [list, setList] = useState<IPeopleState[]>([
    {
      name: "Khushbu",
      age: 12,
      address: "Ahmedbad",
      key: new Date().toUTCString(),
      status: false,
    },
  ]);

  return (
    <div className="App">
      <List people={list} setPeople={setList} />
      <AddListForm people={list} setPeople={setList} />
    </div>
  );
}

export default App;
