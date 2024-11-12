import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Avatar, Box, Container, Grid, TextField, Button, Paper, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import SendIcon from "@mui/icons-material/Send";

export default function AgendarCita() {
  const navigate = useNavigate();

  // Lista de especialidades y doctores
  const specialties = [
    { id: "gen", name: "Medicina General" },
    { id: "card", name: "Cardiología" },
    { id: "dent", name: "Odontología" },
  ];

  const doctors = [
    { id: 1, name: "Dr. Martínez", specialty: "gen" },
    { id: 2, name: "Dra. Rodríguez", specialty: "card" },
    { id: 3, name: "Dr. Pérez", specialty: "dent" },
  ];

  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const filteredDoctors = doctors.filter((doc) => doc.specialty === selectedSpecialty);

  // Estado para los eventos de citas
  const [events, setEvents] = useState([]);

  // Función para manejar la selección de fechas para agendar citas
  const handleDateSelect = (selectInfo) => {
    if (!selectedSpecialty || !selectedDoctor) {
      alert("Por favor, seleccione una especialidad y un doctor antes de agendar una cita.");
      return;
    }

    const title = prompt("Ingrese el motivo de la cita:");
    const calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    if (title) {
      setEvents([
        ...events,
        {
          id: String(events.length + 1),
          title: `${title} - ${selectedDoctor}`,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        },
      ]);
    }
  };

  // Estado para manejar los mensajes del chat
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Manejo del envío de mensajes
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages((prevMessages) => [...prevMessages, { sender: "user", text: newMessage }]);
    setNewMessage("");
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
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Sombra para resaltar
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            MedAssistant - Agendar Cita
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

      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {/* Selección de Especialidad y Doctor en la misma línea */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Especialidad</InputLabel>
                <Select
                  value={selectedSpecialty}
                  onChange={(e) => {
                    setSelectedSpecialty(e.target.value);
                    setSelectedDoctor("");
                  }}
                >
                  {specialties.map((specialty) => (
                    <MenuItem key={specialty.id} value={specialty.id}>
                      {specialty.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth disabled={!selectedSpecialty}>
                <InputLabel>Doctor</InputLabel>
                <Select
                  value={selectedDoctor}
                  onChange={(e) => setSelectedDoctor(e.target.value)}
                >
                  {filteredDoctors.map((doctor) => (
                    <MenuItem key={doctor.id} value={doctor.name}>
                      {doctor.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Typography variant="h5" gutterBottom textAlign="center">
              Calendario de Citas
            </Typography>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="timeGridWeek" // Vista semanal
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              events={events} // Eventos de citas
              selectable={true} // Permite seleccionar intervalos de tiempo
              selectMirror={true}
              select={handleDateSelect} // Llama a la función para agendar citas
              editable={false} // Desactiva la edición de eventos
              height="65vh"
              eventClick={(info) => alert(`Cita: ${info.event.title}`)} // Muestra detalles de la cita al hacer clic
            />
          </Grid>

          {/* Sección de Chat con el Doctor */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom textAlign="center">
              Chat con el Doctor
            </Typography>
            <Paper
              elevation={3}
              sx={{
                height: "70vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: 2,
              }}
            >
              {/* Contenedor de Mensajes */}
              <Box sx={{ overflowY: "auto", mb: 2, flexGrow: 1 }}>
                {messages.map((msg, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                      mb: 1,
                    }}
                  >
                    <Paper
                      sx={{
                        maxWidth: "75%",
                        padding: 1,
                        backgroundColor: msg.sender === "user" ? "#3A8FB7" : "#E0E0E0",
                        color: msg.sender === "user" ? "white" : "black",
                      }}
                    >
                      {msg.text}
                    </Paper>
                  </Box>
                ))}
              </Box>

              {/* Campo de Entrada y Botón de Enviar */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe un mensaje..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  sx={{ marginRight: 1 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  onClick={handleSendMessage}
                >
                  Enviar
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
