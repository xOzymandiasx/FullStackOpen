import Part from "./Part";
import Total from "./Total";

const Content = ({ data }) => {
  const {name, parts} = data;
  return (
    <>
    <h2>{name}</h2>
    {parts.map(item => <Part key={item.id} data={item}/>)}
    <Total data={data}/>
    </>
  );
};

export default Content;
