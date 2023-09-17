import { Link } from "react-router-dom";
import styles from "./home.module.css";
import { useState,useEffect } from "react";

import OffredeNoel from '../../../assets/offre-noel.jpg';


function Home(){

const [categories, setCategories] = useState(null);
const [Product, setProduct ] = useState(null);
const [avgProduct, setAvgProduct] = useState(null);
const [favProduct, setFavProduct] = useState(null);


useEffect(()=> {
        // console.log("salut 2 ")
        async function getCategories(){
            try {
                const categoryResult = await (
                    await fetch("/api/v1/tea/categories")
                ).json()
                setCategories(categoryResult.datas)
                // console.log(categories)
            } catch (error) {
                console.log(error)
            }
        }
        getCategories();
    },[]);
    //console.log(categories)

            useEffect(()=> {
                async function getProduct(){
                    try {
                        const Product = await (
                            await fetch("/api/v1/tea/newproduct")
                        ).json()
                        
                        setProduct(Product.datas)
                        //console.log(Product)
                    } catch (error) {
                        console.log(error)
                    }
                }
                getProduct();
            },[]);

            useEffect(()=>{
                async function getAvgProduct(){
                        try {
                           const avgProduct = await ( await fetch ("/api/v1/tea/bestseller")
                           ).json() 
                           setAvgProduct(avgProduct.datas)    
                        } catch (error) {
                                console.log(error)
                        }
                }
                getAvgProduct();
            },[])

            useEffect(()=>{
                async function getFavProduct(){
                        try {
                            const favProduct = await ( await fetch("api/v1/tea/favorite")
                            ).json()
                            setFavProduct(favProduct.datas)  
                        } catch (error) {
                                console.log(error)
                        }
                }
                getFavProduct();
            },[])

    return(
        <>
            <main>
            <section className={styles.toppromo}>

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

                           {!categories ? (<p>LOADING...</p>) : (categories.map((category) => (

                            <Link href="">
                                    <img src={"img/"+category.url_image } alt=""/>
                                    <p className={styles.categoryLabel}>{category.label}</p>
                            </Link>

                        )))}   
                    </div>
                </section>
            </section>

            <section className={styles.news}>
                 <div>
                         
                         {!Product ? (
                                <p>Loading....</p>
                        ) : (Product.map((lastPro) =>(
                                <>
                                        <h2><span>Notre nouveauté</span></h2>
                                        <img src={"img/" + lastPro.url_product} alt={lastPro.label_1}/>
                                        <p>{lastPro.label_1}</p>
                                        <p>{lastPro.description}</p>
                                        <p>A partir de </p>
                                        <p>9,00€</p>
                                        <Link to ={"/product_page"}>Voir ce produit</Link>  
                                </>  
                        )))}
                         
                 </div>
                  <div>
                        {!avgProduct ? (
                                <p>Loading...</p>
                        ) : (avgProduct.map((avgPro) =>(
                                <>
                                        <h2><span>Notre best-seller</span></h2>
                                        <img src={"img/" + avgPro.url_product} alt={avgPro.label_1}/>
                                        <p>{avgPro.label_1}</p>
                                        <p>{avgPro.description}</p>
                                        <p>A partir de </p>
                                        <p>9,00€</p>
                                        <Link to ={"/product_page"}>Voir ce produit</Link>                                </>
                        )))}
                         
                 </div>
                 <div>  
                        {!favProduct ? (
                                <p>Loading....</p>
                        ) : (favProduct.map((favPro)=>(
                                <>
                                        <h2><span>Notre coup de coeur</span></h2>
                                        <img src={"img/" + favPro.url_product}alt={favPro.label_1}/>
                                        <p>{favPro.label_1}</p>
                                        <p>{favPro.description}</p>
                                        <p>A partir de </p>
                                        <p>9,00€</p>
                                        <Link to ={"/product_page"}>Voir ce produit</Link> 

                                </>
                        )))}
                         
                 </div> 
             
                </section>
                        
            </main>
        </>
    )
}


export default Home;
