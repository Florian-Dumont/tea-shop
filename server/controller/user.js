import { hash } from "bcrypt";
import Query from "../model/Query.js";
import jsonwebtoken from "jsonwebtoken";

const {sign} = jsonwebtoken;
const {SK} = process.env;
const SALT = 10;

const check_token = async (req, res) => {
    try{
        const queryUser = "SELECT label FROM user WHERE label = ?";
        await Query.findByValue(queryUser, req.params.label);
        res.status(200).json({msg: "Authentifié"});
    }catch (err){
        throw Error(err);
    }
};

const signin = async (req, res) => {
    try{
        
        let msg = "";
        const datas = {label: req.body.label, email: req.body.email};
        const queryUser = "SELECT * FROM user WHERE label = ? AND email = ?";
        const [user] = await Query.findByDatas(queryUser, datas);

        
        if(user.length){
            msg = "Utilisateur trouvé";
            const TOKEN = sign({label: user[0].label}, SK);
            res.status(200).json({msg, TOKEN});
        }else if (!user.length){
            msg = "Mauvais identifiant ou mot de passe";
            res.status(409).json({msg});
        }
    }catch (err){
        throw Error(err);
    }
}



const createAccount = async (req, res) => {
    try {
        let msg = "";
        const datas = { label: req.body.label, email: req.body.email };
        const queryUser =
            "SELECT label, email FROM user WHERE label = ? OR email = ?";
        const [user] = await Query.findByDatas(queryUser, datas);

        if (user.length) {
            msg = "un utilisateur avec cette identifiant ou email existe déjà";
            res.status(409).json({ msg });

        } else if (!user.length) {
            const datas = {
                label: req.body.label,
                email: req.body.email,
                password: await hash(req.body.password, SALT),
            };

            const query =
                "INSERT INTO user (label, email, password, role, created_at) VALUES(?, ?, ?, 'user', NOW())";
            await Query.write(query, datas);

            msg = "utilisateur créé";
            res.status(201).json({ msg });
        }
    } catch (error) {
        throw Error(error);
    }
};


export { check_token, createAccount, signin };