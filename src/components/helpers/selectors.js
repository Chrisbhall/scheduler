function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  const result =[];
  let app = "";
  for (let i = 0; i < state.days.length; i++) {
    if(state.days[i].name === day) {
    for (let j = 0; j <state.days[i].appointments.length; j++) {
      app = state.days[i].appointments[j];
      result.push(state.appointments[app]);
    }
  }
  }
  //console.log(result);
  return (result);
}
 function getInterviewersForDay(state, day) {
  const result =[];
  let app = "";
  for (let i = 0; i < state.days.length; i++) {
    if(state.days[i].name === day) {
    for (let j = 0; j <state.days[i].appointments.length; j++) {
      app = state.days[i].appointments[j];
      result.push(state.appointments[app]);
    }
  }
  }
  //console.log(result);
  return (result);
  //... returns an array of Interviewers for that day
  /*const result =[];
  let app = "";
  for (let i = 0; i < state.length; i++) {
    if(state[i].name === day) {
    for (let j = 0; j <state[i].interviewers.length; j++) {
      app = state[i].interviewers[j];
      result.push(state[i].interviewers[app]);
    }
  }
  }
  //console.log(result);
  return (result);*/
}

 function getInterview(state, interview) {
  console.log(state);
  if (interview === null){
    return null;
  }
  const result2 = {student: interview.student, interviewer: state.interviewers[interview.interviewer]};
 //const interviewer = state.interviewers[interview.interviewer];
 console.log(result2);
  return (result2);
}

export {getAppointmentsForDay, getInterviewersForDay, getInterview}