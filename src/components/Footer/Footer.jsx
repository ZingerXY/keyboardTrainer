import React from "react";
import Style from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={`${Style["App-footer"]}`}>
      <div className={`${Style["footer"]} container`}>
        <p className={`${Style["footer_text"]}`}>2022&nbsp;&mdash; Дипломный проект &laquo;Клавиатурный&nbsp;тренажер&raquo;</p>
      </div>
    </footer>
  );
};

export default Footer
