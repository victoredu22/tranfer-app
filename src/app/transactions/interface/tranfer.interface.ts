import { Payees } from "./payees.interface";

export interface Tranfer {
  _id?:       string;
  payee:     Payees;
  amount:    number;
  createdAt?: Date;
  updatedAt?: Date;
  __v?:       number;
}

