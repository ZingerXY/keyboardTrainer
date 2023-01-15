import React from 'react';
import ModalWindowStyles from './ModalWindow.module.scss';
import ReactDOM from 'react-dom';

const ModalWindow = ({children}) => {
  
  return ReactDOM.createPortal(
    <>
      <div className={`${ModalWindowStyles.blur}`}/>
      <div className={`${ModalWindowStyles.component}`}>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ModalWindow;