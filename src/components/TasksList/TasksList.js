import React from 'react'
import styles from './TasksList.module.css'

const TasksList = ({taskList, setTaskList, taskToUpdate, setTaskToUpdate, editTask}) => {
  
  function taskDelete(id){
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    ); 
  }

  return (
    <div className={styles.list}>
      {taskList && (
        taskList.map(task => (
          <div key={task.id} className={styles.list_item}>
            <p>{task.title}</p>
            <div>
              <button 
                className={styles.edit}
                onClick={() => editTask(task)}>
                Atualizar
              </button>
              <button 
                className={styles.delete}
                onClick={() => taskDelete(task.id)}>
                  Deletar
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default TasksList