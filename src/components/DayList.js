import React from "react";
import DayListItem from "./DayListItem";
import "./DayListItem.scss";

export default function DayList(props) {
  /*
manages the daylist on the left side
  */
  const map1 = props.days.map(days => <DayListItem key={days.id} name={days.name} spots={days.spots} selected={days.name===props.day} setDay={props.setDay}></DayListItem>);
    return (
      <ul>
      {map1}
      </ul>
  );
}