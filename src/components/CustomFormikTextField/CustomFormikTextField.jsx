import {TextField} from "@mui/material";
import Style from "../AuthorizationForms/style.module.scss";
import React from "react";
import { borderBottom } from "@mui/system";

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
    className={Style.input}
    sx={{
      "& .css-l4u8b9-MuiInputBase-root-MuiInput-root::before": {
        borderColor: "#207E62",
      },
      "&::hover .css-l4u8b9-MuiInputBase-root-MuiInput-root::before": {
        borderColor: "#207E62",
      }
    }}
  />
}