import React, { useState } from 'react';
import Button from "../Button";
import InterviewerList from "../InterviewerList";

export default function Form(props) {
const [student, setStudent] = useState(props.student || "");
const [interviewer, setInterviewer] = useState(props.interviewer || null);
const [error, setError] = useState("");
/*
manages form for editing/creating appointment
*/
const reset = function(){
  setStudent("");
  setInterviewer("");
  setError("");
  props.onCancel();
}
function validate() {
  if (student === "") {
    setError("Student name cannot be blank");
    return;
  }else if (interviewer === null){
    setError("An interviewer must be selected");
    return;
  }
  setError("");
  props.onSave(student, interviewer);
}

    return (
<main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off" onSubmit={event => event.preventDefault()} >
      <input
        className="appointment__create-input text--semi-bold"
        name="name"
        type="text"
        value={student}
        placeholder="Enter Student Name"
        onChange={(event) => setStudent(event.target.value)}
        data-testid="student-name-input"
      />
      <section className="appointment__validation">{error}</section>
      <InterviewerList 
     id={interviewer} interviewers={props.interviewers} interviewer={interviewer} setInterviewer={setInterviewer}
    />
    </form>

  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={() => reset()}>Cancel</Button>
      <Button confirm onClick={() => validate()}>Save</Button>
    </section>
  </section>
</main>

  );
}

/*
    
    */