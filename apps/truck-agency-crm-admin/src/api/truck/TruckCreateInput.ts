import { TripCreateNestedManyWithoutTrucksInput } from "./TripCreateNestedManyWithoutTrucksInput";

export type TruckCreateInput = {
  lastServiceDate?: Date | null;
  make?: string | null;
  model?: string | null;
  nextServiceReminder?: Date | null;
  permitExpiryDate?: Date | null;
  trips?: TripCreateNestedManyWithoutTrucksInput;
  vin?: string | null;
  year?: number | null;
};
