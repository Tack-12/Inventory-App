const {Router} = require("express");
const userRouter = Router();
const userController = require("../controllers/userController");

//Category Routes
userRouter.get("/",userController.indexPageGet);
userRouter.get("/editCategory",userController.editCategoryGet);
userRouter.post("/addCategory",userController.addCategoryPost);
userRouter.post("/deleteCategory",userController.deleteCategoryPost);
userRouter.get("/category/:id",userController.getCategoryItem);

//Items Routes

userRouter.get("/editItem",userController.editItemsGet);
userRouter.post("/addItem",userController.addItemsPost);
userRouter.post("/deleteItem",userController.deleteItemsPost);
module.exports= userRouter;