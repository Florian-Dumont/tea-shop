import Query from "../../model/Query.js";
// import formidable from "formidable";

async function home(req, res){
    
    
    const query = "SELECT label_1, description FROM tea";
    const [data] = await Query.find(query);
  
 // envoyer une réponse en json à notre "front-end" ( react )
    res.json({ data });
}

export { home };