import React, { useState } from "react";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [step, setStep] = useState(0);
  const [role, setRole] = useState(""); // "patient" o "doctor"
  const [openDialog, setOpenDialog] = useState(false); // Estado para controlar el modal
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    specialty: "", // Solo para doctor
    weight: "",
    height: "",
    medicalHistory: null,
    allergies: "",
    medications: "",
    dietaryHabits: "",
  });

  const navigate = useNavigate();
  const steps = ["Escoge tu Rol", "Información Personal", "Información Adicional"];

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => prevStep - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, medicalHistory: e.target.files[0] });
  };

  const handleRoleSelect = (e) => {
    setRole(e.target.value);
    setStep(1); // Avanza al siguiente paso automáticamente
  };

  const handleSubmit = () => {
    // Simula el registro exitoso
    setOpenDialog(true); // Abre el modal
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate("/login"); // Redirige al login después de cerrar el modal
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h4" textAlign="center" mb={3}>
        Registro
      </Typography>
      <Stepper activeStep={step}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 3 }}>
        {step === 0 && (
          <FormControl fullWidth>
            <InputLabel>Selecciona tu rol</InputLabel>
            <Select value={role} onChange={handleRoleSelect}>
              <MenuItem value="patient">Paciente</MenuItem>
              <MenuItem value="doctor">Doctor</MenuItem>
            </Select>
          </FormControl>
        )}

        {step === 1 && (
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField label="Nombre" name="firstName" value={formData.firstName} onChange={handleChange} required />
            <TextField label="Apellidos" name="lastName" value={formData.lastName} onChange={handleChange} required />
            <TextField
              label="Fecha de Nacimiento"
              name="birthDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
            <FormControl>
              <InputLabel>Género</InputLabel>
              <Select name="gender" value={formData.gender} onChange={handleChange} required>
                <MenuItem value="male">Masculino</MenuItem>
                <MenuItem value="female">Femenino</MenuItem>
                <MenuItem value="other">Otro</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Correo Electrónico" name="email" value={formData.email} onChange={handleChange} required />
            <TextField label="Número Telefónico" name="phone" value={formData.phone} onChange={handleChange} required />
            <TextField
              label="Contraseña"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {role === "doctor" && (
              <TextField label="Especialidad" name="specialty" value={formData.specialty} onChange={handleChange} required />
            )}
          </Box>
        )}

        {step === 2 && role === "patient" && (
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField label="Peso (kg)" name="weight" value={formData.weight} onChange={handleChange} required />
            <TextField label="Altura (cm)" name="height" value={formData.height} onChange={handleChange} required />
            <Button variant="contained" component="label">
              Adjuntar Historial Médico
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            <TextField
              label="Alergias"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              multiline
              rows={2}
            />
            <TextField
              label="Medicamentos que toma"
              name="medications"
              value={formData.medications}
              onChange={handleChange}
              multiline
              rows={2}
            />
            <TextField
              label="Hábitos Alimenticios"
              name="dietaryHabits"
              value={formData.dietaryHabits}
              onChange={handleChange}
              multiline
              rows={2}
            />
          </Box>
        )}

        {/* Botones de navegación */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          {step > 0 && <Button onClick={handleBack}>Atrás</Button>}
          {step < steps.length - 1 && role === "patient" && (
            <Button variant="contained" onClick={handleNext} disabled={step === 0 && !role}>
              Siguiente
            </Button>
          )}
          {((step === steps.length - 1 && role === "patient") || (step === 1 && role === "doctor")) && (
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Registrar
            </Button>
          )}
        </Box>
      </Box>

      {/* Dialogo de Registro Exitoso */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Registro Exitoso</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¡Tu registro se ha completado con éxito! Ahora puedes iniciar sesión en tu cuenta.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" variant="contained">
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
