import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../../services/api/httprequest";
import { Helmet } from "react-helmet";

const DetailsPage = () => {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const findedData = await getById(id);
      setData(findedData);
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
      <div
        style={{
          margin: "40px auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {data && (
          <>
            <h1 style={{ textAlign: "center" }}>{data.name}</h1>
            <p style={{ textAlign: "center" }}>Price: $ {data.price}</p>
            <img src={data.image} alt="" />
          </>
        )}
      </div>
    </>
  );
};
export default DetailsPage;
