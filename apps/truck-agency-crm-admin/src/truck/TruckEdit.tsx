import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { TripTitle } from "../trip/TripTitle";

export const TruckEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="LastServiceDate" source="lastServiceDate" />
        <TextInput label="Make" source="make" />
        <TextInput label="Model" source="model" />
        <DateTimeInput
          label="NextServiceReminder"
          source="nextServiceReminder"
        />
        <DateTimeInput label="PermitExpiryDate" source="permitExpiryDate" />
        <ReferenceArrayInput
          source="trips"
          reference="Trip"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TripTitle} />
        </ReferenceArrayInput>
        <TextInput label="VIN" source="vin" />
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Edit>
  );
};
