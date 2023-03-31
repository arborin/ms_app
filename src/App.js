// import styles from './App.module.css';
import { useState, useEffect } from 'react'
import TaskList from './TaskList';


fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.fact);
  })


function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addNewTask = () => {
    const url = "https://catfact.ninja/fact";



    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }

    setTodoList([...todoList, task]);
    setNewTask('');
  }

  useEffect(() => {
    console.log("use effect run");


    return () => {
      console.log("component unmoutned!")
    }

  }, []);


  const deleteTask = (id) => {

    const newList = todoList.filter((item) => item.id !== id)

    setTodoList(newList);
  }

  const complateTask = (id) => {
    const newList = todoList.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed
      }

      return item
    })
    setTodoList(newList);

  }

  return (
    <div className='App'>
      <div className='addTask'>
        <input value={newTask} onChange={(e) => { setNewTask(e.target.value) }} />
        <button onClick={addNewTask}>Add Task</button>
      </div>
      <div className='list'>
        <TaskList todoList={todoList} deleteTask={deleteTask} complateTask={complateTask} />
      </div>
    </div>
  );
}


export default App;