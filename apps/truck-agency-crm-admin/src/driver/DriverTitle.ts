import { Driver as TDriver } from "../api/driver/Driver";

export const DRIVER_TITLE_FIELD = "name";

export const DriverTitle = (record: TDriver): string => {
  return record.name?.toString() || String(record.id);
};
