import React from "react";
import "../css/RegisterPage.css";
import TextField from "@mui/material/TextField";
import { Button, InputAdornment } from "@mui/material";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { useFormik } from "formik";
import { registerPageSchema } from "../schemas/RegisterPageSchema";
import registerPageService from "../services/RegisterPageService";
import { UserType } from "../types/Types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const submit = async (values: any, actions: any) => {
    try {
      const payload: UserType = {
        id: String(Math.floor(Math.random() * 999999)),
        username: values.username,
        password: values.password,
        balance: 1000,
      };
      const response = await registerPageService.register(payload);
      if (response) {
        clear();
        toast.success("başarılı");
        navigate("/login");
      }
    } catch (error) {
      toast.error("hata");
    }
  };

  const { values, handleSubmit, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: registerPageSchema,
    onSubmit: submit,
  });

  const clear = () => {
    resetForm();
  };
  return (
    <div className="register">
      <div className="main">
        <form onSubmit={handleSubmit}>
          <div className="form-div">
            <TextField
              id="username"
              placeholder="Kullanıcı Adı"
              variant="outlined"
              value={values.username}
              helperText={
                errors.username && (
                  <span style={{ color: "red" }}>{errors.username}</span>
                )
              }
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IoPersonCircleSharp />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              id="password"
              type="password"
              placeholder="Şifre"
              value={values.password}
              onChange={handleChange}
              variant="outlined"
              helperText={
                errors.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaLock />
                  </InputAdornment>
                ),
              }}
            />
            <div className="buttons-div">
              <Button
                type="submit"
                size="medium"
                sx={{
                  textTransform: "none",
                  height: "30px",
                  marginRight: "10px",
                }}
                variant="contained"
                color="info"
              >
                Kaydet
              </Button>
              <Button
                size="medium"
                sx={{ textTransform: "none", height: "30px" }}
                variant="contained"
                color="inherit"
                onClick={clear}
              >
                Temizle
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
