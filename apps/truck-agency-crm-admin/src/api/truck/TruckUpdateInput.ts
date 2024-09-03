import { TripUpdateManyWithoutTrucksInput } from "./TripUpdateManyWithoutTrucksInput";

export type TruckUpdateInput = {
  lastServiceDate?: Date | null;
  make?: string | null;
  model?: string | null;
  nextServiceReminder?: Date | null;
  permitExpiryDate?: Date | null;
  trips?: TripUpdateManyWithoutTrucksInput;
  vin?: string | null;
  year?: number | null;
};
