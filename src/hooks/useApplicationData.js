import {useEffect } from "react";
import axios from "axios";

export default function useApplicationData(state, setState) {

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewer: all[2].data }));
    });
})



return {useEffect};
};


