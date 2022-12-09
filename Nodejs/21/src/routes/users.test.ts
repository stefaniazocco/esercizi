import supertest from "supertest";
import { prismaMock } from "../lib/prisma/client.mock";
import app from "../app";

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
            .expect("Access-Control-Allow-Origin", "http://localhost:8080")
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
            .expect("Content-Type", /application\/json/)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080")

        expect(response.body).toEqual({
            errors: {
                body: expect.any(Array)
            }
        });
    });
});

describe("GET /users/:id", () => {
    test("Valid request", async () => {
        const users =   {
            id: 1,
            email: "pippo@gmail.com",
            name: "Pippo"
          }
        //@ts-ignore
        prismaMock.user.findUnique.mockResolvedValue(users)
        const response = await request
            .get("/users/1")
            .expect(200)
            .expect("Content-Type", /application\/json/)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080")
        expect(response.body).toEqual(users);
    });
    test("User does not exist", async() =>{
        //@ts-ignore
        prismaMock.user.findUnique.mockResolvedValue(null)
        const response = await request
            .get("/users/23")
            .expect(404)
            .expect("Content-Type", /text\/html/)
        expect(response.text).toContain("Cannot GET /users/23")
    });
    test("Invalid user ID", async() =>{
        const response = await request
            .get("/users/asdf")
            .expect(404)
            .expect("Content-Type", /text\/html/)
        expect(response.text).toContain("Cannot GET /users/asdf")
    });
});

describe("PUT /users/:id", () => {
    test("Valid request", async () => {
        const users =   {
            id: 2,
            email: "paperino@gmail.com",
            name: "Paperino"
          }
        //@ts-ignore
        prismaMock.user.update.mockResolvedValue(users)
        const response = await request
            .put("/users/2")
            .send({
                email: "paperino@gmail.com",
                name: "Paperino"
            })
            .expect(200)
            .expect("Content-Type", /application\/json/)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080")
        expect(response.body).toEqual(users);
    });
    test("Invalid request", async () => {
        const user = {
            name: "Paperino"
        }
        const response = await request
            .put("/users/23")
            .send(user)
            .expect(422)    //unprocessable entity cioè i dati vengono letti ma la struttura è sbagliata (manca il name ="Mercury")
            .expect("Content-Type", /application\/json/);
        expect(response.body).toEqual({
            errors: {
                body: expect.any(Array)
            }
        });
    });
    test("User does not exist", async() =>{
        //@ts-ignore
        prismaMock.user.update.mockRejectedValue(new Error("Error"))
        const response = await request
            .put("/users/23")
            .send({
                email: "paperino@gmail.com",
                name: "Paperino"
            })
            .expect(404)
            .expect("Content-Type", /text\/html/)
        expect(response.text).toContain("Cannot PUT /users/23")
    });
    test("Invalid user ID", async() =>{
        const response = await request
            .put("/users/asdf")
            .send({
                email: "paperino@gmail.com",
                name: "Paperino"
            })
            .expect(404)
            .expect("Content-Type", /text\/html/)
        expect(response.text).toContain("Cannot PUT /users/asdf")
    });
});

describe("DELETE /user/:id", () => {
    test("Valid request", async () => {
        const response = await request
            .delete("/users/1")
            .expect(204)        //no content
            .expect("Access-Control-Allow-Origin", "http://localhost:8080")
        expect(response.text).toEqual("");
    });

    test("User does not exist", async() =>{
        //@ts-ignore
        prismaMock.user.delete.mockRejectedValue(new Error("Error"))

        const response = await request
            .delete("/users/23")
            .expect(404)
            .expect("Content-Type", /text\/html/)

        expect(response.text).toContain("Cannot DELETE /users/23")
    });

    test("Invalid user ID", async() =>{

        const response = await request
            .delete("/users/asdf")
            .expect(404)
            .expect("Content-Type", /text\/html/)

        expect(response.text).toContain("Cannot DELETE /users/asdf")
    });

});

describe("POST /users/:id/photo", () => {
    test("Valid request file upload", async () => {
        await request
            .post("/users/23/photo")
            .attach("photo", "test-fixtures/photos/ciao.txt")
            .expect(201)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080")
    });
    test("Invalid user ID", async() => {
        const response = await request
            .post("/users/asdf/photo")
            .expect(404)
            .expect("Content-Type", /text\/html/ )
        expect(response.text).toContain("Cannot POST /users/asdf/photo")
    });

    test("Invalid request with no file upload", async() =>{
        const response = await request
            .post("/users/23/photo")
            .expect(400)        //client error - non ha caricato la foto
            .expect("Content-Type", /text\/html/ )
        expect(response.text).toContain("No photo file uploaded")
    });
});

