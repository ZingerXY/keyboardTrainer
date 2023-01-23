import {TextField} from "@mui/material";
import React from "react";

export const CustomFormikTextField = ({formik, value, label, password, email}) => {
  return <TextField
    fullWidth
    type={password ? 'password' : email ? "email" : 'text'}
    variant="standard"
    id={value}
    name={value}
    label={label}
    value={formik.values[value]}
    onChange={formik.handleChange}
    error={formik.touched[value] && Boolean(formik.errors[value])}
    helperText={formik.touched[value] && formik.errors[value]}
  />
}