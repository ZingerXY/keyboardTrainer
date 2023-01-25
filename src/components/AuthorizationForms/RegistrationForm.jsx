import styles from './style.module.scss'
import {useFormik} from "formik";
import * as Yup from "yup";
import React from "react";
import {Button} from "@mui/material";
import {CustomFormikTextField} from "../CustomFormikTextField/CustomFormikTextField";
import axios from "axios";

const usernameMinLength = 5
const usernameMaxLength = 30

export const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .email('Введите валидную почту')
      .required('Заполните поле для почты'),
      name: Yup.string()
      .required("Заполните поле с именем пользователя!")
      .min(usernameMinLength, `Никнейм должен содержать больше ${usernameMinLength} символов!`)
      .max(usernameMaxLength, `Никнейм должен содержать не больше ${usernameMaxLength} символов!`),
      password: Yup.string()
      .required("Заполните поле с паролем!")
      .min(8, "Пароль короткий!"),
      passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Пароли не совпадают")
      .required("Подтвердите пароль!"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post(`${process.env.REACT_APP_HOST_URL}/api/register`, {...values})
        console.log(res.data)
      } catch (e) {
        console.error(e)
      }
    },
  });

  return <form className={styles.form} onSubmit={formik.handleSubmit}>
    <CustomFormikTextField formik={formik} value={"name"} label={"Имя пользователя"}/>
    <CustomFormikTextField formik={formik} value={"email"} label={"Email"} email/>
    <CustomFormikTextField formik={formik} value={"password"} label={"Пароль"} password/>
    <CustomFormikTextField formik={formik} value={"passwordConfirmation"} label={"Подтверждение пароля"} password/>
    <Button className={styles.btn} variant="contained" type="submit" sx={{mt: 2}}>
      Зарегестрироваться
    </Button>
  </form>
}