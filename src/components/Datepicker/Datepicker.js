import React, { useState } from "react";
import { vi } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import "./Datepicker.scss";

export default function Datepicker() {
  const [date, setDate] = useState();
  return (
    <DatePicker date={date} onDateChange={setDate} locale={vi}>
      {({ inputProps, focused }) => (
        <input
          className={"input datepicker-input" + (focused ? " -focused" : "")}
          {...inputProps}
          placeholder="Ngày khởi hành"
        />
      )}
    </DatePicker>
  );
}
