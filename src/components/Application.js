import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";
import Appointment from "./Appointment/index";
import getAppointmentsForDay from "./helpers/selectors";
import getInterviewersForDay from "./helpers/selectors";
/*const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer:{
        id: 3,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Archie Andrews",
      interviewer:{
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  {
    id: 5,
    time: "4pm",
  }
];*/


const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

export default function Application(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: [],
    interviewer: []
  });
  const dailyAppointments = [];
  const setDay = day => setState({ ...state, day });
  const setDays = days => setState({ ...state, days });
  //const [interviewer, setInterviewer] = useState("");

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
    ]).then((all) => {
      //console.log(all[0].data); // first
      //console.log(all[1].data); // second
      //console.log(all[2]); // third
      //getAppointmentsForDay(all[1].data, state.day);
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewer: all[2].data }));
      const [first, second, third] = all;
      // /console.log(first, second, third);
    });
    
    


    /*const testURL = `http://localhost:8001/api/days`;
    axios.get(testURL).then(response => {
      console.log(response.data);
      setDays(response.data);
    });*/
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
  console.log(appointment);
  setState({...state, appointments});
  console.log(id);
  axios.put('/api/appointments/'+id, appointment);
}
function cancelInterview (id) {
  console.log(id);
  axios.delete('/api/appointments/'+id);
}

//getAppointmentsForDay(state.days, state.day);
//getInterviewersForDay(state.days, state.day);   interviewers for the day in array
const map1 = getAppointmentsForDay(state, state.day).map(day => {
  console.log(day);
return <Appointment key={day.id}{... day} interviewers={state.interviewer} bookInterview={bookInterview} cancelInterview={cancelInterview}/>
});
//console.log(getAppointmentsForDay(state, state.day));
//{...state.appointments[day]}

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
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}

/*
<Appointment key={state.appointments.id} {...state.appointments[1]} />
      <Appointment key={state.appointments.id} {...state.appointments[2]} />
      <Appointment key={state.appointments.id} {...state.appointments[3]} />
      <Appointment key={state.appointments.id} {...state.appointments[4]} />
      <Appointment key={state.appointments.id} {...state.appointments[5]} />



      <Appointment key={appointments[0].id} id={appointments[0].id} time={appointments[0].time} interview={appointments[0].interview} />
      <Appointment key={appointments[1].id} id={appointments[1].id} time={appointments[1].time} interview={appointments[1].interview} />
      <Appointment key={appointments[2].id} id={appointments[2].id} time={appointments[2].time} interview={appointments[2].interview} />
      <Appointment key={appointments[3].id} id={appointments[3].id} time={appointments[3].time} interview={appointments[3].interview} />
      <Appointment key={appointments[4].id} id={appointments[4].id} time={appointments[4].time} interview={appointments[4].interview} />
      */

