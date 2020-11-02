import React from "react";
import { ActionsMenu } from "../ActionsMenu/ActionsMenu";
import "./scss/index.scss";
import notebook from "../../assets/img/notebook.svg";
export const InfoCard = (props) => {
  const { isHovered, title } = props;
  return (
    <div className="inline-block">
      <h2>{title} </h2>
      <div className="info-card">
        {isHovered ? <ActionsMenu /> : null}
        <div className="info-card-inner">
          <div className="info-card-icon">
            <img src={notebook} alt="" />
          </div>
          <div className="info-card-title">Corporate Bylaws</div>
          <p className="info-card-description">
            An internal document that details the operating rules for the
            corporation and are typically adopted at the organizational meeting
            of the board of directors.
          </p>
          <button className="info-card-button">View document</button>
        </div>
      </div>
    </div>
  );
};
