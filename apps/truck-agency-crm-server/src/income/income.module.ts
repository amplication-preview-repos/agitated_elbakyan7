import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IncomeModuleBase } from "./base/income.module.base";
import { IncomeService } from "./income.service";
import { IncomeController } from "./income.controller";
import { IncomeResolver } from "./income.resolver";

@Module({
  imports: [IncomeModuleBase, forwardRef(() => AuthModule)],
  controllers: [IncomeController],
  providers: [IncomeService, IncomeResolver],
  exports: [IncomeService],
})
export class IncomeModule {}
