import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container, Paper, Grid, AppBar, Toolbar, Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

export default function Recomendaciones() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { sender: "bot", text: "¡Hola! Soy tu asistente de estilo de vida. ¿En qué puedo ayudarte hoy?" },
  ]);
  const [userMessage, setUserMessage] = useState("");

  // Función para manejar el envío del mensaje
  const handleSendMessage = () => {
    if (userMessage.trim() === "") return;

    // Añade el mensaje del usuario a la conversación
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userMessage },
    ]);

    // Genera la respuesta del chatbot
    const botResponse = getBotResponse(userMessage);

    // Añade la respuesta del bot a la conversación
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: botResponse },
    ]);

    // Limpia el campo de entrada
    setUserMessage("");
  };

  // Simulación de respuestas del chatbot
  const getBotResponse = (message) => {
    message = message.toLowerCase();

    if (message.includes("alimentación") || message.includes("comida")) {
      return "Una dieta balanceada es clave. Intenta incluir más vegetales, frutas y proteínas magras en tus comidas.";
    } else if (message.includes("ejercicio") || message.includes("actividad física")) {
      return "Para una vida saludable, intenta hacer al menos 30 minutos de ejercicio al día. ¿Prefieres caminar, correr, o hacer ejercicio en casa?";
    } else if (message.includes("dormir") || message.includes("sueño")) {
      return "Dormir bien es crucial. Trata de dormir entre 7 y 8 horas cada noche y evitar el uso de pantallas antes de dormir.";
    } else {
      return "No estoy seguro de cómo responder a eso. ¿Podrías preguntar sobre alimentación, ejercicio, o hábitos de sueño?";
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Barra de Navegación */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "linear-gradient(90deg, #004E92, #3A8FB7, #00C3FF)", // Degradado azul
          color: "white",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Sombra ligera para resaltar
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            MedAssistant - Recomendaciones de Vida
          </Typography>
          <Avatar
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.3)", // Fondo semi-transparente
              color: "white",
              border: "2px solid white",
            }}
            onClick={() => navigate("/")} // Redirige a la página de inicio al hacer clic en el avatar
          >
            U
          </Avatar>
        </Toolbar>
      </AppBar>

      {/* Contenido del Chat */}
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          Chat de Estilo de Vida
        </Typography>

        {/* Contenedor de mensajes con scroll automático */}
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            height: "60vh",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mb: 3,
            bgcolor: "#f5f5f5",
          }}
        >
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              <Box
                sx={{
                  maxWidth: "75%",
                  padding: 2,
                  color: msg.sender === "user" ? "white" : "black",
                  backgroundColor: msg.sender === "user" ? "#3A8FB7" : "#e0e0e0",
                  borderRadius: 2,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  fontSize: "1rem",
                  fontFamily: "Roboto, sans-serif",
                  lineHeight: 1.5,
                  whiteSpace: "pre-line",
                  textAlign: "left",
                }}
              >
                {msg.text}
              </Box>
            </Box>
          ))}
        </Paper>

        {/* Input de mensaje y botón de envío */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={10}>
            <TextField
              label="Escribe tu mensaje"
              variant="outlined"
              fullWidth
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: 1,
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              endIcon={<SendIcon />}
              onClick={handleSendMessage}
              sx={{ height: "100%" }}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
