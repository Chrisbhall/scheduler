import React, { useState} from "react";

import "components/Application.scss";
import DayList from "./DayList";
import Appointment from "./Appointment/index";
import {useApplicationData, bookInterview, cancelInterview} from "../hooks/useApplicationData";
import {getAppointmentsForDay} from "./helpers/selectors";

export default function Application(props) {
/*
manages application get information/ passing it down as props to daylist & appointments
*/
const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: [],
  interviewer: []
});
  useApplicationData(state, setState);

  const setDay = day => setState({ ...state, day });

let map1 = getAppointmentsForDay(state, state.day).map(day => {
  return <Appointment state={state} setState={setState} key={day.id}{... day} interviewers={state.interviewer} bookInterview={bookInterview} cancelInterview={cancelInterview}/>
  });

  return (
    <main className="layout">
      <section className="sidebar">
      <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu">
<DayList days={state.days} day={state.day} setDay={setDay} />
</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">
        {map1}
      
      <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}


