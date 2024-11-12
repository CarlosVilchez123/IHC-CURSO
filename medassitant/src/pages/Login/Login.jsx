import React from "react";
import { Box, Button, TextField, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "../../assets/login_img.jpeg"; 

export default function Login() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          boxShadow: 3,
          borderRadius: 2,
          overflow: "hidden",
        }}
      >

        <Box
          component="img"
          src={Image} 
          alt="Medical Icon"
          sx={{
            width: 400,
            height:"100%",
            objectFit: "cover",
          }}
        />

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 4,
            width: 300,
          }}
        >
          <Typography variant="h5" mb={2}>
            Login
          </Typography>

          <TextField
            label="Usuario"
            variant="standard"
            margin="normal"
            fullWidth
            required
          />

          <TextField
            label="Contraseña"
            type="password"
            variant="standard"
            margin="normal"
            fullWidth
            required
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, backgroundColor: "#3B82F6", borderRadius: "12px" }}
          >
            Entrar
          </Button>

          <Typography variant="body2" mt={2}>
            ¿No tienes cuenta?{" "}
            <Link to="/register" style={{ color: "#3B82F6", textDecoration: "none" }}>
              registrarse
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}