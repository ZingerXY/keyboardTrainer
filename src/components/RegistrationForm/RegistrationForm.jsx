import styles from "./style.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Form} from "./Form";

export const RegistrationForm = ({onClose}) => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={`${styles.window}`}>
        <div className={`${styles.Xmark}`}>
          <div
            onClick={() => onClose()}
            className={`${styles.X}`}
          >
            <FontAwesomeIcon icon={faXmark} color="#00A876" size="1x"/>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};