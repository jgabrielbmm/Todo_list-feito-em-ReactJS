import { useEffect, useState } from 'react';
import styles from './TaskInput.module.css';

const TaskInput = ({ setTaskList, taskList, taskToUpdate, updateTask }) => {

  const [title, setTitle] = useState('');
  const [id, setId] = useState(0);


  const addTask = (e) => {
    e.preventDefault();

    if(updateTask){

      updateTask(id, title)

    }else{

      setId(Math.floor(Math.random() * 10000));
      const taskObject = {
        id: id,
        title: title
      }
      setTaskList([...taskList, taskObject]);
      setTitle('');

    }
  }  

  useEffect(() => {
    if(taskToUpdate){
      setId(taskToUpdate.id)
      setTitle(taskToUpdate.title)
    }

  },[taskToUpdate])


  return (
    <form className={styles.form} onSubmit={addTask}>
      <label>
        <span 
        className={styles.label_span}>
          Titulo da tarefa:
        </span>
        <input 
          type="text"
          required
          placeholder="Defina uma tarefa"
          value={title} 
          onChange={(e) => setTitle(e.target.value)}/>
      </label>
      <button>Registar</button>
    </form>
  )
}

export default TaskInput