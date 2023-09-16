import React from "react";
import styles from "./tea.module.css"
import TeaSection from "./TeaSection"

function Tea() {
    return (
        <>
            <main id="tea" className={styles.main}>
                
            
                <TeaSection/>
               
            
            </main>
        </>
    );
}

export default Tea;



/*          <section class="listing">
                <h2>Thé noir</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut exercitationem ad consequuntur autem ea qui ut, maxime a, porro id iste placeat cumque? Provident tempora nihil quo, eaque iste dolorem enim impedit amet eligendi minima. Laudantium unde quae inventore sed blanditiis sequi veritatis, atque officia similique dolore, fugit qui praesentium autem nihil veniam quidem distinctio nostrum a! Sint, eveniet itaque.</p>

                <article>
                    <h3>Blue of london</h3>
                    <img src="./ressources/assets/img/product/product3.jpg" alt="Blue of london">

                    <p>À partir de </br><strong>7,50 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>

                <article>
                    <h3>Thé des lords</h3>
                    <img src="./ressources/assets/img/product/product6_big.jpg" alt="Thé des lords">

                    <p>À partir de </br><strong>8,20 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>

                <article>
                    <h3>Thé des vahinés</h3>
                    <img src="./ressources/assets/img/product/product7_big.jpg" alt="Thé des vahinés">

                    <p>À partir de </br><strong>9,40 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>
            </section>

            <section class="listing">
                <h4>Thé verts</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut exercitationem ad consequuntur autem ea qui ut, maxime a, porro id iste placeat cumque? Provident tempora nihil quo, eaque iste dolorem enim impedit amet eligendi minima. Laudantium unde quae inventore sed blanditiis sequi veritatis, atque officia similique dolore, fugit qui praesentium autem nihil veniam quidem distinctio nostrum a! Sint, eveniet itaque.</p>

                <article>
                    <h3>Thé du hammam</h3>
                    <img src="./ressources/assets/img/product/product1_big.jpg" alt="Thé du hammam">

                    <p>À partir de </br><strong>8,40 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>

                <article>
                    <h3>Vive le thé !</h3>
                    <img src="./ressources/assets/img/product/product4_big.jpg" alt="Thé des lords">

                    <p>À partir de </br><strong>6,80 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>

                <article>
                    <h3>Thé des alizés</h3>
                    <img src="./ressources/assets/img/product/product5_big.jpg" alt="Thé des vahinés">

                    <p>À partir de </br><strong>9,30 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>
            </section>

            <section class="listing">
                <h4>Oolong</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut exercitationem ad consequuntur autem ea qui ut, maxime a, porro id iste placeat cumque? Provident tempora nihil quo, eaque iste dolorem enim impedit amet eligendi minima. Laudantium unde quae inventore sed blanditiis sequi veritatis, atque officia similique dolore, fugit qui praesentium autem nihil veniam quidem distinctio nostrum a! Sint, eveniet itaque.</p>

                <article>
                    <h3>Vive les fêtes</h3>
                    <img src="./ressources/assets/img/product/product8_big.jpg" alt="Thé de fête">

                    <p>À partir de </br><strong>11,10 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>

                <article>
                    <h3>Fleur d'oranger Ooolong</h3>
                    <img src="./ressources/assets/img/product/product4_big.jpg" alt="Fleur d'oranger Ooolong">

                    <p>À partir de </br><strong>10,90 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>

                <article>
                    <h3>Oolong 7 agrumes</h3>
                    <img src="./ressources/assets/img/product/product10_big.jpg" alt="Oolong 7 agrumes">

                    <p>À partir de </br><strong>13,20 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>
            </section>

            <section class="listing">
                <h4>Thé blanc</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut exercitationem ad consequuntur autem ea qui ut, maxime a, porro id iste placeat cumque? Provident tempora nihil quo, eaque iste dolorem enim impedit amet eligendi minima. Laudantium unde quae inventore sed blanditiis sequi veritatis, atque officia similique dolore, fugit qui praesentium autem nihil veniam quidem distinctio nostrum a! Sint, eveniet itaque.</p>

                <article>
                    <h3>Thé des songes blanc</h3>
                    <img src="./ressources/assets/img/product/product11_big.jpg" alt="Thé de fête">

                    <p>À partir de </br><strong>12,00 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>

                <article>
                    <h3>Bai mu dan</h3>
                    <img src="./ressources/assets/img/product/product12_big.jpg" alt="Fleur d'oranger Ooolong">

                    <p>À partir de </br><strong>9,50 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>

                <article>
                    <h3>Auguille d'argent</h3>
                    <img src="./ressources/assets/img/product/product13_big.jpg" alt="Oolong 7 agrumes">

                    <p>À partir de </br><strong>47,20 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>
            </section>

            <section class="listing">
                <h4>Rooibos</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut exercitationem ad consequuntur autem ea qui ut, maxime a, porro id iste placeat cumque? Provident tempora nihil quo, eaque iste dolorem enim impedit amet eligendi minima. Laudantium unde quae inventore sed blanditiis sequi veritatis, atque officia similique dolore, fugit qui praesentium autem nihil veniam quidem distinctio nostrum a! Sint, eveniet itaque.</p>

                <article>
                    <h3>Rooibos à la verveine</h3>
                    <img src="./ressources/assets/img/product/product14_big.jpg" alt="Rooibos à la verveine">

                    <p>À partir de </br><strong>7,00 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>

                <article>
                    <h3>Spicy Passion</h3>
                    <img src="./ressources/assets/img/product/product15_big.jpg" alt="Spicy Passion">

                    <p>À partir de </br><strong>9,00 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>

                <article>
                    <h3>Rooibos des amants</h3>
                    <img src="./ressources/assets/img/product/product16_big.jpg" alt="Rooibos des amants">

                    <p>À partir de </br><strong>8,20 €</strong></p>
                    
                    <a href="product_page.html"><button type="submit" >Voir ce produit</button></a>
                </article>
            </section> */