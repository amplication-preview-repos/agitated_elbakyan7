import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IncomeServiceBase } from "./base/income.service.base";

@Injectable()
export class IncomeService extends IncomeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
