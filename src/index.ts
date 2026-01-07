import express from "express";


const expressApp = express();

expressApp.get("/", (req: express.Request, res: express.Response) => {
    res.json({message: "hello world"})
});

expressApp.listen(3000, '0.0.0.0', () => {
    console.log("Server is running on port 3000");
})