import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../../services/api/httprequest";
import { Helmet } from "react-helmet";

const DetailsPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchData() {
      const findedProduct = await getById(id);
      setProduct(findedProduct);
    }
    fetchData();
  }, [id]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cloth Detail</title>
        <link
          rel="icon"
          href="https://www.freeiconspng.com/thumbs/details-icon/details-icon-png-cc-by-3-0--it-1.png"
        />
      </Helmet>
      <div>{product && 
      <h1>{product.name}</h1>
      }
      </div>
    </>
  );
};
export default DetailsPage;