import React from "react";
import "./DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  /*
manages each item/day in the list
  */
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected === true,
    "day-list__item--full": props.spots === 0
  });
    return (
      <li className={dayClass} onClick={() => props.setDay(props.name)}>
        <h2 className="text--regular">{props.name}</h2>
        <FormatSpots spots={props.spots}/>
      </li>
  );
}
const FormatSpots = function (props){
  return(<h3 className="text--light">{props.spots === 0 && "no spots remaining"}
  {props.spots === 1 && props.spots + " spot remaining"}{props.spots > 1 && props.spots + " spots remaining"}</h3>);
}