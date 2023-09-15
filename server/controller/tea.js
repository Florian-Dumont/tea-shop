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

    const query = "SELECT label, url_image, description FROM category "

    const [datas] = await Query.find(query)

    res.status(200).json({datas})
}



export { getAll,getPrice,getCategory };