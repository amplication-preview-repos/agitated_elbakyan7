import { Income as TIncome } from "../api/income/Income";

export const INCOME_TITLE_FIELD = "id";

export const IncomeTitle = (record: TIncome): string => {
  return record.id?.toString() || String(record.id);
};
