import { useState, useEffect } from 'react';
import './entrenamiento.css';
import entrenamientosData from './entrenamientos.json'; // Asegúrate de que la ruta sea correcta

export const Entrenamiento = () => {
    const [entrenamientos, setEntrenamientos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEntrenamientos, setFilteredEntrenamientos] = useState([]);
    const [selectedEntrenamiento, setSelectedEntrenamiento] = useState(null);

    useEffect(() => {
        // Cargar los datos del archivo JSON
        setEntrenamientos(entrenamientosData);
    }, []);

    useEffect(() => {
        // Filtrar los entrenamientos según el término de búsqueda
        setFilteredEntrenamientos(
            entrenamientos.filter(entrenamiento =>
                entrenamiento.titulo.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, entrenamientos]);

    const handleCardClick = (entrenamiento) => {
        setSelectedEntrenamiento(entrenamiento);
    };

    const closeModal = () => {
        setSelectedEntrenamiento(null);
    };

    return (
        <div className="entrenamientos-container">
            <h1>Entrenamientos personalizados</h1>
            <input
                type="text"
                placeholder="Buscar entrenamiento..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {filteredEntrenamientos.length > 0 ? (
                filteredEntrenamientos.map((entrenamiento) => (
                    <div key={entrenamiento.id} className="entrenamiento-card" onClick={() => handleCardClick(entrenamiento)}>
                        <h2>{entrenamiento.titulo}</h2>
                        <p>{entrenamiento.descripcion}</p>
                    </div>
                ))
            ) : (
                <p>No se encontraron resultados...</p>
            )}

            {selectedEntrenamiento && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{selectedEntrenamiento.titulo}</h2>
                        <p>{selectedEntrenamiento.detalle}</p>
                        <div className="video-container">
                            <iframe
                                width="560"
                                height="315"
                                src={selectedEntrenamiento.videoUrl}
                                title={selectedEntrenamiento.titulo}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
