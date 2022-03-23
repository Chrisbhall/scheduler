import React, { useState } from "react";
import "./styles.scss";
import { action } from "@storybook/addon-actions";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import useVisualMode from "../../hooks/useVisualMode";

export default function Appointment(props) {
  /*
manages each time slot with entering 
time in the header
empty if it's open
shows if it's booked
displays errors if appointment fails to cancel or save
...
  */
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVE = "SAVE";
  const DELETE = "DELETE";
  const CONFIRM = "CONFIRM";
  const Edit = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const [deleteId, setDeleteId] = useState();
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  function onSave(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVE, true);
      props.bookInterview(props.id,interview).then(() => transition(SHOW, true)).catch(() => transition(ERROR_SAVE, true));
  }
  function onDelete(id){
    setDeleteId(id);
    transition(CONFIRM);
  }
  function onEdit(){
    transition(Edit);
  }
  function onCancel(){
    back();
  }
  function onConfirm(){
    transition(DELETE, true);
    props.cancelInterview(deleteId).then(() => transition(EMPTY, true)).catch(() => transition(ERROR_DELETE, true));
  }

    return (
      <article className="appointment">
        {props.time === undefined && <p>no appointments</p>}
        {props.time !== undefined && <p>appointment at {props.time}</p>}
        <Header/>
        {props.interview !== undefined && props.interview !== null && mode === SHOW &&<Show student={props.interview.student} id={props.id} interviewers={props.interviewers} interviewer={props.interview.interviewer} onEdit={onEdit} onDelete={onDelete} />}
        {props.interview === undefined && <Empty onAdd={action("onAdd")} />}
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SAVE && <Status message="Saving..." />}
        {mode === DELETE && <Status message="Deleting..." />}
        {mode === CONFIRM && <Confirm message="Are you sure you would like to delete?" onCancel={onCancel} onConfirm={onConfirm} />}
        {mode === ERROR_SAVE && <Error message="Error could not save appointment" onClose={onCancel}/>}
        {mode === ERROR_DELETE && <Error message="Error could not cancel appointment" onClose={onCancel}/>}
        {mode === Edit && props.interview.student && props.interview.interviewer && <Form student={props.interview.student} interviewer={props.interview.interviewer} interviewers={props.interviewers} onSave={onSave} back={back}/>}
        {mode === CREATE && <Form interviewers={props.interviewers} onCancel={onCancel} onSave={onSave} back={back}/>}

        </article>
  );
}
