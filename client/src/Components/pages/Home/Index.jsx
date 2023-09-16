import { Link } from "react-router-dom";
import styles from "./home.module.css";


import OffredeNoel from '../../../assets/offre-noel.jpg';
// import TheNoir from './img/1.jpg';
import TheNoir from "../../../assets/1.jpg";
import TheVert from "../../../assets/2.jpg";
import TheOolong from "../../../assets/3.jpg";
import TheBlanc from "../../../assets/4.jpg";
import TheRooibos from "../../../assets/5.jpg";

function Home(){
    return(
        <>
            <main>
            <section className="top-promo">

                <div className={styles.mobileHidden}>

                        <h1>C'est noël, profitez-en!</h1>
                        <img className="christmas-promo" src={OffredeNoel} alt="Offre promotionelle"/>

                        <p className="mini">Pour toute commande effectué avant le 20 décembre</p>

                </div>

                <section className={styles.choice}>
                    <div>
                            <h2 class="dot"><span>Choisissez votre thé</span></h2>


                    </div>
                    <div className={styles.choiceTea}>
                            <Link href="">
                                    <img src={TheNoir} alt=""/>  {/* Lien à modifier avec images dans BDD */}
                                    <p>Thé noir</p>
                            </Link>
                            <Link href="">
                                    <img src={TheVert} alt=""/> {/* Lien à modifier avec images dans BDD */}
                                    <p>Thé vert</p>
                            </Link>
                            <Link href="">
                                    <img src={TheOolong} alt=""/> {/* Lien à modifier avec images dans BDD */}
                                    <p>Oolong</p>
                            </Link>
                            <Link href="">
                                    <img src={TheBlanc} alt=""/> {/* Lien à modifier avec images dans BDD */}
                                    <p>Thé blanc</p>
                            </Link>
                            <Link href="">
                                    <img src={TheRooibos} alt=""/> {/* Lien à modifier avec images dans BDD */}
                                    <p>Thé Rooibos</p>
                            </Link>
                    </div>
                </section>
            </section>

            <section className={styles.news}>
                 <div>
                         <h2 className="dot"><span>Notre nouveauté</span></h2>
                         <img src="./ressources/assets/img/product/product1_big.jpg" alt=""/>
                         <p>Thé du hammam</p>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, tenetur, in neque atque nulla deserunt officia tempora dignissimos dolorem magnam.</p>
                         <p>A partir de</p>
                         <p>0.00€</p>
                         <a href="./pages/product.html">
                                 <p>Voir ce produit</p>
                         </a>
                 </div>
                 <div>
                         <h2 className="dot"><span>Notre best-seller</span></h2>
                         <img src="./ressources/assets/img/product/product4_big.jpg" alt=""/>
                         <p>Infusion Herboriste</p>
                         <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, error delectus nulla qui porro provident ex dignissimos blanditiis animi quas.</p>
                         <p>A partir de</p>
                         <p>0.00€</p>
                         <a href="./pages/product.html">
                                 <p>Voir ce produit</p>
                         </a>
                 </div>
                 <div>
                         <h2 className="dot"><span>Notre coup de coeur</span></h2>
                         <img src="./ressources/assets/img/product/product3_big.jpg" alt=""/>
                         <p>Blue of London</p>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sed molestiae eum deleniti pariatur libero ab illo minima aperiam amet.</p>
                         <p>A partir de</p>
                         <p>0.00€</p>
                         <a href="./pages/product.html">
                                 <p>Voir ce produit</p>
                         </a>
                 </div>
             
                </section>
                        
            </main>
        </>
    )
}


export default Home;


                
        {/* // <div class="slider">
        //         <figure class="slider-figure is-active">
        //                 <figcaption>
        //
        //                 </figcaption>
        //                 <img src="./ressources/assets/img/slider/1.jpg" alt="">
        //         </figure>
        //         <figure class="slider-figure">
        //                 <figcaption>
        //
        //                 </figcaption>
        //                 <img src="./ressources/assets/img/slider/2.jpg" alt="">
        //         </figure>
        //      
        //         <nav>
        //                 <a href="#" class="slider-nav-link prev"><i class="fa-solid fa-chevron-left"></i></a>
        //                 <a href="#" class="slider-nav-link next"><i class="fa-solid fa-chevron-right"></i></a>
        //              
        //         </nav>
        //      
        // </div>
        //  */}