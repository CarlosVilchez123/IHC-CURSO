import { Form, Button, InputGroup } from 'react-bootstrap';
import { sv_url } from '../../routes/sv.web';
import { PrivateRoutes, PublicRoutes } from '../../routes/routes';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_PROFILE}`); 
  };

  return (
    <div className="main-login">
      <div className="half-bg"></div> {/* Fondo verde */}
      <div className="login-container">
        <h2>LOGIN</h2>
        <Form.Group className="form-group">
          <Form.Control className="form-control" size="lg" placeholder="Usuario" />
        </Form.Group>
        <Form.Group className="form-group">
          <InputGroup>
            <Form.Control className="form-control" size="lg" type="password" placeholder="Contraseña" />
          </InputGroup>
        </Form.Group>
        <Button className="btn" size="lg" onClick={handleLogin}>Ingresar</Button>
        <div className="register-link">
          ¿No tienes cuenta? <a href={`${sv_url.DEV}${PublicRoutes.REGISTER}`}>Regístrate</a>
        </div>
      </div>
    </div>
  );
};
