import Style from "./style.module.scss";
import {useFormik} from "formik";
import * as Yup from "yup";
import React from "react";
import {Button} from "@mui/material";
import {CustomFormikTextField} from "../CustomFormikTextField/CustomFormikTextField";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/user/userSlice";

const usernameMinLength = 5
const usernameMaxLength = 30

export const RegistrationForm = ({onClose, goToLogIn}) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
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
      password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "Пароли не совпадают")
      .required("Подтвердите пароль!"),
    }),
    onSubmit: async (values, {setErrors}) => {
      try {
        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}register`, {...values})
        if (res.data['err']) {
          console.log(res);
          setErrors({email: res.data['err']})
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
        <form className={Style.form} onSubmit={formik.handleSubmit}>
        <p className={`${Style["reg-text"]} ${Style["margin"]}`}>РЕГИСТРАЦИЯ</p>
          <CustomFormikTextField  
            formik={formik}
            value={"name"}
            label={"Имя пользователя"}/>
          <CustomFormikTextField 
            formik={formik}
            value={"email"}
            label={"Email"}
            email/>
          <CustomFormikTextField 
            formik={formik}
            value={"password"}
            label={"Пароль"}
            password/>
          <CustomFormikTextField 
            formik={formik}
            value={"password_confirmation"}
            label={"Подтверждение пароля"}
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
              Зарегестрироваться
          </Button>
        </form>
        <p className={Style.error}>{formik.status}</p>
        <p className={`${Style["reg-black"]} ${Style["margin"]}`}
        >Если у вас уже есть аккаунт воспользуйтесь 
          <button
            onClick={() => goToLogIn()}
            className={`${Style.redirect_button}`}
          > входом в систему</button>
        </p>
      </div>
    </>
  );
}