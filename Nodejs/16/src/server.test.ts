import { prismaMock } from "./lib/prisma/client.mock";

import supertest from "supertest";

import app from "./app";

const request = supertest(app);


test("GET /users", async () => {
    const users = [
        {
            id: 1,
            name: "Pippo",
            email: "pippo@gmail.com",
        },
        {
            id: 2,
            name: "Pluto",
            email: "pluto@gmail.com",
        },
    ];

    //@ts-ignore
    prismaMock.user.findMany.mockResolvedValue(users)
    const response = await request
        .get("/users")
        .expect(200)
        .expect("Content-Type", /application\/json/)
    expect(response.body).toEqual(users);

});

