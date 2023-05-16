import NavBar from "../../components/Navbar";
import Button from 'react-bootstrap/Button';

import { db } from '../../services/firebaseConnection';

import { FiTrash } from 'react-icons/fi';

import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

import { useState, useEffect } from "react";

import { toast } from 'react-toastify';

const docRef = collection(db, 'usuarios');

export function Usuarios() {

    useEffect(() => {

        async function loadUsuarios() {
            const query = await getDocs(docRef)
                .then((snapshot) => {
                    let lista = [];

                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            nome: doc.data().nome,
                            email: doc.data().email,
                            data: doc.data().data
                        })
                    })
                    setUsuarios(lista);
                })
        }

        loadUsuarios();

        return () => { }
    }, [])

    const [usuarios, setUsuarios] = useState([]);

    async function handleDeleteUser(id) {
        const docRef = doc(db, "usuarios", id);
        await deleteDoc(docRef)
            .then(() => {
                toast.success('Usuário deletado com sucesso!');
            })

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
                                        {/* <th>Gestor</th> */}
                                        <th>Data Cadastro</th>
                                        {/* <th>Ação</th> */}
                                        <th>Deletar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td data-label='Nome'>{item.nome} </td>
                                                <td data-label='Email'>{item.email}</td>
                                                {/* <td data-label='Gestor'>{item.gestor}</td> */}
                                                <td data-label='Data Cadastro'>{item.data}</td>
                                                {/* <td data-label='Ação'>{item.acao}</td> */}
                                                <td data-label='#'>
                                                    <Button variant="danger" onClick={() => handleDeleteUser(item.id)}>
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