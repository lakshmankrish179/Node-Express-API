import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/users.js"

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('Hello from HomePage')
    console.log(" Hello from HomePage");
})

app.use('/users', userRouter);




app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));