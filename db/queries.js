const pool= require("./pool");

async function getCategories() {
   const {rows} = await pool.query(`SELECT * FROM categories;`);
   return rows;
}

async function addCategories(category) {
   await pool.query(`INSERT INTO categories(name) VALUES ($1)`,[category]); 
}

async function deleteCategories(category_id) {
   await pool.query(`DELETE FROM categories WHERE category_id=$1;`,[category_id]); 
}

//Items DB query:
async function getItems(){
   const {rows} = await pool.query(`SELECT * FROM items`);
   return rows;
}

async function addItems(name,price,description,cat_id,image_link) {
   await pool.query(`INSERT INTO items(name,price,description,cat_id,image_link) VALUES ($1,$2,$3,$4,$5);`, [name,price,description,cat_id,image_link]);
}

async function deleteItems(item_id) {
   await pool.query(`DELETE FROM categories WHERE item_id=$1;`,[item_id]); 
}

async function getCategoryItem(cat_id){
   const {rows} = await pool.query(`SELECT * FROM items WHERE cat_id = $1`,[cat_id]);
   return rows;
}


module.exports= {
    getCategories,
    addCategories,
    deleteCategories,
    getItems,
    addItems,
    deleteItems,
    getCategoryItem
};