import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  getAll,
  getById,
  postData,
  deleteById,
} from "../../services/api/httprequest";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import Swal from "sweetalert2";

export default function AddTable() {
  const [clothes, setClothes] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const allClothes = await getAll();
      setClothes(allClothes);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const deletedCloth = await deleteById(id);
      const updatedClothes = clothes.filter((cloth) => cloth._id !== id);
      setClothes(updatedClothes);

      Swal.fire("Deleted!", "The cloth has been deleted.", "success");
    }
  };

  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "1250px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>Data Table</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clothes &&
              clothes.map((cloth) => (
                <TableRow
                  key={clothes.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <img style={{ width: "10vh" }} src={cloth.image} alt="" />
                  </TableCell>
                  <TableCell align="center">{cloth.name}</TableCell>
                  <TableCell align="center">${cloth.price}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleDelete(cloth._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
