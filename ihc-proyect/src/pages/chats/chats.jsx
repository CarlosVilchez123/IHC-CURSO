import './chats.css';
import { SendOutlined } from '@ant-design/icons';

export const Chats = () => {
    return (
        <div className='container-chats'>
            <div className='sidebar-chats'>
                <h1>Mensajes</h1>
                <input type='text' placeholder='Busca a amigos' />
                <div className='sidebar-item'>
                    <img src='/images/profile-icon.png' alt='Profile' />
                    <span>Carlos Vilchez</span>
                </div>
            </div>
            <div className='chat-window'>
                <div className='chat-header'>
                    <img src='/images/profile-icon.png' alt='Profile' />
                    <span>Carlos Vilchez</span>
                </div>
                <div className='chat-body'>
                    {/* Mensajes de chat */}
                </div>
                <div className='chat-input'>
                    <input type='text' placeholder='Escribe un mensaje...' />
                    <div className='chat-input-icons'>
                        <SendOutlined className='input-icon' />
                    </div>
                </div>
            </div>
        </div>
    );
};
