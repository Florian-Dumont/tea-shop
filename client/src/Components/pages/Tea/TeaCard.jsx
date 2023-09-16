import React from "react"
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"


function TeaCard(){

    /* fetch server tea & tea_packaging*/


const [datas, setDatas] = useState(null);
/* const [categories, setCategories] = useState(null); */

useEffect(() => {
    async function getData() {
        try {
            const result = await (
                await fetch("/api/v1/tea/all")
            ).json();
                console.log(result.datas)
            setDatas(result.datas);
        } catch (error) {
            console.log(error);
        }
    }

    getData();
}, []);

/* useEffect(()=> {
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
},[]); */

return (
    <>

        {/* {!categories ? (
            <p>LOADING ...</p>
        ) : (
            categories.map((category) => (
                <article key={category.id} >
                    <h2>{category.label}</h2>                    
                    <img src={"img" + category.url_image} alt={category.label} />                  
                    <p>{category.description}</p>                    
                    

                </article>
                
            ))
        )} */}

        {!datas ? (
            <p>LOADING ...</p>
        ) : (
            datas.map((data) => (
                <article key={data.id} >
                    <h2>{data.label_1}</h2>                    
                    <img src={"img/" + data.url_image} alt={data.label_1} />
                    <p>A partir de</p>
                    <p>{data.price}</p>                    
                    <Link to ={"/product_page"}>Voir ce produit</Link>

                </article>
                
            ))
        )}
    </>
);
};

export default TeaCard;


