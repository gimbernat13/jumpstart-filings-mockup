import React from "react";
import trash from "../../assets/img/trash.svg";
import download from "../../assets/img/download.svg";
import printer from "../../assets/img/printer.svg";
import "./scss/index.scss";
export const ActionsMenu = () => {
  return (
    <div className="actions-menu">
      <div className="actions-menu-dots">
        <div className="actions-menu-dot"></div>
        <div className="actions-menu-dot"></div>
        <div className="actions-menu-dot"></div>
      </div>
      <div className="dropdown">
        <div className="dropdown-inner">
          <div className="dropdown-item active">
            <img className="dropdown-item-icon" src={download} alt="" />
            <div className="dropdown-item-text">Download</div>
          </div>
          <div className="dropdown-item">
            <img className="dropdown-item-icon" src={printer} alt="" />
            <div className="dropdown-item-text">Print</div>
          </div>
          <div className="dropdown-item">
            <img className="dropdown-item-icon" src={trash} alt="" />
            <div id="delete" className="dropdown-item-text">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
