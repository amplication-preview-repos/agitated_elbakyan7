import * as graphql from "@nestjs/graphql";
import { TruckNextServiceCheckInput } from "./TruckNextServiceCheckInput";
import { MaintenanceService } from "./maintenance.service";

export class MaintenanceResolver {
  constructor(protected readonly service: MaintenanceService) {}

  @graphql.Mutation(() => String)
  async AddOilChangeCostToTrip(
    @graphql.Args()
    args: TruckNextServiceCheckInput
  ): Promise<string> {
    return this.service.AddOilChangeCostToTrip(args);
  }

  @graphql.Query(() => String)
  async CheckOilChangeDue(
    @graphql.Args()
    args: TruckNextServiceCheckInput
  ): Promise<string> {
    return this.service.CheckOilChangeDue(args);
  }
}
