import Style from "../../routes/LogIn/LogIn.module.scss";
import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import styles from "./style.module.scss";
import {Button} from "@mui/material";
import {CustomFormikTextField} from "../CustomFormikTextField/CustomFormikTextField";

export const LoginForm = ({goToRegistration}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .email('Введите валидную почту')
      .required('Заполните поле для почты'),
      password: Yup.string()
      .required("Заполните поле с паролем!")
      .min(8, "Пароль короткий!"),
    }),
    onSubmit: (values) => {
      console.log({...values})
    },
  });

  return <div className={`${Style.form}`}>
    <form className={`${Style.form}`} onSubmit={formik.handleSubmit}>
      <p className={`${Style["reg-text"]} ${Style["margin"]}`}>АВТОРИЗАЦИЯ</p>
      <CustomFormikTextField formik={formik} value={"email"} label={"Email"} email/>
      <CustomFormikTextField formik={formik} value={"password"} label={"Пароль"} password/>
      <Button className={styles.btn} variant="contained" type="submit" sx={{mt: 2}}>
        Вход
      </Button>
    </form>
    <p className={`${Style["reg-black"]} ${Style["margin"]}`}
    >Если у вас еще нет аккаунта
      <button
        onClick={() => goToRegistration()}
        className={`${Style.redirect_button}`}
      > зарегистрируйтесь в системе</button>
    </p>
  </div>
}