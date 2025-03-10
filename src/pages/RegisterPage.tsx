import React from "react";
import "../css/RegisterPage.css";
import TextField from "@mui/material/TextField";
import { Button, InputAdornment } from "@mui/material";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { useFormik } from "formik";
import registerPageSchema from "../schemas/RegisterPageSchema";

function RegisterPage() {
  const { values, handleSuböit, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: registerPageSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="register">
      <div className="main">
        <form>
          <div className="form-div">
            <TextField
              id="username"
              placeholder="Kullanıcı Adı"
              variant="outlined"
              value={values.userName}
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
