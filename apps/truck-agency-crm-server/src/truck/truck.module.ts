import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TruckModuleBase } from "./base/truck.module.base";
import { TruckService } from "./truck.service";
import { TruckController } from "./truck.controller";
import { TruckResolver } from "./truck.resolver";

@Module({
  imports: [TruckModuleBase, forwardRef(() => AuthModule)],
  controllers: [TruckController],
  providers: [TruckService, TruckResolver],
  exports: [TruckService],
})
export class TruckModule {}
