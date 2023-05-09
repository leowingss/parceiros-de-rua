import { Routes, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Usuarios } from '../pages/Usuarios';
import { Morador } from '../pages/Morador';
import { Alimentos } from '../pages/Alimentos';
import { Vestuario } from '../pages/Vestuario';
import { Higiene } from '../pages/Higiene';

export default function RoutesApp() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/usuarios' element={<Usuarios />} />
            <Route path='/cadastro' element={<Morador />} />
            <Route path='/recurso/alimentos' element={<Alimentos />} />
            <Route path='/recurso/vestuario' element={<Vestuario />} />
            <Route path='/recurso/higiene' element={<Higiene />} />
        </Routes>
    )
}