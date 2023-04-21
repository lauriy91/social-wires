/* eslint-disable prettier/prettier */
// import { Timestamp } from "typeorm";

export interface UserBase {
  username: string;
  password: string;
  // created_at: Timestamp;
}

export interface User {
  fullname: string;
  username: string;
  email: string;
  password: string;
  // created_at: Timestamp;
}
