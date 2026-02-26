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


module.exports= {
    getCategories,
    addCategories,
    deleteCategories,
}