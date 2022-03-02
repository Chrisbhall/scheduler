import React, { useState } from "react";
import "./styles.scss";
import { action } from "@storybook/addon-actions";

import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import useVisualMode from "../../hooks/useVisualMode";

export default function Appointment(props) {
  
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVE = "SAVE";
  const DELETE = "DELETE";
  const CONFIRM = "CONFIRM";
  const Edit = "EDIT";
  const [deleteId, setDeleteId] = useState();
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  console.log(props);
  function onSave(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    //console.log(interview);
    transition(SAVE, true);
    props.bookInterview(props.id,interview);
    transition(SHOW, true);
  }
  function onDelete(id){
    setDeleteId(id);
    transition(CONFIRM);
    //transition(DELETE, true);
    //props.cancelInterview(id);
    //transition(EMPTY, true);
  }
  function onEdit(){
    transition(Edit);
  }
  function onCancel(){
    back();
  }
  function onConfirm(){
    console.log(deleteId);
    transition(DELETE, true);
    props.cancelInterview(deleteId);
    transition(EMPTY, true);
  }

  console.log(props.interview);
    return (
      <article className="appointment">
        {props.time === undefined && <p>no appointments</p>}
        {props.time !== undefined && <p>appointment at {props.time}</p>}
        <Header/>
        {props.interview !== undefined && props.interview !== null && mode === SHOW &&<Show student={props.interview.student} id={props.id} interviewer={props.interview.interviewer} onEdit={onEdit} onDelete={onDelete} />}
        {props.interview === undefined && <Empty onAdd={action("onAdd")} />}
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SAVE && <Status message="Saving..." />}
        {mode === DELETE && <Status message="Deleting..." />}
        {mode === CONFIRM && <Confirm message="Are you sure you would like to delete?" onCancel={onCancel} onConfirm={onConfirm} />}
        {mode === Edit && props.interview.student && props.interview.interviewer && <Form student={props.interview.student} interviewer={props.interview.interviewer} interviewers={props.interviewers} onSave={onSave} back={back}/>}
        {mode === CREATE && <Form interviewers={props.interviewers} onSave={onSave} back={back}/>}

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