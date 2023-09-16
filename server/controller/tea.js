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
     const query = "SELECT * FROM tea INNER JOIN category ON tea.category_id = category.id"

     const [datas] = await Query.find(query)

     res.status(200).json({datas})
}




export { getAll,getPrice,getCategory, getProductByCategories };