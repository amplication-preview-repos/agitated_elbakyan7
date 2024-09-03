import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TruckList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Trucks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
