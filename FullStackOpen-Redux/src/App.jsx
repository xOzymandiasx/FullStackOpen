import Anecdotes from "./Anecdotes/components/Anecdotes";
import AnecdotesApp from "./anecdotesReactQuery/components/AnecdotesApp";
import Notes from "./components/Notes";
import CounterMain from "./counterUseReducer/CounterMain";
import NotesApp from "./notesReactQuery/components/NotesApp";
import UniCafe from "./unicafe/components/UniCafe";

const App = () => {
  return (
    <div>
      {/* <Notes /> */}
      {/* <Anecdotes /> */}
      {/* //*App de notesReactQuery; */}
      {/* <NotesApp /> */}
      {/* //*App AnecdotesReact-query */}
      {/* <AnecdotesApp /> */}
      {/* //*App CounterUseReducer */}
      <CounterMain />
    </div>
  )
}

export default App;