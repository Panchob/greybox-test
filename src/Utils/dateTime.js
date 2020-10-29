
export function dateTime(date = new Date()) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours =  hours ? hours: 12
  minutes = minutes < 10 ? '0'+ minutes : minutes;

  return date.getFullYear() + "-"
    + (date.getMonth()+1)  + "-" 
    + date.getDate() + " "
    + hours + ":"  
    + minutes + " "
    + ampm
}