export const BASE_API_URL = process.env.REACT_APP_API_URL


export enum ErrorMessage {
  INVALID_FULLNAME = '⛔ Full Name is required',
  INVALID_EMAIL = '⛔ Email is required',
  INVALID_MOBILE = '⛔ Mobile is required',
  INVALID_MESSAGE = '⛔ Message is required',
}

export enum ErrorTypes {
  ERROR_EMAIL = 'email',
  ERROR_MOBILE = 'mobile',
  ERROR_FULLNAME = 'fullname',
  ERROR_MESSAGE = 'message',
}

export const errorMessageMap: Record<ErrorTypes, ErrorMessage> = {
  [ErrorTypes.ERROR_EMAIL]: ErrorMessage.INVALID_EMAIL,
  [ErrorTypes.ERROR_MOBILE]: ErrorMessage.INVALID_MOBILE,
  [ErrorTypes.ERROR_FULLNAME]: ErrorMessage.INVALID_FULLNAME,
  [ErrorTypes.ERROR_MESSAGE]: ErrorMessage.INVALID_MESSAGE,
}