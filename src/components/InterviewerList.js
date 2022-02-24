import React from "react";
import InterviewerListItem from "./InterviewerListItem";

import "./InterviewerList.scss";


export default function InterviewerList(props) {
  const map1 = props.interviewers.map(interviewers => <InterviewerListItem key={interviewers.id} name={interviewers.name} selected={interviewers.name === props.interviewer} avatar={interviewers.avatar} setInterviewer={props.setInterviewer}></InterviewerListItem>);

    return (
      <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
      {map1}
      </ul>
      </section>
    );
   }


 
