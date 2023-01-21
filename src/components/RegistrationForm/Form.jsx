import styles from './style.module.scss'
import {useFormik} from "formik";
import * as Yup from "yup";
import React from "react";
import {Button, TextField} from "@mui/material";

const usernameMinLength = 5
const usernameMaxLength = 30

export const Form = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .email('Введите валидную почту')
      .required('Заполните поле для почты'),
      username: Yup.string()
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
    onSubmit: (values) => {
      console.log({...values})
    },
  });


  return <form className={styles.form} onSubmit={formik.handleSubmit}>
    <TextField
      fullWidth
      variant="standard"
      id="username"
      name="username"
      label="Имя пользователя"
      value={formik.values.username}
      onChange={formik.handleChange}
      error={formik.touched.username && Boolean(formik.errors.username)}
      helperText={formik.touched.username && formik.errors.username}
    />
    <TextField
      variant="standard"
      fullWidth
      id="email"
      name="email"
      label="Email"
      value={formik.values.email}
      onChange={formik.handleChange}
      error={formik.touched.email && Boolean(formik.errors.email)}
      helperText={formik.touched.email && formik.errors.email}
    />
    <TextField
      variant="standard"
      fullWidth
      id="password"
      name="password"
      label="Password"
      type="password"
      value={formik.values.password}
      onChange={formik.handleChange}
      error={formik.touched.password && Boolean(formik.errors.password)}
      helperText={formik.touched.password && formik.errors.password}
    />
    <TextField
      variant="standard"
      fullWidth
      id="passwordConfirmation"
      name="passwordConfirmation"
      label="Подтверждение пароля"
      type="password"
      value={formik.values.passwordConfirmation}
      onChange={formik.handleChange}
      error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
      helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
    />
    <Button className={styles.btn} variant="contained" type="submit" sx={{mt: 2}}>
      Зарегестрироваться
    </Button>
  </form>
}