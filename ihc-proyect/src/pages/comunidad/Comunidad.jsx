import { useState, useEffect } from 'react';
import './comunidad.css';
import publicacionesData from './publicaciones.json'; // Asegúrate de que la ruta sea correcta

export const Comunidad = () => {
    const [publicaciones, setPublicaciones] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [selectedPublicacion, setSelectedPublicacion] = useState(null);

    useEffect(() => {
        // Cargar los datos del archivo JSON
        setPublicaciones(publicacionesData);
    }, []);

    const handleAgregarPublicacion = (e) => {
        e.preventDefault();
        const nuevaPublicacion = {
            id: publicaciones.length + 1,
            titulo,
            contenido,
            likes: 0
        };
        setPublicaciones([...publicaciones, nuevaPublicacion]);
        setTitulo('');
        setContenido('');
    };

    const handleCardClick = (publicacion) => {
        setSelectedPublicacion(publicacion);
    };

    const closeModal = () => {
        setSelectedPublicacion(null);
    };

    const handleLike = (publicacion) => {
        const updatedPublicaciones = publicaciones.map(p =>
            p.id === publicacion.id ? { ...p, likes: p.likes + 1 } : p
        );
        setPublicaciones(updatedPublicaciones);
    };

    return (
        <div className="comunidad-container">
            <h1>Comunidad</h1>
            <form onSubmit={handleAgregarPublicacion} className="formulario-publicacion">
                <input
                    type="text"
                    placeholder="Título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                    className="input-titulo"
                />
                <textarea
                    placeholder="Contenido"
                    value={contenido}
                    onChange={(e) => setContenido(e.target.value)}
                    required
                    className="textarea-contenido"
                ></textarea>
                <button type="submit" className="boton-agregar">Agregar Publicación</button>
            </form>

            <div className="publicaciones-lista">
                {publicaciones.length > 0 ? (
                    publicaciones.map((publicacion) => (
                        <div key={publicacion.id} className="publicacion-card" onClick={() => handleCardClick(publicacion)}>
                            <h2>{publicacion.titulo}</h2>
                            <p>{publicacion.contenido}</p>
                            <button onClick={(e) => { e.stopPropagation(); handleLike(publicacion); }} className="like-button">
                                Like ({publicacion.likes})
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No hay publicaciones aún...</p>
                )}
            </div>

            {selectedPublicacion && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{selectedPublicacion.titulo}</h2>
                        <p>{selectedPublicacion.contenido}</p>
                        <button onClick={() => handleLike(selectedPublicacion)} className="like-button">
                            Like ({selectedPublicacion.likes})
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
