import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";
import Appointment from "./Appointment/index";
import {getAppointmentsForDay, getInterviewersForDay} from "./helpers/selectors";

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
  const dailyAppointments = [];
  const setDay = day => setState({ ...state, day });
  const setDays = days => setState({ ...state, days });


  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewer: all[2].data }));
      const [first, second, third] = all;

    });
}, [])
function bookInterview(id, interview) {
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  };
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };
  setState({...state, appointments});
  window.location.reload(false);
  return axios.put('/api/appointments/'+id, appointment);
}
let map1 = getAppointmentsForDay(state, state.day).map(day => {
  return <Appointment key={day.id}{... day} interviewers={state.interviewer} bookInterview={bookInterview} cancelInterview={cancelInterview}/>
  });

function cancelInterview (id) {
  return axios.delete('/api/appointments/'+id);
}


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


