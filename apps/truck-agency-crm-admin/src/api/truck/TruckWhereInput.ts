import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TruckWhereInput = {
  id?: StringFilter;
  lastServiceDate?: DateTimeNullableFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  nextServiceReminder?: DateTimeNullableFilter;
  permitExpiryDate?: DateTimeNullableFilter;
  trips?: TripListRelationFilter;
  vin?: StringNullableFilter;
  year?: IntNullableFilter;
};
