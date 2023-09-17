import Query from "../model/Query.js";

const getAll = async (req, res) => {
    
    const query = "SELECT * FROM tea";
    const [datas] = await Query.find(query);
    
    res.status(200).json({ datas });
};

const getPrice = async (req,res) => {

    const query = "SELECT price FROM tea_packaging "

    const [datas] = await Query.find(query)

    res.status(200).json({datas})
}

const getCategory = async (req,res) => {

    const query = "SELECT label, url_image, description, id FROM category "

    const [datas] = await Query.find(query)

    res.status(200).json({datas})
}

const getProductByCategories = async (req,res) =>{
     const query = "SELECT * FROM tea INNER JOIN category WHERE tea.category_id = category.id"

     const [datas] = await Query.find(query)

     res.status(200).json({datas})
}
const getNewProduct = async (req,res)=>{
    const query = " SELECT * FROM tea WHERE id = 4  "

    const [datas] = await Query.find(query)
    res.status(200).json({datas})
}
const getAverageProduct =  async (req,res) => {
    const query = "SELECT * FROM tea WHERE vote_average = 3"

    const [datas] = await Query.find(query)

    res.status(200).json({datas})
}
const getFavoriteProduct = async (req,res) =>{
    const query = "SELECT * FROM tea WHERE our_favorite = 1"

    const [datas] = await Query.find(query)
    res.status(200).json({datas})

}
     



export { getAll,getPrice,getCategory, getProductByCategories,getNewProduct,getAverageProduct,getFavoriteProduct };