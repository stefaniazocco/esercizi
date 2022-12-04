import { prismaMock } from "./lib/prisma/client.mock";

import supertest from "supertest";

import app from "./app";

const request = supertest(app);

describe("GET /users", () => {
    test("Valid request", async () => {
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
})

describe("POST /users", () => {
    test("Valid request", async () => {
        const user = {
                name: "Paperino",
                email: "paperino@gmail.com"
            }

        const response = await request
            .post("/users")
            .send(user)
            .expect(201)
            .expect("Content-Type", /application\/json/);
        expect(response.body).toEqual(user);
    });
    test("Invalid request", async () => {
        const user = {
            name: "Paperino",
        }

        const response = await request
            .post("/users")
            .send(user)
            .expect(422)    //unprocessable entity cioè i dati vengono letti ma la struttura è sbagliata (manca il l'email)
            .expect("Content-Type", /application\/json/);

        expect(response.body).toEqual({
            errors: {
                body: expect.any(Array)
            }
        });
    });
})

