import { Injectable } from "@nestjs/common";
import { TruckNextServiceCheckInput } from "./TruckNextServiceCheckInput";

@Injectable()
export class MaintenanceService {
  constructor() {}
  async AddOilChangeCostToTrip(args: TruckNextServiceCheckInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async CheckOilChangeDue(args: TruckNextServiceCheckInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
