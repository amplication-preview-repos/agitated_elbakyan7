import { Driver } from "../driver/Driver";
import { Truck } from "../truck/Truck";

export type Trip = {
  createdAt: Date;
  destination: string | null;
  driver?: Driver | null;
  endDate: Date | null;
  fare: number | null;
  id: string;
  petrolCost: number | null;
  startDate: Date | null;
  truck?: Truck | null;
  updatedAt: Date;
};
