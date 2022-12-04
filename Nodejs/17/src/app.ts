import prisma from "./lib/prisma/client";
import express from "express";
import "express-async-errors";
import {
    validate,
    validationErrorMiddleware,
    userSchema,
    UserData
 } from "./lib/validation";

const app = express();
app.use(express.json())

app.get("/users", async (request, response) => {
    const users = await prisma.user.findMany()
    response.json(users)
})

app.post("/users", validate({body: userSchema}), async (request, response) => {

    const user: UserData = request.body;

    response.status(201).json(user);
});


app.use(validationErrorMiddleware)

export default app
