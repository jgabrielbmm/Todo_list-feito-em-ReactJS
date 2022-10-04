import React from 'react';
import styles from './Modal.module.css';

const Modal = ({children}) => {
  const closeModal = () => {
    const modal = document.querySelector('#modal');
    modal.classList.add('hide');
  }

  return (
    <div id="modal" className='hide'>
        <div className={styles.fade} onClick={closeModal}></div>
        <div className={styles.modal}>
            <h2>Editar tarefa</h2>
            {children}
        </div>
    </div>
  )
}

export default Modal