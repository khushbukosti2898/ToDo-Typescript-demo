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
  handleEdit: React.MouseEventHandler<IPeopleState>
}
interface IListProps{
  people: IPeopleState[]
  setPeople: React.Dispatch<React.SetStateAction<IPeopleState[]>>
  editData: IPeopleState
}
interface IStaticList {
  name: string
}
interface IStaticListProps {
  data: IStaticList[]
}