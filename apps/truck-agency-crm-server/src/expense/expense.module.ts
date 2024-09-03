import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExpenseModuleBase } from "./base/expense.module.base";
import { ExpenseService } from "./expense.service";
import { ExpenseController } from "./expense.controller";
import { ExpenseResolver } from "./expense.resolver";

@Module({
  imports: [ExpenseModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExpenseController],
  providers: [ExpenseService, ExpenseResolver],
  exports: [ExpenseService],
})
export class ExpenseModule {}
