import { TripCreateNestedManyWithoutDriversInput } from "./TripCreateNestedManyWithoutDriversInput";

export type DriverCreateInput = {
  address?: string | null;
  licenseNumber?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  trips?: TripCreateNestedManyWithoutDriversInput;
};
