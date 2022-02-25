export function getAppointmentsForDay(state, day) {
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
  console.log(result);
  return (result);
}
