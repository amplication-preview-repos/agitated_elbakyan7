import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MaintenanceService } from "./maintenance.service";
import { TruckNextServiceCheckInput } from "./TruckNextServiceCheckInput";

@swagger.ApiTags("maintenances")
@common.Controller("maintenances")
export class MaintenanceController {
  constructor(protected readonly service: MaintenanceService) {}

  @common.Post("/add-oil-change-cost")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddOilChangeCostToTrip(
    @common.Body()
    body: TruckNextServiceCheckInput
  ): Promise<string> {
        return this.service.AddOilChangeCostToTrip(body);
      }

  @common.Get("/check-oil-change-due")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CheckOilChangeDue(
    @common.Body()
    body: TruckNextServiceCheckInput
  ): Promise<string> {
        return this.service.CheckOilChangeDue(body);
      }
}
