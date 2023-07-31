const express=require("express");
const router=express.Router();
const {getAllTodo, CreateTodo,UpdateTodo, DeleteTodo}= require("../controllers/Todo");
//getting all the tasks
router.get("/",getAllTodo);

//post new Task

router.post("/",CreateTodo);

router.put("/:id",UpdateTodo);

router.delete("/:id",DeleteTodo);


module.exports=router;