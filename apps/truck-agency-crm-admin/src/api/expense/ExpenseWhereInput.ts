import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ExpenseWhereInput = {
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
};
