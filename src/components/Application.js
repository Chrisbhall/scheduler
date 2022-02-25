import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";
import Appointment from "./Appointment/index";
const appointments = [
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
];


const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
];

export default function Application(props) {
  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState([]);
  const [interviewer, setInterviewer] = useState("");
  useEffect(() => {
    const testURL = `http://localhost:8001/api/days`;
    axios.get(testURL).then(response => {
      console.log(response.data);
      setDays(response.data);
    });
}, [])

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
<DayList days={days} day={day} setDay={setDay} />
</nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>
      </section>
      <section className="schedule">

      <Appointment key={appointments.id} {...appointments[0]} />
      <Appointment key={appointments.id} {...appointments[1]} />
      <Appointment key={appointments.id} {...appointments[2]} />
      <Appointment key={appointments.id} {...appointments[3]} />
      <Appointment key={appointments.id} {...appointments[4]} />
      <Appointment key="last" time="5pm" />
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}

/*
      <Appointment key={appointments[0].id} id={appointments[0].id} time={appointments[0].time} interview={appointments[0].interview} />
      <Appointment key={appointments[1].id} id={appointments[1].id} time={appointments[1].time} interview={appointments[1].interview} />
      <Appointment key={appointments[2].id} id={appointments[2].id} time={appointments[2].time} interview={appointments[2].interview} />
      <Appointment key={appointments[3].id} id={appointments[3].id} time={appointments[3].time} interview={appointments[3].interview} />
      <Appointment key={appointments[4].id} id={appointments[4].id} time={appointments[4].time} interview={appointments[4].interview} />
      */

