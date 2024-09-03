/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TripService } from "../trip.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TripCreateInput } from "./TripCreateInput";
import { Trip } from "./Trip";
import { TripFindManyArgs } from "./TripFindManyArgs";
import { TripWhereUniqueInput } from "./TripWhereUniqueInput";
import { TripUpdateInput } from "./TripUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TripControllerBase {
  constructor(
    protected readonly service: TripService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Trip })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTrip(@common.Body() data: TripCreateInput): Promise<Trip> {
    return await this.service.createTrip({
      data: {
        ...data,

        driver: data.driver
          ? {
              connect: data.driver,
            }
          : undefined,

        truck: data.truck
          ? {
              connect: data.truck,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        destination: true,

        driver: {
          select: {
            id: true,
          },
        },

        endDate: true,
        fare: true,
        id: true,
        petrolCost: true,
        startDate: true,

        truck: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Trip] })
  @ApiNestedQuery(TripFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async trips(@common.Req() request: Request): Promise<Trip[]> {
    const args = plainToClass(TripFindManyArgs, request.query);
    return this.service.trips({
      ...args,
      select: {
        createdAt: true,
        destination: true,

        driver: {
          select: {
            id: true,
          },
        },

        endDate: true,
        fare: true,
        id: true,
        petrolCost: true,
        startDate: true,

        truck: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Trip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async trip(
    @common.Param() params: TripWhereUniqueInput
  ): Promise<Trip | null> {
    const result = await this.service.trip({
      where: params,
      select: {
        createdAt: true,
        destination: true,

        driver: {
          select: {
            id: true,
          },
        },

        endDate: true,
        fare: true,
        id: true,
        petrolCost: true,
        startDate: true,

        truck: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Trip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTrip(
    @common.Param() params: TripWhereUniqueInput,
    @common.Body() data: TripUpdateInput
  ): Promise<Trip | null> {
    try {
      return await this.service.updateTrip({
        where: params,
        data: {
          ...data,

          driver: data.driver
            ? {
                connect: data.driver,
              }
            : undefined,

          truck: data.truck
            ? {
                connect: data.truck,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          destination: true,

          driver: {
            select: {
              id: true,
            },
          },

          endDate: true,
          fare: true,
          id: true,
          petrolCost: true,
          startDate: true,

          truck: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Trip })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTrip(
    @common.Param() params: TripWhereUniqueInput
  ): Promise<Trip | null> {
    try {
      return await this.service.deleteTrip({
        where: params,
        select: {
          createdAt: true,
          destination: true,

          driver: {
            select: {
              id: true,
            },
          },

          endDate: true,
          fare: true,
          id: true,
          petrolCost: true,
          startDate: true,

          truck: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
