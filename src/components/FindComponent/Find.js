import React, { useState } from "react";
import "./Find.scss";
import Datepicker from "../Datepicker/Datepicker";

export default function Find() {
  return (
    <form action="#" className="find-form">
      <div className="find-where">
        <img
          className="find-where-icon"
          src="../../assets/images/des-icon.svg"
        ></img>
        <input
          className="find-where-input"
          placeholder="Bạn muốn đi đâu ?"
          type="text"
        />
      </div>
      <div className="find-submit">
        <div className="find-date">
          <Datepicker />
        </div>
        <button className="button button-find">Tìm</button>
      </div>
    </form>
  );
}
