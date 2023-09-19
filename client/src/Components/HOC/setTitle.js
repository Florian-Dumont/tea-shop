function setTitle(page){
    switch(page){
        case "/":
            return "Accueil Cup of Tea - Les meilleurs thés au monde sélectionnés pour vous !"
            
        case "/the":
            return "Nos thés - Tous nos thés"

        case "/utilisateur/connexion":
            return "Cup of tea - Connexion utilisateur"

        case "/notre-histoire":
            return "A propos - L'histoire de Cup of tea"

        case "/utilisateur/creer-un-compte":
            return "Cup of tea - Création de compte"

        case "/utilisateur/dashboard":
            return"Cup of tea - Dashboard"    

        default:
        
    }
}
export {setTitle}