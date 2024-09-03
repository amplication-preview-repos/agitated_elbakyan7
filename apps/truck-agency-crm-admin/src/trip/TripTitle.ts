import { Trip as TTrip } from "../api/trip/Trip";

export const TRIP_TITLE_FIELD = "destination";

export const TripTitle = (record: TTrip): string => {
  return record.destination?.toString() || String(record.id);
};
