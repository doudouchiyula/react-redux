import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addToNum } from './store/modules/counterStore'
import { fetchChannels } from './store/modules/channelStore'
import { useEffect } from "react";

function App() {
  const { count } = useSelector(state => state.counter)
  const { channelList } = useSelector(state => state.channle)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchChannels())
  },[dispatch])

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>减</button>
      {count}
      <button onClick={() => dispatch(increment())}>增</button>
      <button onClick={() => dispatch(addToNum(10))}>addTo10</button>
      <button onClick={() => dispatch(addToNum(20))}>addTo20</button>
      <ul>
        {channelList.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
