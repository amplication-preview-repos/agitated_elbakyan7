import { TruckWhereInput } from "./TruckWhereInput";
import { TruckOrderByInput } from "./TruckOrderByInput";

export type TruckFindManyArgs = {
  where?: TruckWhereInput;
  orderBy?: Array<TruckOrderByInput>;
  skip?: number;
  take?: number;
};
