import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./teaSection.module.css"

function TeaSection(){

    /* fecth server  category*/

    const [categories, setCategories] = useState(null);
    const [productByCategories, setproductByCategories] = useState(null)
    const [price, setPrice] = useState(null)

    useEffect(()=> {
        async function getCategories(){
            try {
                const categoryResult = await (
                    await fetch("/api/v1/tea/categories")
                ).json()
                console.log(categoryResult)
                setCategories(categoryResult.datas)
            } catch (error) {
                console.log(error)
            }
        }
        getCategories();
    },[]);

    useEffect(()=>{
        async function getProductByCategories(){
            try {
                const ProductByCategoriesResult = await (
                    await fetch("/api/v1/tea/listing")
                ).json()
                console.log(ProductByCategoriesResult)
                setproductByCategories(ProductByCategoriesResult.datas)
            } catch (error) {
                console.log(error)
            }
        }
        getProductByCategories();
    },[]);

    useEffect(()=>{
        async function getPrice(){
            try {
                const priceResult = await(
                    await fetch("/api/v1/tea/price")
                ).json()
                console.log(priceResult)
                setPrice(price.datas)
            } catch (error) {
                console.log(error)
            }
        }
        getPrice()
    },[])

    

    return (

        <>
            
            {!categories || !productByCategories ? (
            <p>LOADING ...</p>
            ) : (
               <>   
                {categories.map((category) => (
                    <section className={styles.section}>
                <div key={category.id} className={styles.container}>
                    <h2>{category.label}</h2>
                    <img src={"img/" + category.url_image} alt={category.label} className={styles.categoryImage} />
                    <p>{category.description}</p>

                    {productByCategories
                    .filter((product) => product.category_id === category.id)                    
                    .map((product) => (                        
                        <div key={product.id} className={styles.cards} >
                        <h3>{product.label_1}</h3>
                        <img src={"img/" + product.url_product} alt={product.label_1} />
                        <p> A partir de </p>
                        <p className={styles.price}>9.00€</p>
                        <Link to={"/product_page"} className={styles.buttonLink}>Voir ce produit</Link>
                        </div>
                    ))}
                </div>
            </section>
                ))}
                </>
            )}
        </>
    );
}

export default TeaSection;





