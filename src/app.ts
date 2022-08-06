import express, { Application, json, urlencoded } from 'express'
import appRouter from './router';

const app: Application = express()
const port = 3000

/**
 * Middlewares
 */
app.use(
    json(),
    urlencoded()
)

app.use(appRouter);

app.listen(port, () => {
    console.log(`Server is running on prot: ${port}`)
})

export default app;