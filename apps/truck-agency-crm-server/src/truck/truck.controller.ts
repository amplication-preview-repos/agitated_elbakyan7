import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TruckService } from "./truck.service";
import { TruckControllerBase } from "./base/truck.controller.base";

@swagger.ApiTags("trucks")
@common.Controller("trucks")
export class TruckController extends TruckControllerBase {
  constructor(
    protected readonly service: TruckService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
