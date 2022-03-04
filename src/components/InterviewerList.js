import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types';

import "./InterviewerList.scss";


export default function InterviewerList(props) {
  /*
manages the interviewer list in the form
  */
  const map1 = Object.values(props.interviewers).map(interviewers => <InterviewerListItem key={interviewers.id} id={interviewers.id} name={interviewers.name} selected={interviewers.id === props.interviewer} avatar={interviewers.avatar} setInterviewer={props.setInterviewer}></InterviewerListItem>);

  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };
    return (
      <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
      {map1}
      </ul>
      </section>
    );
   }


 
