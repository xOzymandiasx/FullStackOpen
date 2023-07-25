import {store} from "./reducers/noteReducer"

const App = () => {
  return (
    <div>
      <ul>
        {store.getState().map(item => <li key={item.id}>{item.content} <strong>{item.important ? "important" : ""}</strong> </li>)}
      </ul>
    </div>
  )
}

export default App;