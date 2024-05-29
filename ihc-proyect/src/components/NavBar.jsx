import { BellOutlined, WechatOutlined, MenuOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import {sv_url} from '../routes/sv.web'
import {PrivateRoutes} from '../routes/routes'
import './NavBar.css'; // Importa el archivo de estilos CSS

export const NavBar = () => {
    const navigate = useNavigate();
    const handleMenuClick = () => {
        navigate(`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_PROFILE}`); // Redirige a la ruta /menu
    };
    const handleChatClick = () => {
        navigate(`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_CHATS}`);
    };
    const handleNotificationClick = () => {
        navigate(`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_NOTIFICACIONES}`);
    };
    return (
        <div className='container-navbar'>
            <div className='menu-hamburguesa'  onClick={handleMenuClick}>
                <MenuOutlined className='icon' />
            </div>
            <div className='container-icons'>
                <WechatOutlined className='icon' onClick={handleChatClick}/>
                <BellOutlined className='icon' onClick={handleNotificationClick}/>
            </div>
        </div>
    );
};
