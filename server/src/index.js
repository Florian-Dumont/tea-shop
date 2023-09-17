import express from "express";
import cors from "cors";
import "dotenv/config";
import router from "./router/index.routes.js"; 

const app = express();

// permets la communication sans restriction entre 2 points d'origine différente ici le PORT entre notre node et react
    app.use(express.static("public"))
    .use(cors())
    .use(router)    
    .use(express.urlencoded({ extended: true }))
    .use(express.json())


app.get("/api/v1/tea/all", (req, res) => {

    // effectuer la requete SQL 

});

app.listen(9000, () => console.log("running on http://localhost:9000"));
