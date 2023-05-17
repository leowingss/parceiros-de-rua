import { Routes, Route } from 'react-router-dom';

import { Cadastro } from '../pages/Cadastro';
import { Home } from '../pages/Home';
import { Usuarios } from '../pages/Usuarios';
import { Morador } from '../pages/Morador';
import { Alimentos } from '../pages/Alimentos';
import { Vestuario } from '../pages/Vestuario';
import { Higiene } from '../pages/Higiene';
import { Login } from '../pages/Login';

export default function RoutesApp() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/usuarios' element={<Usuarios />} />
            <Route path='/morador' element={<Morador />} />
            <Route path='/recurso/alimentos' element={<Alimentos />} />
            <Route path='/recurso/vestuario' element={<Vestuario />} />
            <Route path='/recurso/higiene' element={<Higiene />} />
            <Route path='login' element={<Login />} />
        </Routes>
    )
}