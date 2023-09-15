import TeaCard from "./TeaCard";

function TeaSection(){

    /* fecth server  category*/

    return (


            <section class="listing">
                {/* <img src={"img" + data.url_image} alt={data.description} /> */}
                <h2>{/* {category.name} */}Titre Catégorie</h2>
                <p>{/* {category.description} */}Description</p>

                <TeaCard />
                
            </section>
    )
}

export default TeaSection; 