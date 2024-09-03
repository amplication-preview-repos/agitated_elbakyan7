import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { DriverTitle } from "../driver/DriverTitle";
import { TruckTitle } from "../truck/TruckTitle";

export const TripCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Destination" source="destination" />
        <ReferenceInput source="driver.id" reference="Driver" label="Driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <DateTimeInput label="EndDate" source="endDate" />
        <NumberInput label="Fare" source="fare" />
        <NumberInput label="PetrolCost" source="petrolCost" />
        <DateTimeInput label="StartDate" source="startDate" />
        <ReferenceInput source="truck.id" reference="Truck" label="Truck">
          <SelectInput optionText={TruckTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
