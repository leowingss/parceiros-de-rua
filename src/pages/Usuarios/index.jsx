import NavBar from "../../components/Navbar";
import Button from 'react-bootstrap/Button';

import { FiTrash } from 'react-icons/fi';


import { useState } from "react";

export function Usuarios() {

    const [usuarios, setUsuarios] = useState([
        { nome: 'Fulano', email: 'fulano@gmail.com', gestor: 2, data: '07/05/2023', acao: 'vestuario' },
        { nome: 'Ciclano', email: 'ciclano@gmail.com', gestor: 3, data: '07/05/2023', acao: 'alimentos' },
        { nome: 'Beltarno', email: 'beltrano@gmail.com', gestor: 4, data: '07/05/2023', acao: 'vestuario' },
    ]);

    function handleDeleteUser(item) {
        console.log(item);
    }

    return (
        <>
            <NavBar />
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Usuários cadastrados </h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item active">Parceiros de rua</li>
                    </ol>

                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-table me-1"></i>
                            Usuários Cadastrados
                        </div>
                        <div className="card-body">

                            <table id="example" className="table table-striped" style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Email</th>
                                        <th>Gestor</th>
                                        <th>Data Cadastro</th>
                                        <th>Ação</th>
                                        <th>Deletar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td data-label='Nome'>{item.nome} </td>
                                                <td data-label='Email'>{item.email}</td>
                                                <td data-label='Gestor'>{item.gestor}</td>
                                                <td data-label='Data Cadastro'>{item.data}</td>
                                                <td data-label='Ação'>{item.acao}</td>
                                                <td data-label='#'>
                                                    <Button variant="danger" onClick={() => handleDeleteUser(item)}>
                                                        <FiTrash size={20} />
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}