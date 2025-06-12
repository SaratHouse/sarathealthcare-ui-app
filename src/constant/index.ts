export const BASE_API_URL = process.env.REACT_APP_API_URL


export enum ErrorMessage {
  INVALID_FIRSTNAME = '⛔ First Name is required',
  INVALID_LASTNAME = '⛔ Last Name is required',
  INVALID_EMAIL = '⛔ Email is required',
  INVALID_MOBILE = '⛔ Mobile is required',
  INVALID_COMPANY = '⛔ Company is required',
  INVALID_MESSAGE = '⛔ Message is required',
}

export enum ErrorTypes {
  ERROR_EMAIL = 'email',
  ERROR_MOBILE = 'mobile',
  ERROR_FIRSTNAME = 'firstname',
  ERROR_LASTNAME = 'lastname',
  ERROR_COMPANY = 'company',
  ERROR_MESSAGE = 'message',
}

export const errorMessageMap: Record<ErrorTypes, ErrorMessage> = {
  [ErrorTypes.ERROR_EMAIL]: ErrorMessage.INVALID_EMAIL,
  [ErrorTypes.ERROR_MOBILE]: ErrorMessage.INVALID_MOBILE,
  [ErrorTypes.ERROR_FIRSTNAME]: ErrorMessage.INVALID_FIRSTNAME,
  [ErrorTypes.ERROR_LASTNAME]: ErrorMessage.INVALID_LASTNAME,
  [ErrorTypes.ERROR_COMPANY]: ErrorMessage.INVALID_COMPANY,
  [ErrorTypes.ERROR_MESSAGE]: ErrorMessage.INVALID_MESSAGE,
}