import express, { Router } from "express";
import prisma from "../lib/prisma/client";
import { initMulterMiddleware } from "../lib/middleware/multer";
import { validate, userSchema, UserData } from "../lib/middleware/validation";
const upload = initMulterMiddleware();

const router = Router();

router.get("/", async (request, response) => {
    const users = await prisma.user.findMany();
    response.json(users);
});

router.post("/", validate({ body: userSchema }), async (request, response) => {
    const user: UserData = request.body;

    response.status(201).json(user);
});

router.get("/:id(\\d+)", async (request, response, next) => {
    const userId = Number(request.params.id);
    const user = await prisma.user.findUnique({
        where: { id: userId },
    });
    if (!user) {
        response.status(404);
        return next(`Cannot GET /users/${userId}`);
    }
    response.json(user);
});

router.put(
    "/:id(\\d+)",
    validate({ body: userSchema }),
    async (request, response, next) => {
        const userId = Number(request.params.id);
        const userData: UserData = request.body;
        try {
            const user = await prisma.user.update({
                where: { id: userId },
                data: userData,
            });
            response.status(200).json(user);
        } catch (error) {
            response.status(404);
            next(`Cannot PUT /users/${userId}`);
        }
    }
);

router.delete("/:id(\\d+)", async (request, response, next) => {
    const userId = Number(request.params.id);

    try {
        const user = await prisma.user.delete({
            where: { id: userId },
        });

        response.status(204).end();
    } catch (error) {
        response.status(404);
        next(`Cannot DELETE /users/${userId}`);
    }
});

router.post(
    "/:id(\\d+)/photo",
    upload.single("photo"), //"photo" corrisponde con il name che sta nell'input nell'HTML
    async (request, response, next) => {
        console.log("request.file", request.file);
        if (!request.file) {
            response.status(400);
            return next("No photo file uploaded");
        }

        const photoFilename = request.file.filename;
        response.status(201).json({ photoFilename });
    }
);

export default router;
