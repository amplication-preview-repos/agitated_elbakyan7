import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { TruckWhereUniqueInput } from "../truck/TruckWhereUniqueInput";

export type TripUpdateInput = {
  destination?: string | null;
  driver?: DriverWhereUniqueInput | null;
  endDate?: Date | null;
  fare?: number | null;
  petrolCost?: number | null;
  startDate?: Date | null;
  truck?: TruckWhereUniqueInput | null;
};
