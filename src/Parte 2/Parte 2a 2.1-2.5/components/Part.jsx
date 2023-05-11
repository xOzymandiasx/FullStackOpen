const Part = ({data}) => {

  const {name, exercises} = data;

  return (
    <>
      <p>{name} {exercises}</p>
    </>
  )
}

export default Part;