import { IncomeWhereInput } from "./IncomeWhereInput";
import { IncomeOrderByInput } from "./IncomeOrderByInput";

export type IncomeFindManyArgs = {
  where?: IncomeWhereInput;
  orderBy?: Array<IncomeOrderByInput>;
  skip?: number;
  take?: number;
};
