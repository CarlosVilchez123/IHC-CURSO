import { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { NavBar } from '../components/NavBar';
export const ValuesUpdatedContext = createContext();
import './Main.css'
export const Main = () => {
  const [valuesUpdated, setValuesUpdated] = useState(false);
  const [datosTotal, setDatosTotal] = useState([]);

  return (
    <ValuesUpdatedContext.Provider 
      value={{
        valuesUpdated,
        setValuesUpdated,
        datosTotal,
        setDatosTotal
      }}
    >
      <div className="flex-lg-1 h-screen overflow-y-lg-auto">
      <div className='container-navbar'>
            <NavBar/>
        </div>
        <div className='container-searchbar'>
            <SearchBar/>
        </div>
        <Outlet />
      </div>
    </ValuesUpdatedContext.Provider>
  );
}
