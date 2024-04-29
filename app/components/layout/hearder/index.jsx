"use client";
import {
  AppBar,
  //IconButton,
  Toolbar,
  Typography,
  //MenuItem,
  //MenuList,
  Button,
  Stack,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import React from "react";
//import HeaderMenu from "../headerMenu";
//import NotificationDropdown from "../notificationDropdown";
// import {
//   useCore,
//   setLoginModal,
//   setRegisterModal,
//   setLoginRedirection,
//   setDeviceToken,
// } from "@/app/context/core";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openModalRegister } from "@/app/store/miSlice";


export default function Header() {

  const dispach = useDispatch();
//   const [{ user }, coreDispatch] = useCore();
//   const router = useRouter();
//   const handleCreateBlog = () => {
//     if (!user) {
//       setLoginRedirection(coreDispatch, "/crear-blog");
//       setLoginModal(coreDispatch, true);
//     } else {
//       router.push("/crear-blog");
//     }
//   };


  return (
    <AppBar position="static" sx={{ height: 60, justifyContent: "center" }}>
      
      <Toolbar variant="dense" sx={{ width: "100%" }}>
        <Stack
          direction="row"
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <Stack direction="row" sx={{ alignItems: "center" }}>
              <Box>
                <Typography variant="h6" color={"#fff"} component="h1">
                  Blog 
                </Typography>
              </Box>
            </Stack>
          </Link>

          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            {/* {user && (
              <>
                <Box>
                  <HeaderMenu />
                </Box>
                <Box>
                  <NotificationDropdown />
                </Box>
              </>
            )} */}
            {/* {!user && ( */}
              <>
                <Button
                  //onClick={() => setLoginModal(coreDispatch, true)}
                  variant="outlined"
                  color="primary"
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      borderColor: "#fff",
                    },
                  }}
                >
                  Inicia sesión
                </Button>
                <Button
                  onClick={() => dispach(openModalRegister(true))}
                  variant="outlined"
                  color="primary"
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      borderColor: "#fff",
                    },
                  }}
                >
                  Registrate
                </Button>
              </>
            {/* )} */}
            <Button
              //onClick={handleCreateBlog}
              variant="contained"
              color="secondary"
              startIcon={<AddIcon />}
            >
              Crear Blog
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
