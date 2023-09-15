import Query from "../model/Query.js";
import bcrypt from "bcrypt";



// page de vue de l'app
// la page home
async function home(req, res){

    const query = "SELECT label_1, description FROM tea";
    const [data] = await Query.find(query);
  
 // envoyer une réponse en json à notre "front-end" ( react )
    res.json({ data });
}






// page de connection
async function signin(req, res){
    res.status(200).render("layout", {template: "signin"});
}

async function logInUser(req, res){
   
    if(!req.body.email || !req.body.password) {
        res.redirect("/signin/login?msg=Pas%20de%20champs%20vide%20!");
        return;
    }
    const query = "SELECT alias, email, password FROM user WHERE email = ? "; // je sélectionne les données dont j'ai besoin pour la connexion et je vérifie si il existe un utilisateur avec l'adresse mail entré dans le formulaire avec ? (sql comprend avec le ? que je pointe la comparaison avec le champs du formulaire)

    const [user] = await Query.findByValue(query, req.body.email); // je vérifie par rapport à une valeur cf model/Query.js
    console.log(user);
    if(user.length) {  // je vérifie que mon tableau contient quelquechose
        console.log(user[0].password); // l'élément à vérifier est le tableau user donc user[0]
        const same = await bcrypt.compare(req.body.password, user[0].password);
        console.log(same);
        if(same) {
            req.session.user = { isLogged: true, email: req.body.email };
            res.redirect("/");
        } else {
            res.redirect("/signin/login?msg=Mot%20de%20passe%20erroné%20!%20Contactez%20l'administrateur%20!")
        }
    } else res.redirect("/signin/login?msg=Email%20inconnu%20!");
}

// déconnexion

async function logOutUser (req,res){
        req.session.destroy();
        res.redirect('/');
}

// page de création de compte
async function signup(req, res){
    res.status(200).render("layout", {template: "signup"});
}

async function addUser(req, res){
    try {
        const query = "SELECT alias, email, password FROM user WHERE alias = ? "; // ici le ? correspond au req.body.alias
        const [user] = await Query.findByValue(query, req.body.alias); // les crochets permettent d'instancier un tableau vide, car sinon récupère aussi les info des paramètre de la table de la BDD
        console.log(user);

        if(user.length){
            console.log("utilisateur trouvé")
        }
        if(!user.length){
            console.log("utilisateur inexistant")
            const hash = await bcrypt.hash(req.body.password, 10);
            console.log(hash)
            const user = {
                            // id: user.length ? Math.max(...user.map(user => user.id)) +1 : 1, //ici on ne gère pas les id car ils sont en AUTO_INCREMENT
                            alias: req.body.alias,
                            email: req.body.email,
                            password : hash,
                            creation_date: new Date()
            }
            const query2 = "INSERT INTO user (alias, email, password, creation_date) VALUE (?, ?, ?, NOW())"
            const result = await Query.write(query2, user);
            res.redirect("/")
        }
    } catch (error) {
        throw Error (error)
    }
};
export {home, signin , logInUser, logOutUser, signup, addUser};