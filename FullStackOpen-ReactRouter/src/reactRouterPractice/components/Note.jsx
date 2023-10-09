import { useParams } from "react-router-dom";

const Note = ({notes}) => {

  const id = useParams().id;
  const note = notes.find(item => item.id === Number(id));
  const {content, user} = note;

  return (
    <>
     <div>Note</div>
     <h2>{content}</h2>
     <p>{user}</p>
    </>
  );
};

export default Note;