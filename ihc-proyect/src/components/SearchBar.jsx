import { Input, Space } from 'antd';
import './SearchBar.css'; // Importa el archivo de estilos CSS

const onSearch = (value) => {
  console.log(value);
};

export const SearchBar = () => {
  return (
    <Space direction="vertical" style={{ width: '40%' }}>
      <Input
        placeholder="Realice su búsqueda aquí"
        size="large" // Ajusta la altura con esta propiedad
        className="custom-search-input"
        onPressEnter={(e) => onSearch(e.target.value)} // Maneja la búsqueda cuando se presiona Enter
      />
    </Space>
  );
};