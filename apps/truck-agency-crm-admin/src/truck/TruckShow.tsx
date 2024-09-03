import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { TRUCK_TITLE_FIELD } from "./TruckTitle";

export const TruckShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="LastServiceDate" source="lastServiceDate" />
        <TextField label="Make" source="make" />
        <TextField label="Model" source="model" />
        <TextField label="NextServiceReminder" source="nextServiceReminder" />
        <TextField label="PermitExpiryDate" source="permitExpiryDate" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VIN" source="vin" />
        <TextField label="Year" source="year" />
        <ReferenceManyField reference="Trip" target="truckId" label="Trips">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Destination" source="destination" />
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="EndDate" source="endDate" />
            <TextField label="Fare" source="fare" />
            <TextField label="ID" source="id" />
            <TextField label="PetrolCost" source="petrolCost" />
            <TextField label="StartDate" source="startDate" />
            <ReferenceField label="Truck" source="truck.id" reference="Truck">
              <TextField source={TRUCK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
