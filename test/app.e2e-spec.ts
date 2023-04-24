/* eslint-disable prettier/prettier */
import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import { AppModule } from "../src/app.module";
import { TypeORMExceptionFilter } from "@common/exception/typeorm-exceptions.filter";
import { UserDTO } from "@authrepositories/parameters/user.dto";

describe("UsersController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalFilters(new TypeORMExceptionFilter());
    await app.init();
  });

  it("users CRUD", async () => {
    const server = request(app.getHttpServer());

    const currentGetAllRequest = await server.get("/users").expect(200);
    const currentSize = currentGetAllRequest.body.length;

    const newUser: UserDTO = {
      username: "Laura",
      email: "laura@h.com",
      password: "psw",
      fullname: "Laura Rodriguez"
    };
    const newUserRequest = await server
      .post("/users")
      .type("form")
      .send(newUser)
      .expect(201);
    expect(newUserRequest.body.name).toBe(newUser.username);
    expect(newUserRequest.body.id).toBe("" + currentSize);
    const postNewRequest = await server.get("/users").expect(200);
    const postNewSize = postNewRequest.body.length;
    expect(postNewSize).toBe(currentSize + 1);

    const id = newUserRequest.body.id;
    const getUserByIdRequest = await server.get(`/users/${id}`).expect(200);
    expect(getUserByIdRequest.body.id).toBe(id);

  });
});
