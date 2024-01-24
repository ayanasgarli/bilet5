import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";
import "./index.scss";
import AddTable from "../Table";
import { postData } from "../../services/api/httprequest";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("name is required"),
  price: yup.string("Enter your price").required("price is required"),
  image: yup.string("Enter your image link").required("image is required"),
});

const Add = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      image: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      try {
        await postData(values);
        actions.resetForm();

        Swal.fire({
          icon: "success",
          title: "Successfully Added!",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.error("Error", error);
      }
    },
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png"
        />
      </Helmet>
      <div className="add">
        <h2>Add New Watches</h2>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="*Name"
            style={{ margin: "10px" }}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="price"
            name="price"
            label="*Price"
            style={{ margin: "10px" }}
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.price && Boolean(formik.errors.price)}
            helperText={formik.touched.price && formik.errors.price}
          />
          <TextField
            fullWidth
            id="image"
            name="image"
            label="*Image Link"
            style={{ margin: "10px" }}
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.image && Boolean(formik.errors.image)}
            helperText={formik.touched.image && formik.errors.image}
          />
          <Button
            style={{ margin: "10px" }}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>

      <AddTable />
    </>
  );
};

export default Add;
