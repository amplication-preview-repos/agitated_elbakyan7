import { SortOrder } from "../../util/SortOrder";

export type TripOrderByInput = {
  createdAt?: SortOrder;
  destination?: SortOrder;
  driverId?: SortOrder;
  endDate?: SortOrder;
  fare?: SortOrder;
  id?: SortOrder;
  petrolCost?: SortOrder;
  startDate?: SortOrder;
  truckId?: SortOrder;
  updatedAt?: SortOrder;
};
