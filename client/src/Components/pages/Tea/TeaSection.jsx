import TeaCard from "./TeaCard";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

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
                <section>
                    {categories.map((category) => (

                        <div key={category.id}>
                            <h2>{category.label}</h2>
                            <img src={"img/" + category.url_image} alt={category.label} />
                            <p>{category.description}</p>

                            {console.log("Salut c'est moi que tu cherche le " + productByCategories)}

                            {productByCategories
                                .filter((product) => product.category_id === category.id)
                                .map((product) => (
                                    <div key={product.id}>
                                        <h2>{product.label}</h2>
                                        <img src={"img/" + product.url_image} alt={product.label} />
                                        <p> A partir de </p>
                                        {/* <p>{product.price}</p> */}
                                        <Link to={"/product_page"}>Voir ce produit</Link>
                                    </div>
                                ))}
                        </div>
                    ))}
                </section>
            )}
        </>
    );
}

export default TeaSection;



                // categories.map((category) => (
                //     <section key={category.id} className="listing">
                //         <h2>{category.label}</h2>                    
                //         <img src={"img/" + category.url_image} alt={category.label} />                  
                //         <p>{category.description}</p>                       
                        
                //         {/* <TeaCard key={category.id} />                 */}
                        
                //     </section>
                // ))



                // categories.map((category) => {
                //     const teasForCategory = productByCategories.filter(
                //       (tea) => tea.category_id === category.id
                //     );
                  
                //     return (
                //       <section key={category.id} className="listing">
                //         <h2>{category.label}</h2>
                //         <img src={"img/" + category.url_image} alt={category.label} />
                //         <p>{category.description}</p>
                  
                //         {teasForCategory.map((tea) => (
                //           <TeaCard key={tea.id} tea={tea} />
                //         ))}
                //       </section>
                //     );
                //   })


