const db = require("../db/queries");

exports.indexPageGet = (req,res)=>{
    res.render("index",{title:"index"});
}

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