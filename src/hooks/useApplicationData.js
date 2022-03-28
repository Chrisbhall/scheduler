import {useEffect } from "react";
import axios from "axios";
//cancels interview when it is deleted
export function cancelInterview (id) {;
  return axios.delete('/api/appointments/'+id);
}
//books the interview after saving
export function bookInterview(id, interview, state, setState) {
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview }
  };
  const appointments = {
    ...state.appointments,
    [id]: appointment
  };
  setState({...state, appointments});
  return axios.put('/api/appointments/'+id, appointment);
}
//gets initial information for the app from database
export function useApplicationData(state, setState) {




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


