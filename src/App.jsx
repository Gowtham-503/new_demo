import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,reset } from './store/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor:"#282c34" ,color:"white" }}>
      <h1>Hello Redux with Vite 🚀</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button onClick={() => dispatch(decrement()) }> Decrease </button>
      <button onClick={() => dispatch(reset())} >reset</button>
    </div> 
  )
}

export default App;

