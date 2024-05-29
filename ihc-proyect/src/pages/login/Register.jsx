import { Form, Button } from 'react-bootstrap';
import { DatePicker, Input, Select } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { sv_url } from '../../routes/sv.web';
import { PublicRoutes } from '../../routes/routes';
import './Register.css'; // Asegúrate de incluir tus estilos personalizados


export const Register = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(`${sv_url.DEV}${PublicRoutes.LOGIN}`); 
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  
  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div className="main-login">
      <div className="half-bg"></div> {/* Fondo verde */}
      <div className="login-container">
        <h2>Registrarse</h2>
        <Form.Group className="form-group">
          <Form.Control className="form-control" size="lg" placeholder="Nombres" />
          <Form.Control className="form-control" size="lg" placeholder="Apellido Paterno" />
          <Form.Control className="form-control" size="lg" placeholder="Apellido Materno" />
          <DatePicker className='date-picker' onChange={onChange} size='ls' placeholder='Fecha de nacimiento'/>
          <Select
                className='selector'
                showSearch
                size='lg'
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={[
                  {
                    value: 'pd',
                    label: 'Personas con discapacidad',
                  },
                  {
                    value: 'apoderado',
                    label: 'Apoderado',
                  },
                  {
                    value: 'medico',
                    label: 'Medico',
                  },
                  {
                    value: 'enfermero',
                    label: 'Enfermero',
                  },
                ]}
            />
        </Form.Group>
        <Form.Group className="form-group">
          <Input.Group compact>
            <Input.Password
              className="form-control"
              size="large"
              placeholder="Contraseña"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Input.Group>
          <Input.Group compact>
            <Input.Password
              className="form-control"
              size="large"
              placeholder="Confirmar Contraseña"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Input.Group>
        </Form.Group>
        <div className='container-buttons'>
            <Button className="btn" onClick={handleLogin}>Registrarme</Button>
        </div>
      </div>
    </div>
  );
};
