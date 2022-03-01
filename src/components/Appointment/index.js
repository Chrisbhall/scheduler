import React from "react";
import "./styles.scss";
import { action } from "@storybook/addon-actions";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "../../hooks/useVisualMode";

export default function Appointment(props) {
  //console.log(props.interview);
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  console.log(props);

    return (
      <article className="appointment">
        {props.time === undefined && <p>no appointments</p>}
        {props.time !== undefined && <p>appointment at {props.time}</p>}
        <Header/>
        {props.interview !== undefined && props.interview !== null && <Show student={props.interview.student} interviewer={props.interview.interviewer} onEdit={action("onEdit")} onDelete={action("onDelete")} />}
        

        {mode === CREATE && <Form back={back}/>}

        </article>
  );
}
/*
        {props.interview === undefined && <Empty onAdd={action("onAdd")} />}
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show
           student={props.interview.student}
           interviewer={props.interview.interviewer}
          />
        )}
        */