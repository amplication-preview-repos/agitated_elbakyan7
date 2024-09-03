import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const IncomeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
