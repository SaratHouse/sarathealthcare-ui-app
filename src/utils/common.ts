import { EMAIL_REGEX } from "./regex";

export const formatDate = (inputDate: string) =>{
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }as Intl.DateTimeFormatOptions;
    const date = new Date(inputDate);
    return date.toLocaleDateString('en-US', options);
}

export const validateEmail = (email: string) => {
  return EMAIL_REGEX.test(email);
}

export const getFormattedDate = (inputDate: string) =>{
    const date = new Date(inputDate);
    const day = date.getDate();
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
  
    const daySuffix = getDaySuffix(day);
  
    return `${month} ${day}${daySuffix}, ${year}`;
}

const getDaySuffix = (day: number) =>{
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1: return "st";
      case 2: return "nd";
      case 3: return "rd";
      default: return "th";
    }
}