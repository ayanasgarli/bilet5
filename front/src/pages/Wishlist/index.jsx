import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { WishlistItemContext } from "../../services/context/wishlistItemContextProvider";

const Wishlist = () => {
  const { wishlistItem, deleteItem } = useContext(WishlistItemContext);

  const handleRemove = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from your wishlist.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(data);
        Swal.fire("Removed!", "Your item has been removed.", "success");
      }
    });
  };

  return (
    <div
      style={{
        maxWidth: "1120px",
        margin: "0 auto",
        padding: "50px 0",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "50px" }}>Wishlist</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          textAlign: "center",
        }}
      >
        {wishlistItem &&
          wishlistItem.map((data) => {
            return (
              <div key={data._id} className="card">
                <img src={data?.image} alt="" />
                <h4>
                  <Link to={`/${data._id}`}>{data?.name}</Link>
                </h4>
                <p>$ {data?.price}</p>
                <div>
                  <Button onClick={() => handleRemove(data)} variant="outlined">
                    remove
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Wishlist;
