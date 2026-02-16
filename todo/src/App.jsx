import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const clickHandler = () => {
    setCount(count + 1);
    console.log('clickHandler called', task);
    setTask('');
    setTasks([...tasks, task])
  }
  return (
    <>
      <input value={task} onChange={(e) => { setTask(e.target.value) }} placeholder="Enter task" />
      <button onClick={clickHandler}>Add</button>
      <h3>Task List</h3>
      <ul>{
        tasks.map((t) => (<li><input type="checkbox" name="" id="" />{t}<button onClick={clickHandler}>Edit</button><button onClick={clickHandler}>Delete</button></li>))
      }</ul>
    </>
  )
}

export default App
