import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { PublicRoutes,PrivateRoutes } from './routes/routes';
import { Login } from './pages/login/Login';
import { Register } from './pages/login/Register';
import { Home } from './pages/landingpage/Home'
import {Chats} from './pages/chats/chats'
import {Enfermedades} from './pages/enfermedades/Enfermedades'
import {Comunidad} from './pages/comunidad/Comunidad'
import {Entrenamiento} from './pages/entrenamiento/Entrenamiento'
import {Historial} from './pages/historial/Historial'
import {Medico} from './pages/medico/Medico'
import {Metas} from './pages/metas/Metas'
import {Progreso} from './pages/progreso/Progreso'
import {Main} from './pages/Main'
import { sv_url } from './routes/sv.web';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`${sv_url.DEV}${PublicRoutes.LOGIN}`} />} />
        <Route path={`${sv_url.DEV}${PublicRoutes.LOGIN}`} element={<Login />} />
        <Route path={`${sv_url.DEV}${PublicRoutes.REGISTER}`} element={<Register />} />
        <Route path={`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE}`}>
          <Route element={<Main/>}>
              <Route path={`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_PROFILE}`} element={<Home/>}/>
              <Route path={`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_CHATS}`} element={<Chats/>}/>
              <Route path={`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_ENFERMEDADES}`} element={<Enfermedades/>}/>
              <Route path={`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_COMUNIDAD}`} element={<Comunidad/>}/>
              <Route path={`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_ENTRENAMIENTO}`} element={<Entrenamiento/>}/>
              <Route path={`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_HISTORIAL}`} element={<Historial/>}/>
              <Route path={`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_MEDICO}`} element={<Medico/>}/>
              <Route path={`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_METAS}`} element={<Metas/>}/>
              <Route path={`${sv_url.DEV}${PrivateRoutes.LANDING_PAGE_PROGRESO}`} element={<Progreso/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
