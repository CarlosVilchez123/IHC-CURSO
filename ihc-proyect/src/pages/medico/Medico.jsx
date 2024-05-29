import { useState, useEffect } from 'react';
import './medico.css';
import medicosData from './medicos.json'; // Asegúrate de que la ruta sea correcta

export const Medico = () => {
    const [medicos, setMedicos] = useState([]);
    const [especialidad, setEspecialidad] = useState('');
    const [experiencia, setExperiencia] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [filteredMedicos, setFilteredMedicos] = useState([]);

    useEffect(() => {
        // Cargar los datos del archivo JSON
        setMedicos(medicosData);
    }, []);

    useEffect(() => {
        // Aplicar los filtros
        setFilteredMedicos(
            medicos.filter(medico =>
                (especialidad ? medico.especialidad.toLowerCase().includes(especialidad.toLowerCase()) : true) &&
                (experiencia ? medico.experiencia >= parseInt(experiencia) : true) &&
                (ubicacion ? medico.ubicacion.toLowerCase().includes(ubicacion.toLowerCase()) : true)
            )
        );
    }, [especialidad, experiencia, ubicacion, medicos]);

    return (
        <div className="medico-container">
            <h1>Médicos y Enfermeros Disponibles</h1>
            <div className="filtros">
                <input
                    type="text"
                    placeholder="Buscar por especialidad..."
                    value={especialidad}
                    onChange={(e) => setEspecialidad(e.target.value)}
                    className="filtro-input"
                />
                <input
                    type="number"
                    placeholder="Años de experiencia..."
                    value={experiencia}
                    onChange={(e) => setExperiencia(e.target.value)}
                    className="filtro-input"
                />
                <input
                    type="text"
                    placeholder="Buscar por ubicación..."
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                    className="filtro-input"
                />
            </div>
            <div className="medicos-lista">
                {filteredMedicos.length > 0 ? (
                    filteredMedicos.map((medico) => (
                        <div key={medico.id} className="medico-card">
                            <img src={medico.foto} alt={medico.nombre} className="medico-foto" />
                            <h2>{medico.nombre}</h2>
                            <h3>{medico.especialidad}</h3>
                            <p>{medico.descripcion}</p>
                            <p><strong>Experiencia:</strong> {medico.experiencia} años</p>
                            <p><strong>Ubicación:</strong> {medico.ubicacion}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay médicos ni enfermeros disponibles...</p>
                )}
            </div>
        </div>
    );
};
