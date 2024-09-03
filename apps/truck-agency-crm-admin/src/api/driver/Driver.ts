import { Trip } from "../trip/Trip";

export type Driver = {
  address: string | null;
  createdAt: Date;
  id: string;
  licenseNumber: string | null;
  name: string | null;
  phoneNumber: string | null;
  trips?: Array<Trip>;
  updatedAt: Date;
};
