import React from "react";
import classNames from "classnames";


import "./InterviewerListItem.scss";


export default function InterviewerListItem(props) {
    const listClass = classNames("interviewers__item", {
      "interviewers__item--selected": props.selected === true
     });

    console.log(props.selected);

    return (
      <li className={listClass} onClick={() => props.setInterviewer(props.name)}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
    
    );
   }
  /* const setInterviewer = function (props){
    console.log(props.id);
    return(<p>{props.name !== "" && props.name}</p>);
  }*/
 /*
      <button
        className={buttonClass}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
*/



 
