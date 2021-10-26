interface IPeopleState<T> {
  name: string
  age: T
  address: string
  key: string
  status: boolean
  createdAt?: string
  updatedAt?: string
}

interface IPeopleProps {
  people: IPeopleState[]
  setPeople: React.Dispatch<React.SetStateAction<IPeopleState[]>>
}

interface IStaticList {
  name: string
}

interface IStaticListProps {
  data: IStaticList[]
}