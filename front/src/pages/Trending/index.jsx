  import React, { useState, useEffect, useContext } from "react";
  import "bootstrap/dist/css/bootstrap.min.css";
  import "./index.scss";
  import { getAll } from "../../services/api/httprequest";
  import { Link } from "react-router-dom";
  import { Input, Button } from "@mui/material";
  import { BasketItemContext } from "../../services/context/basketItemContextProvider";


  const Trending = () => {
    const [clothes, setClothes] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("default");
    const { addItem } = useContext(BasketItemContext)

    const filteredData = clothes
      .filter((cloth) => cloth.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        switch (filter) {
          case "A-Z":
            return a.name.localeCompare(b.name);
          case "Z-A":
            return b.name.localeCompare(a.name);
          case "Price":
            return a.price - b.price;
          default:
            return 0;
        }
      });

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
            <Input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
            

            <label> Sort: </label>
            <select value={filter} onChange={(e)=> setFilter(e.target.value)} >
              <option value="Default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="Price">Price</option>
            </select>
            
            
            <div className="row">
              {filteredData &&
                filteredData.map((cloth) => (
                  <div className="col-xl-3 col-sm-6 col-12 " key={cloth._id}>
                    <div className="cards" >
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
                      <Button onClick={() => addItem(cloth)} variant='outlined'>cart</Button>

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
