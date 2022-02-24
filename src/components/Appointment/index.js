import React from "react";
import "./styles.scss";
import { action } from "@storybook/addon-actions";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props) {
  console.log(props);
    return (
      <article className="appointment">
        {props.time === undefined && <p>no appointments</p>}
        {props.time !== undefined && <p>appointment at {props.time}</p>}
        <Header/>
        {props.interview !== undefined && <Show student={props.interview.student} interviewer={props.interview.interviewer} onEdit={action("onEdit")} onDelete={action("onDelete")} />}
        {props.interview === undefined && <Empty onAdd={action("onAdd")} />}
        </article>
  );
}