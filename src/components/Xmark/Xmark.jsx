import styles from "./Xmark.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const Xmark = ({onClose}) => {
  return <div className={`${styles.Xmark}`}>
    <div
      onClick={() => onClose()}
      className={`${styles.X}`}
    >
      <FontAwesomeIcon icon={faXmark} color="black"/>
    </div>
  </div>
}