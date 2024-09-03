import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { TruckController } from "../truck.controller";
import { TruckService } from "../truck.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  id: "exampleId",
  lastServiceDate: new Date(),
  make: "exampleMake",
  model: "exampleModel",
  nextServiceReminder: new Date(),
  permitExpiryDate: new Date(),
  updatedAt: new Date(),
  vin: "exampleVin",
  year: 42,
};
const CREATE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  lastServiceDate: new Date(),
  make: "exampleMake",
  model: "exampleModel",
  nextServiceReminder: new Date(),
  permitExpiryDate: new Date(),
  updatedAt: new Date(),
  vin: "exampleVin",
  year: 42,
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    id: "exampleId",
    lastServiceDate: new Date(),
    make: "exampleMake",
    model: "exampleModel",
    nextServiceReminder: new Date(),
    permitExpiryDate: new Date(),
    updatedAt: new Date(),
    vin: "exampleVin",
    year: 42,
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  id: "exampleId",
  lastServiceDate: new Date(),
  make: "exampleMake",
  model: "exampleModel",
  nextServiceReminder: new Date(),
  permitExpiryDate: new Date(),
  updatedAt: new Date(),
  vin: "exampleVin",
  year: 42,
};

const service = {
  createTruck() {
    return CREATE_RESULT;
  },
  trucks: () => FIND_MANY_RESULT,
  truck: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Truck", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TruckService,
          useValue: service,
        },
      ],
      controllers: [TruckController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /trucks", async () => {
    await request(app.getHttpServer())
      .post("/trucks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastServiceDate: CREATE_RESULT.lastServiceDate.toISOString(),
        nextServiceReminder: CREATE_RESULT.nextServiceReminder.toISOString(),
        permitExpiryDate: CREATE_RESULT.permitExpiryDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /trucks", async () => {
    await request(app.getHttpServer())
      .get("/trucks")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          lastServiceDate: FIND_MANY_RESULT[0].lastServiceDate.toISOString(),
          nextServiceReminder:
            FIND_MANY_RESULT[0].nextServiceReminder.toISOString(),
          permitExpiryDate: FIND_MANY_RESULT[0].permitExpiryDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /trucks/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/trucks"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /trucks/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/trucks"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        lastServiceDate: FIND_ONE_RESULT.lastServiceDate.toISOString(),
        nextServiceReminder: FIND_ONE_RESULT.nextServiceReminder.toISOString(),
        permitExpiryDate: FIND_ONE_RESULT.permitExpiryDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /trucks existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/trucks")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastServiceDate: CREATE_RESULT.lastServiceDate.toISOString(),
        nextServiceReminder: CREATE_RESULT.nextServiceReminder.toISOString(),
        permitExpiryDate: CREATE_RESULT.permitExpiryDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/trucks")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
