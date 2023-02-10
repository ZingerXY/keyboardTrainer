import React from "react";
import Style from "./Footer.module.scss";
import CustomizedAccordions from "../InfoAccordion/InfoAccordion";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Footer = () => {

  return (
    <footer className={`${Style["App-footer"]} `}>
      <div className={`${Style["footer"]} container`}>
        <p className={`${Style["footer_text"]}`}>2022&nbsp;&mdash; Дипломный проект &laquo;Клавиатурный&nbsp;тренажер&raquo;</p>
        <div className={`${Style["socialicons"]}`}>
          <div className={`${Style["socialicons_links"]}`}>

            <div className={`${Style["infoItem"]}`}>
              <Popup
                arrow={false}
                contentStyle={{
                  position: "sticky",
                  border: "none",
                  background: "none",
                  boxShadow: "none",
                  left: "0px",
                  bottom: "1px",
                  left: "0px",
                  width: "100%",
                  margin: "0 auto",
                  display: "flex",
                  placeContent: "center",
                  padding: "0 0 0 5px"
                }}
                className="container"
                trigger={
                  <button className={`${Style["button_info"]}`}>
                    {" "}
                    <img
                      className={`${Style["socialicons_link_svg"]}`}
                      src="img/info.svg"
                      alt=""
                    />{" "}
                  </button>
                }
                position="center center"
              >
                <div className={`${Style["infoAccordion"]}`}>
                  <CustomizedAccordions />
                </div>
              </Popup>


            </div>


            <a target="_blank" className={`${Style["socialicons_link_item"]}`} href="mailto:someone@yoursite.com" title="mail" rel="noreferrer">
              <img className={`${Style["socialicons_link_svg"]}`} src="img/mail.svg" alt="mail" />
            </a>
            <a target="_blank" className={`${Style["socialicons_link_item"]}`} href="https://web.telegram.org/k/#-1585633113" title="telegram" rel="noreferrer">
              <img className={`${Style["socialicons_link_svg"]}`} src="img/teleg.svg" alt="telegram" />
            </a>
            <a target="_blank" className={`${Style["socialicons_link_item"]}`} href="https://vk.com/public218358944" title="vk" rel="noreferrer">
              <img className={`${Style["socialicons_link_svg"]}`} src="img/vk.svg" alt="vk" />
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer
