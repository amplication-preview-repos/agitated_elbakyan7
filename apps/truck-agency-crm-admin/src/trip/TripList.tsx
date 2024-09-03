import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { TRUCK_TITLE_FIELD } from "../truck/TruckTitle";

export const TripList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Trips"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Destination" source="destination" />
        <ReferenceField label="Driver" source="driver.id" reference="Driver">
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
    </List>
  );
};
