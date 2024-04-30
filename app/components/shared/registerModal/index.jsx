"use client";
import {
  Box,
  Modal,
  Typography,
  //Stack,
  IconButton,
  Grid,
  TextField,
  //FormControlLabel,
  //Checkbox,
  Button,
  InputAdornment,
  //   FormControl,
  //   InputLabel,
  //   Select,
  //   MenuItem,
  //   FormHelperText,
} from "@mui/material";
import React, { useEffect, useState } from "react";

//import SocialLoginButton from "../socialLoginButton";
//import CustomButton from "../customButton";
import { useRouter } from "next/navigation";
//import ProfileAvatar from "../../profile/avatar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";

//import { register } from "@/app/client/auth";

import { openModalRegister } from "@/app/store/miSlice";
import Link from "next/link";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function RegisterModal() {
  //const dispach = useDispatch();

  //   const [age, setAge] = useState('');

  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };
  //   const router = useRouter();

  //   const submit = async () => {
  //     setLoadingSubmit(true);
  //     const form = new FormData();
  //     Object.keys(userData).forEach((key) => {
  //       form.append(key, userData[key]);
  //     });
  //     try {
  //       const response = await register(form);
  //       //console.log('register modal data response', response)
  //       setLoginModal(coreDispatch, false);
  //       setInfoModal(coreDispatch, {
  //         status: "success",
  //         title: "Te has registrado exitosamente, ahora puedes iniciar sesión",
  //         hasCancel: null,
  //         hasSubmit: {
  //           title: "Excelente",
  //           cb: () => {
  //             setLoginModal(coreDispatch, true);
  //             setInfoModal(coreDispatch, null);
  //           },
  //         },
  //         onAnimationEnd: null,
  //       });
  //     } catch (error: any) {
  //       console.log("error", error.response.data);

  //       // set step for error
  //       setRegisterModal(coreDispatch, false)

  //       setInfoModal(coreDispatch, {
  //         status: "error",
  //         title: "No se ha podido completar el registro",
  //         hasCancel: null,
  //         message: error.response.data.error,
  //         hasSubmit: {
  //           title: "Intentar nuevamente",
  //           cb: () => {
  //             setUserData(null);
  //             setStep(1);
  //             setInfoModal(coreDispatch, null);
  //             setRegisterModal(coreDispatch, true)
  //           },
  //         },
  //         onAnimationEnd: null,
  //       });
  //     } finally {
  //       setLoadingSubmit(false);
  //     }
  //   };

  //   const handleStep1 = (values: any) => {
  //     setUserData({ ...userData, ...values });
  //     setStep(2);
  //   };

  //   const handleStep2 = (values: any) => {
  //     setUserData({ ...userData, ...values });
  //     setStep(3);
  //   };

  //   const handleStep3 = (values: any) => {
  //     setUserData({ ...userData, ...values });
  //     setStep(4);
  //   };
  //   const handleStep4 = () => {};
  //   const handleImage = (image:) => {
  //     setUserData({ ...userData, image });
  //   };
  //   useEffect(() => {
  //     if (!showRegisterModal) {
  //       setStep(1);
  //     }
  //         // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [showRegisterModal]);

  //   useEffect(() => {
  //     if (!showRegisterModal) {
  //       setResetForms(true);
  //       setUserData(null);
  //     } else {
  //       setResetForms(false);
  //     }
  //         // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [showRegisterModal]);

  const showRegisterModal = useSelector(
    (state) => state.showModalRegister.value
  );
  const dispach = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("El nombre es obligatorio")
      .min(3, "Debe contener al menos tres letras")
      .max(30, "No debe contener mas de 30 letras")
      .matches(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/i, "Debe contener solo letras"),
    email: yup
      .string()
      .required("El email es requerido")
      .email()
      .matches(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        "Formato de email incorrecto" 
      ),
    password: yup
      .string()
      .required("El password es requerido")
      .min(8, "Debe contener mas de 8 caracteres")
      .max(20, "No debe contener mas de 20 caracteres")
      .matches(/^[a-zA-Z0-9]+$/,
        "Formato password incorrecto, no de contener caracteres especiales como $@$!%*?& ni espacios en blanco"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
  });

  const handlerOnChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log("aaaa");
  };

  const [messageError, setMessageError] = useState("");
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Modal
      open={showRegisterModal}
      //onClose={() => setLoginModal(coreDispatch, false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "1rem",
        }}
      >
        <IconButton onClick={() => dispach(openModalRegister(false))}>
          <ArrowBackIcon />
        </IconButton>

        <Box>
          <Typography
            variant="h2"
            component={"h2"}
            sx={{
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Blog app
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h5"
            component={"h5"}
            sx={{
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            Registro
          </Typography>
        </Box>

        <form
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100%", marginTop: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                //required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                //value={field.value}
                //onChange={()=>{handlerOnChange(e)}}
                error={errors.name?.message ? true : false}
                helperText={errors.name?.message}
                {...register("name")}
              />
              {/* <p>{errors.name?.message}</p> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                //required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                autoComplete="email"
                error={errors.email?.message ? true : false}
                helperText={errors.email?.message}
                {...register("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                //required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "password" : ""}
                id="password"
                autoComplete="current-password"
                autoFocus
                error={errors.password?.message ? true : false}
                helperText={errors.password?.message}
                {...register("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <RemoveRedEyeIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControl required fullWidth>
                <InputLabel id="country">
                  País
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={age}
                  label="Age *"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 3 }}
          >
            Sign Up
          </Button>
          <Grid sx={{ marginTop: 3 }} container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}
