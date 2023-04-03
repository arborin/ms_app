// import styles from './App.module.css';
import { useState, useEffect } from 'react'
import TaskList from './TaskList';
import Axios from 'axios';
import axios from 'axios';


// fetch("https://catfact.ninja/fact")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.fact);
//   })


function App() {

  const url = "https://catfact.ninja/fact";

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [nameCount, setNameCount] = useState('');
  const [searchName, setSearchName] = useState('');

  const addNewTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }

    setTodoList([...todoList, task]);
    setNewTask('');
  }

  useEffect(() => {
    Axios.get(url).then((res) => {
      const fact = res.data?.fact;
      setNewTask(fact);
    })

  }, []);


  const fetchCatFact = () => {

  }

  useEffect(() => {
    fetchCatFact();
  }, []);


  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${searchName}`).then((res) => {
      console.log(res.data);
      setNameCount(res.data.count)
    })
  }


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
      <div>
        <p>ENTER NAME: <span>{nameCount}</span></p>
        <input onChange={(e) => { setSearchName(e.target.value) }} />
        <button onClick={fetchData}>GET DATA</button>
      </div>
      <div className='list'>
        <TaskList todoList={todoList} deleteTask={deleteTask} complateTask={complateTask} />
      </div>
    </div>
  );
}


export default App;