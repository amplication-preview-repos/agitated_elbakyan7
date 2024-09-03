import { Truck as TTruck } from "../api/truck/Truck";

export const TRUCK_TITLE_FIELD = "make";

export const TruckTitle = (record: TTruck): string => {
  return record.make?.toString() || String(record.id);
};
