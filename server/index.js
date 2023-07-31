const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const routes=require("./routes/Todo");
const PORT=8000;
const app=express();

// @ts-ignore
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json({ extended: false }));
app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.use("/api/todo",routes);
mongoose.connect(
  "mongodb+srv://kalpanakathait07:vNzOMnEoGJ2huGzq@cluster0.kcydfi7.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
    console.log("connection Estblished.");
    app.listen(PORT,()=>{
        console.log(`App running on ${8000}`);
    })
});