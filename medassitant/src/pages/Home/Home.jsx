import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Avatar, Container, Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import imgBackground from "../../assets/img_background.jpeg";

export default function Home() {
  const services = [
    { label: "Preguntas Frecuentes", path: "/preguntasfrecuentes", description: "Encuentra respuestas a las preguntas más comunes sobre el servicio." },
    { label: "Recomendaciones de Vida", path: "/recomendacionesdevida", description: "Recibe consejos personalizados para mejorar tu estilo de vida y salud." },
    { label: "Programar Citas", path: "/agendarcita", description: "Agenda citas médicas con nuestros profesionales de salud." },
  ];

  // Estado para controlar qué descripción se muestra
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Barra de Navegación */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "linear-gradient(90deg, #004E92, #3A8FB7, #00C3FF)", // Degradado azul
          color: "white",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Sombra más fuerte para resaltar
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            MedAssistant
          </Typography>
          <Avatar
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.3)", // Fondo semi-transparente
              color: "white",
              border: "2px solid white",
            }}
          >
            U
          </Avatar>
        </Toolbar>
      </AppBar>

      {/* Sección de Bienvenida */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
          backgroundImage: `url(${imgBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          color: "white",
          textAlign: "center",
        }}
      >
        {/* Capa de Superposición para el efecto Glassmorphism */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.4)", // Superposición oscura
            backdropFilter: "blur(5px)", // Desenfoque en la capa de superposición
          }}
        />

        {/* Contenedor del Texto */}
        <Container
          maxWidth="sm"
          sx={{
            position: "relative",
            zIndex: 1, // Asegura que el texto esté encima de la superposición
            backgroundColor: "rgba(255, 255, 255, 0.2)", // Fondo semi-transparente
            backdropFilter: "blur(8px)", // Efecto Glassmorphism
            padding: 4,
            borderRadius: 3,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)", // Sombra para resaltar el contenedor
            border: "1px solid rgba(255, 255, 255, 0.2)", // Borde suave
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: "3rem", // Título más grande para mayor impacto
              color: "#00C3FF", // Color azul vibrante para el título
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Sombra para dar profundidad
              animation: "fadeIn 2s ease-in-out", // Animación sutil
              "@keyframes fadeIn": {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            ¿Qué es <span style={{ color: "#004E92" }}>MedAssistant</span>?
          </Typography>
          <Typography
            variant="body1"
            mt={2}
            sx={{
              color: "#E0F7FA", // Azul claro para el texto descriptivo
              fontSize: "1.3rem",
              lineHeight: 1.6,
              animation: "slideIn 1.5s ease-in-out", // Animación de entrada
              "@keyframes slideIn": {
                from: { transform: "translateY(20px)", opacity: 0 },
                to: { transform: "translateY(0)", opacity: 1 },
              },
            }}
          >
            Es una aplicación diseñada para facilitar el acceso remoto a la información médica confiable y personalizada,
            permitiendo a los usuarios gestionar su salud de manera proactiva.
          </Typography>
        </Container>
      </Box>

      {/* Sección de Servicios y Etiquetas */}
      <Box sx={{ padding: 4, backgroundColor: "#F5F5F5" }}>
        <Container maxWidth="md">
          {/* Título de Servicios */}
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold", mb: 3, textAlign: "center" }}>
            Servicios
          </Typography>

          {/* Contenedor de Etiquetas */}
          <Grid container spacing={4}>
            {services.map((item, index) => (
              <Grid
                item
                xs={12}
                key={item.label}
                sx={{
                  display: "flex",
                  justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                }}
              >
                {/* Cambia el contenido de la tarjeta al pasar el mouse */}
                <Link to={item.path} style={{ textDecoration: "none", width: "100%", maxWidth: "500px" }}>
                  <Paper
                    elevation={4}
                    onMouseEnter={() => setHoveredService(item.label)}
                    onMouseLeave={() => setHoveredService(null)}
                    sx={{
                      height: 150,
                      padding: 4,
                      textAlign: "center",
                      backgroundColor: "#004E92",
                      color: "white",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      ml: index % 2 === 0 ? 2 : 0,
                      mr: index % 2 !== 0 ? 2 : 0,
                      "&:hover": {
                        backgroundColor: "#3A8FB7",
                        transform: "scale(1.05)",
                        transition: "all 0.3s ease",
                      },
                    }}
                  >
                    {/* Muestra la descripción solo si el servicio está en hover */}
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      {item.label}
                    </Typography>
                    {hoveredService === item.label && (
                      <Typography variant="body2" sx={{ mt: 1, color: "#ffffff", fontSize: "1rem" }}>
                        {item.description}
                      </Typography>
                    )}
                  </Paper>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
