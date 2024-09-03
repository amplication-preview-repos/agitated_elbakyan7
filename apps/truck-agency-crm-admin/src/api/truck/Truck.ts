import { Trip } from "../trip/Trip";

export type Truck = {
  createdAt: Date;
  id: string;
  lastServiceDate: Date | null;
  make: string | null;
  model: string | null;
  nextServiceReminder: Date | null;
  permitExpiryDate: Date | null;
  trips?: Array<Trip>;
  updatedAt: Date;
  vin: string | null;
  year: number | null;
};
