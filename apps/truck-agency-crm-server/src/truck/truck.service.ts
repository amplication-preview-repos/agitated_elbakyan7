import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TruckServiceBase } from "./base/truck.service.base";

@Injectable()
export class TruckService extends TruckServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
