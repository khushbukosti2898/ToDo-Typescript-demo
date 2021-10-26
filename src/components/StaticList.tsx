import { FC } from "react";

const StaticList: FC<IStaticListProps> = ({ data }) => (
  <>
    <hr />
    <h4>Static List</h4>
    <ul>
      {data.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  </>
);

export default StaticList;
