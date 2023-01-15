import React from "react";
import Style from "./Footer.module.scss";


const Footer = () => {
  return (
    <footer className={`${Style["App-footer"]} `}>
      <div className={`${Style["footer"]} container`}>
        <p className={`${Style["footer_text"]}`}>2022&nbsp;&mdash; Дипломный проект &laquo;Клавиатурный&nbsp;тренажер&raquo;</p>
      </div>
      <div className={`${Style["socialicons"]} container`}>
        <div className={`${Style["socialicons_links"]}`}>
          <a target="_blank" className={`${Style["socialicons_link_item"]}`} href="mailto:someone@yoursite.com" title="mail">
            <img className={`${Style["socialicons_link_svg"]}`} src="img/mail.svg" alt="mail" />
          </a>
          <a target="_blank" className={`${Style["socialicons_link_item"]}`} href="https://web.telegram.org/" title="telegram">
            <img className={`${Style["socialicons_link_svg"]}`} src="img/teleg.svg" alt="telegram" />
          </a>
          <a target="_blank" className={`${Style["socialicons_link_item"]}`} href="https://vk.com/" title="vk">
            <img className={`${Style["socialicons_link_svg"]}`} src="img/vk.svg" alt="vk" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer
