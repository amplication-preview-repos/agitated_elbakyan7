import { SortOrder } from "../../util/SortOrder";

export type TruckOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastServiceDate?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  nextServiceReminder?: SortOrder;
  permitExpiryDate?: SortOrder;
  updatedAt?: SortOrder;
  vin?: SortOrder;
  year?: SortOrder;
};
