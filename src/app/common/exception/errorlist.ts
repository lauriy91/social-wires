/* eslint-disable prettier/prettier */

// types of errors
export enum ErrorStatusResponse {
  badrequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notfound = 404,
  methodnotallowed = 405,
  toomanyrequests = 429,
  internalservererror = 500,
  serviceunavailable = 503,
}
