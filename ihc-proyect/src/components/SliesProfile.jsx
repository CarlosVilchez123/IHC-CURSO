import {useNavigate} from 'react-router-dom';
import {sv_url} from '../routes/sv.web'
import {PrivateRoutes} from '../routes/routes'
import './SliesProfile.css'; 

export const SliesProfile = () => {
    const navigate = useNavigate();
    const handleEnfermedadesClick = () => {
        navigate(`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_ENFERMEDADES}`);
    }
    const handleEntrenamientoClick = () => {
        navigate(`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_ENTRENAMIENTO}`);
    }
    const handleComunidadClick = () => {
        navigate(`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_COMUNIDAD}`);
    }
    const handleHistorialClick = () => {
        navigate(`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_HISTORIAL}`);
    }
    const handleMedicoClick = () => {
        navigate(`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_MEDICO}`);
    }
    const handleProgresoClick = () => {
        navigate(`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_PROGRESO}`);
    }
    const handleMetasClick = () => {
        navigate(`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_METAS}`);
    }
    return (
        <div className="container-total">
            <div className="sidebar">
                <div className="item metas" onClick={handleMetasClick}>
                    <img src="/images/metas-icon.png" width="100px" height="100px"/>
                    <span>Metas</span>

                </div>
                <div className="item progreso" onClick={handleProgresoClick}>
                    <img src="/images/progreso-icon.png" />
                    <span>Progreso</span>
                </div>
                <div className="item medico" onClick={handleMedicoClick}>
                    <img src="/images/medico-icon.png" width="100px" height="100px"/>
                    <span>Medico</span>
                </div>
                <div className="item historial" onClick={handleHistorialClick}>
                    <img src="/images/historial-icon.png" alt="" />
                    <span>Historial</span>
                </div>
            </div>
            <div className="main-content">
                <div className="items comunidad" onClick={handleComunidadClick}>
                    <img src="/images/comunidad-icon.png" alt="" />
                    <span>Comunidad</span>
                </div>
                <div className="items entrenamiento" onClick={handleEntrenamientoClick}>
                    <img src="/images/rehabiltacion-icon.png" alt="" />
                    <span>Programas de entrenamiento</span>
                </div>
                <div className="items enfermedades" onClick={handleEnfermedadesClick}>
                    <img src="/images/enfermedad-icon.png" alt="" />
                    <span>Enfermedades</span>
                </div>
            </div>
        </div>
    );
};