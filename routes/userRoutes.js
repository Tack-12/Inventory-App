const {Router} = require("express");
const userRouter = Router();
const userController = require("../controllers/userController");

userRouter.get("/",userController.indexPageGet);
userRouter.get("/editCategory",userController.editCategoryGet);
userRouter.post("/addCategory",userController.addCategoryPost);
userRouter.post("/deleteCategory",userController.deleteCategoryPost)

module.exports= userRouter;