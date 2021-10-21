interface IPeopleState {
  name: string;
  age: number;
  address: string;
  key: string,
  status: boolean,
}

interface IPeopleProps {
  people: IPeopleState[];
  setPeople: React.Dispatch<React.SetStateAction<IPeopleState[]>>;
}