import { Module } from "@nestjs/common";
import { MaintenanceService } from "./maintenance.service";
import { MaintenanceController } from "./maintenance.controller";
import { MaintenanceResolver } from "./maintenance.resolver";

@Module({
  controllers: [MaintenanceController],
  providers: [MaintenanceService, MaintenanceResolver],
  exports: [MaintenanceService],
})
export class MaintenanceModule {}
