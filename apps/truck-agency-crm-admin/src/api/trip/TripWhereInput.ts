import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TruckWhereUniqueInput } from "../truck/TruckWhereUniqueInput";

export type TripWhereInput = {
  destination?: StringNullableFilter;
  driver?: DriverWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  fare?: FloatNullableFilter;
  id?: StringFilter;
  petrolCost?: FloatNullableFilter;
  startDate?: DateTimeNullableFilter;
  truck?: TruckWhereUniqueInput;
};
