import { useState, useEffect } from 'react';
import './progreso.css';
import progresoData from './progreso.json'; // Asegúrate de que la ruta sea correcta

export const Progreso = () => {
    const [progreso, setProgreso] = useState({});

    useEffect(() => {
        // Cargar los datos del archivo JSON
        setProgreso(progresoData);
    }, []);

    return (
        <div className="progreso-container">
            <h1>Progreso de Salud</h1>
            <div className="progreso-diario">
                <h2>Progreso Diario</h2>
                <div className="barra-progreso">
                    <div
                        className="barra-completada"
                        style={{ width: `${progreso.progresoDiario}%` }}
                    ></div>
                </div>
                <p>{progreso.progresoDiario}% completado</p>
            </div>

            <div className="estadisticas">
                <div className="estadistica">
                    <h3>Tiempo en Terapia</h3>
                    <p>{progreso.tiempoTerapia} minutos</p>
                </div>
                <div className="estadistica">
                    <h3>Ejercicios Completados</h3>
                    <p>{progreso.ejerciciosCompletados}</p>
                </div>
                <div className="estadistica">
                    <h3>Nivel de Dolor</h3>
                    <p>{progreso.nivelDolor}/10</p>
                </div>
                <div className="estadistica">
                    <h3>Vitalidad</h3>
                    <p>{progreso.caloriasQuemadas} kcal</p>
                </div>
            </div>
        </div>
    );
};
