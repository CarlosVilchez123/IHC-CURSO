
import { SliesProfile } from '../../components/SliesProfile';
import { PhotoProfile } from '../../components/PhotoProfile';
import './Home.css'; // Importa el archivo de estilos CSS

export const Home = () => {
  return (
    <div className="home-container">
      <div className='green-layout'>
        <div className='container-photoprofile'>
          <PhotoProfile/>
        </div>
      </div>
      <SliesProfile />
    </div>
  );
};
