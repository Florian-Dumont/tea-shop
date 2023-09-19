import { useLocation } from "react-router-dom";

function Detail() {

    const productLabel = new URLSearchParams(window.location.search).get('label');
  
    console.log(productLabel);

    // fetch("../js/rings_List.json")
    //     .then(res => res.json())
    //     .then(labels => {

    //         const label = labels.find(p => p.id === (productlabel));

    //         displayDetail(label);

    //     })
    //     .catch(err => console.log(err));
    // };

    
  return <div>Detail {productLabel}</div>;
}

export default Detail;