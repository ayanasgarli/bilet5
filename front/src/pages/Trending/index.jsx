import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { getAll } from "../../services/api/httprequest";
import { Link } from "react-router-dom";

const Trending = () => {
  const [clothes, setClothes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const allClothes = await getAll();
      setClothes(allClothes);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="trending">
        <div className="container">
          <h2>Trending This Week</h2>
          <hr />
          <div className="row">
          {clothes &&
              clothes.map((cloth) => (
                <div className="col-xl-3 col-sm-6 col-12 ">
                  <div className="cards" key={cloth._id}>
                    <img src={cloth.image} alt="" />
                    <div className="title">
                      <h6> 
                        <Link
                          to={`/${cloth._id}`}
                          style={{ color: "#444444", textDecoration: "none" }}
                        >
                          {cloth.name}
                        </Link>
                      </h6>
                      <div className="prices">
                      <p>${cloth.price}</p>
                      <p className="price">$120.00</p>
                      </div>
                      
                    </div>
                    <button>Add to cart</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
