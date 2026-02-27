const db = require("../db/queries");

exports.indexPageGet = async(req,res)=>{
    const category= await db.getCategories();
    const items = await db.getItems();
    res.render("index",{title:"index", categories: category , items:items});
}

//Category CRUD 

exports.editCategoryGet = async(req,res)=>{
    const users = await db.getCategories();
    res.render("editCategory",{title:"edit Category",users: users});
}

exports.addCategoryPost = async(req,res)=>{
    const name = req.body.name;
    await db.addCategories(name);
    res.redirect('/');
}

exports.deleteCategoryPost = async(req,res)=>{
    const id = req.body.cat_id;
    await db.deleteCategories(id);
    res.redirect('/');
}


//Items CRUD

exports.editItemsGet = async(req,res)=>{
    const categories = await db.getCategories();
    const items = await db.getItems();
    res.render("editItem",{title:"edit Category",items: items, categories : categories});
}

exports.addItemsPost = async(req,res)=>{
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const cat_id = req.body.cat_id;
    const image_link = req.body.image_link;
    await db.addItems(name,price,description,cat_id,image_link);
    res.redirect('/');
}

exports.deleteItemsPost = async(req,res)=>{
    const id = req.body.items_id;
    await db.deleteItems(id);
    res.redirect('/');
}

exports.getCategoryItem = async(req,res)=>{
    const id = req.params.id;
    const items = await db.getCategoryItem(id);
    res.render("individualCat",{items: items});
}