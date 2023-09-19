import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom"
import React from "react"
import logo from "../../../assets/logo.png"
import styles from "./header.module.css"
// import svg from "../assets/ribbon.svg"


function Header(){

    const {info} = useSelector(state => state.user);

    return(
        <>
        <header className={styles.header}>

                <p className={styles.headerDelivery}>Livraison offerte à partir de 65€ d'achat !</p>
                {/* <img class="rotate" src={svg} alt=""/>   */}

                <div className={styles.ctnShop}>
                                <p className={styles.hidMob}>Mon panier</p>
                                <i class="fa-solid fa-cart-shopping"></i>
                                <p class="shop-price">42.00€</p>
                </div>     

                <div className={styles.logo}>
                        <NavLink to ={"/"}><img src={logo} alt=""/></NavLink>
                </div>

            <nav>
                <NavLink to ={"/"}>Accueil</NavLink>
                <NavLink to ={"/the"}>Thés</NavLink>
                <NavLink to ={"/notre-histoire"}>Notre histoire</NavLink>

                {/* <NavLink to ={"/utilisateur/connexion"}>Connexion</NavLink> */}

                {!info.isLogged ?  
					<NavLink
						to={"utilisateur/connexion"}
						title="vers le formulaire de connexion"
					>connexion</NavLink>
					
					:
					<>
					<NavLink
						to={"utilisateur/dashboard"}
						title="aller à votre espace personnel"
						>dashboard</NavLink>
					<NavLink
						to={"utilisateur/deconnexion"}
						title="Se déconnecter"
						>déconnexion</NavLink>
					</>
					
				}
            </nav>
        </header>
        </>
    )
}
export default Header;







// HTML brut





// <!doctype html>
// <html lang="en">
// <head>
//         <meta charset="UTF-8">
//         <title>Cup of tea</title>
//         <link rel="stylesheet" href="sass/style.css" type="text/css"/>
//         <script src="https://kit.fontawesome.com/c72217183e.js" crossorigin="anonymous"></script>
//         <script src="./js/slider.min.js"></script>
// </head>
// <body>
//         <header>
//                 <p class="header-delivery">Livraison offerte à partir de 65€ d'achat !</p>
//                 <img class="rotate" src="./ressources/assets/img/ribbon.svg" alt="">
//                 <div class="logo">
//                         <a href="#"><img src="./ressources/assets/img/logo.png" alt=""></a>
//                         <div class="ctn-shop">
//                                 <p>Mon panier</p>
//                                 <i class="fa-solid fa-cart-shopping"></i>
//                                 <p class="shop-price">42.00€</p>
//                         </div>
//                 </div>
//                 <nav class="navbar">
//                         <ul>
//                                 <li>Thé</li>
//                                 <li>Grands Crus</li>
//                                 <li>Accesoires</li>
//                                 <li>Epicerie</li>
//                                 <a href="./pages/about.html"><li>Notre histoire</li></a>
//                                 <a href="./pages/login.html"><li>Mon compte</li></a>
//                         </ul>
//                 </nav>
//         </header>
        
        
//         <footer>
//                 <header class="ft-hd">
//                         <div>
//                                 <i class="fa-solid fa-lock"></i>
//                                 <p>PAIMENT SECURISE</p>
//                         </div>
//                         <div>
//                                 <i class="fa-solid fa-truck"></i>
//                                 <p>MA LIVRAISON OFFERTE</p>
//                         </div>
//                         <div>
//                                 <i class="fa-solid fa-money-bill-1"></i>
//                                 <p>CARTE DE FIDELITE</p>
//                         </div>
//                         <div>
//                                 <i class="fa-solid fa-phone"></i>
//                                 <p>SERVICE CLIENT</p>
//                         </div>
//                         <div>
//                                 <i class="fa-solid fa-circle-check"></i>
//                                 <p>GARANTIE QUALITE</p>
//                         </div>
//                 </header>
//                 <section class="nav-ft">
//                         <div>
//                                 <p>CUP OF TEA</p>
//                                 <ul>
//                                         <li>Notre histoire</li>
//                                         <li>Nos boutique</li>
//                                         <li>Le thé de A à Z</li>
//                                         <li>Espace clients professionnels</li>
//                                         <li>Recrutement</li>
//                                         <li>Contactez-nous !</li>
//                                         <li>L'école du Thé</li>
//                                 </ul>
//                         </div>
                                
//                         <div>
//                                 <p>COMMANDER EN LIGNE</p>
//                                 <ul>
//                                         <li>Notre histoire</li>
//                                         <li>Nos boutique</li>
//                                         <li>Le thé de A à Z</li>
//                                         <li>Espace clients professionnels</li>
//                                         <li>Recrutement</li>
//                                         <li>Contactez-nous !</li>
//                                         <li>L'école du Thé</li>
//                                 </ul>
//                         </div>
                                
//                         <div>
//                                 <p>SUIVEZ-NOUS !</p>
//                                 <ul>
//                                         <li>Notre histoire</li>
//                                         <li>Nos boutique</li>
//                                         <li>Le thé de A à Z</li>
//                                         <li>Espace clients professionnels</li>
//                                         <li>Recrutement</li>
//                                         <li>Contactez-nous !</li>
//                                         <li>L'école du Thé</li>
//                                 </ul>
//                         </div>
//                 </section>
                
//         </footer>
        
       
// </body>
// </html>