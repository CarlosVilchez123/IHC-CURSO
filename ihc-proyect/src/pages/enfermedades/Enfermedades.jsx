import { useState, useEffect } from 'react';
import './enfermedades.css';
import enfermedadesData from './enfermedades.json'; // Asegúrate de que la ruta sea correcta

export const Enfermedades = () => {
    const [enfermedades, setEnfermedades] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEnfermedades, setFilteredEnfermedades] = useState([]);
    const [selectedEnfermedad, setSelectedEnfermedad] = useState(null);

    useEffect(() => {
        // Cargar los datos del archivo JSON
        setEnfermedades(enfermedadesData);
    }, []);

    useEffect(() => {
        // Filtrar las enfermedades según el término de búsqueda
        setFilteredEnfermedades(
            enfermedades.filter(enfermedad =>
                enfermedad.titulo.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, enfermedades]);

    const handleCardClick = (enfermedad) => {
        setSelectedEnfermedad(enfermedad);
    };

    const closeModal = () => {
        setSelectedEnfermedad(null);
    };

    return (
        <div className="enfermedades-container">
            <h1>Enfermedades relacionadas</h1>
            <input
                type="text"
                placeholder="Buscar enfermedad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {filteredEnfermedades.length > 0 ? (
                filteredEnfermedades.map((enfermedad) => (
                    <div key={enfermedad.id} className="enfermedad-card" onClick={() => handleCardClick(enfermedad)}>
                        <h2>{enfermedad.titulo}</h2>
                        <p>{enfermedad.descripcion}</p>
                    </div>
                ))
            ) : (
                <p>No se encontraron resultados...</p>
            )}

            {selectedEnfermedad && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{selectedEnfermedad.titulo}</h2>
                        <p>{selectedEnfermedad.detalle}</p>
                        <p>{selectedEnfermedad.descripcion_extensa}</p>
                        <div className="modal-buttons">
                            <button className="info-button">Pedir más información</button>
                            <button className="consult-button">Consultar con especialista</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
