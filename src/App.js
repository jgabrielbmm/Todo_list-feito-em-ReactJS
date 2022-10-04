import { useState } from 'react';

// components
import TaskInput from "./components/TaskInput/TaskInput";
import TasksList from './components/TasksList/TasksList';
import Modal from './components/Modal/Modal';

function App() {
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  const [taskList, setTaskList] = useState([]);

  const hideOrShowModal = (display) => {
    const modal = document.querySelector('#modal');
    if (display){
      modal.classList.remove('hide');
    }else{
      modal.classList.add('hide');
    }
  }

  const editTask = (task) =>{
    hideOrShowModal(true);
    setTaskToUpdate(task);
  }

  const updateTask = (id, title) => {
    const updatedTask = {id, title}
    const updatedItems = taskList.map(task => {
      return task.id === updatedTask.id ? updatedTask : task
    })

    setTaskList(updatedItems);

    hideOrShowModal(false)
  }

  return (
    <div>
      <Modal children={
        <TaskInput 
          taskList={taskList} 
          setTaskList={setTaskList}
          taskToUpdate = {taskToUpdate}
          updateTask = {updateTask}
        />
      }/>
      <header className="title">
      <h1>Todo List feito em ReactJS</h1>
      </header>
      <main>
        <TaskInput 
          setTaskList={setTaskList} 
          taskList={taskList}
        />
        <TasksList 
        taskList={taskList} 
        setTaskList={setTaskList}
        taskToUpdate={taskToUpdate}
        setTaskToUpdate={setTaskToUpdate}
        editTask= {editTask} />
      </main>
      <footer>
        <p>2022 - João Gabriel Bento</p>
      </footer>
    </div>
  );
}

export default App;
