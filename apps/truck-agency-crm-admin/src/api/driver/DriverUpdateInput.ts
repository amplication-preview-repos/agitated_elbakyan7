import { TripUpdateManyWithoutDriversInput } from "./TripUpdateManyWithoutDriversInput";

export type DriverUpdateInput = {
  address?: string | null;
  licenseNumber?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  trips?: TripUpdateManyWithoutDriversInput;
};
