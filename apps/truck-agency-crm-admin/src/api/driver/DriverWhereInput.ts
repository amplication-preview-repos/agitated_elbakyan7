import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";

export type DriverWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  licenseNumber?: StringNullableFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  trips?: TripListRelationFilter;
};
