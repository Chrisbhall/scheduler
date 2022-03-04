import React from "react";
import classNames from "classnames";


import "./InterviewerListItem.scss";


export default function InterviewerListItem(props) {
  /*
manages each interviewer in the list
  */
    const listClass = classNames("interviewers__item", {
      "interviewers__item--selected": props.selected === true
     });
    return (
      <li className={listClass} onClick={() => props.setInterviewer(props.id)}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
    
    );
   }



 
