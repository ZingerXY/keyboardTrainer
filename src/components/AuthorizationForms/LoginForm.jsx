import Style from "./style.module.scss";
import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Button} from "@mui/material";
import {CustomFormikTextField} from "../CustomFormikTextField/CustomFormikTextField";
import axios from "axios";
import {setUser} from "../../store/user/userSlice";
import {useDispatch} from "react-redux";

export const LoginForm = ({goToRegistration, onClose}) => {
  const dispatch = useDispatch()
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
    onSubmit: async (values, {setStatus}) => {
      try {
        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}api/login`, {...values})
        if (res.data['err']) {
          setStatus(res.data['err'])
        } else {
          onClose()
          dispatch(setUser(res.data))
        }
      } catch (e) {
        console.error(e)
      }
    },
  });

  return (
    <>
      <div className={`${Style["form-wrapper"]}`}>
        <form className={`${Style.form}`} onSubmit={formik.handleSubmit}>
          <p className={`${Style["reg-text"]} ${Style["margin"]}`}>АВТОРИЗАЦИЯ</p>
          <CustomFormikTextField 
            formik={formik}
            value={"email"}
            label={"EMAIL"}
            email/>
          <CustomFormikTextField 
            formik={formik}
            value={"password"}
            label={"ПАРОЛЬ"}
            password/>
          <Button 
            className={Style.btn}
            variant="contained"
            type="submit"
            sx={{
              mt: "62px",
              mb: "20px",
              "@media (max-width:768px)" : {
                mt: "48px",
                mb: "16px",
              }
            }}
            >
              Вход
          </Button>
        </form>
        <p className={Style.error}>{formik.status}</p>
        <p className={`${Style["reg-black"]} ${Style["margin"]}`}
        >Если у вас еще нет аккаунта
          <button
            onClick={() => goToRegistration()}
            className={`${Style.redirect_button}`}
          > зарегистрируйтесь в системе</button>
        </p>
      </div>
    </>
  );
}