"use client";
import {
  Box,
  Modal,
  Typography,
  Stack,
  IconButton,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
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

export default function RegisterModal() {
  //const dispach = useDispatch();
  const showRegisterModal = useSelector(
    (state) => state.showModalRegister.value
  );
  const dispach = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  //   const router = useRouter();
  //   const [{ showRegisterModal }, coreDispatch] = useCore();

  //   //states
  //   const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  //   const [step, setStep] = useState<number>(1);
  //   const [userData, setUserData] = useState<any | null>(null);
  //   const [resetForms, setResetForms] = useState<boolean>(false);
  //   const [step1Error, setStep1Error] = useState<null | {
  //     fieldName: "email";
  //     error: string;
  //   }>(null);

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

        <form sx={{ width: "100%", marginTop: 3 }} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} s>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <RemoveRedEyeIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl required sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-required-label">
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
            </Grid>
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
