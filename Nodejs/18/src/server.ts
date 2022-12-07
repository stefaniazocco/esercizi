import "dotenv/config"
import app from "./app"

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`server running at port http://localhost:${port}`)
})