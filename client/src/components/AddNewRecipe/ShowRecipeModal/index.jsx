import React from 'react'
import style from './style.module.css'

function ShowRecipeModal({ setModalOpen }) {


  return (
    <div className={style.newReModalBackground}>
      <div className={style.newReModalContainer}>
        <div className={style.newReTitleCloseBtn}>
          <button
            onClick={() => {
              setModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className={style.title}>
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className={style.body}>
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className={style.footer}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default ShowRecipeModal



