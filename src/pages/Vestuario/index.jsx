import NavBar from "../../components/Navbar";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaTable } from 'react-icons/fa';
import { FiTrash2, FiPlus } from 'react-icons/fi';

import { db } from '../../services/firebaseConnection';
import { addDoc, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export function Vestuario() {

    const [vestuarios, setVestuarios] = useState([
        { nome: 'Camiseta Polo', categoria: 'Camiseta', origem: 'Doação', qtd: '1' },
        { nome: 'Calça Jeans', categoria: 'Calça', origem: 'Compra comunitária', qtd: '2' },
        { nome: 'Jaqueta moletom', categoria: 'Jaqueta', origem: 'Doação', qtd: '1' },
    ]);

    const [nomeVestuario, setNomeVestuario] = useState('');
    const [categoriaVestuario, setCategoriaVestuario] = useState('');
    const [origemVestuario, setOrigemVestuario] = useState('');
    const [qtdVestuario, setQtdVestuario] = useState('');

    function handleDeleteVestuario(item) {
        console.log(item);
    }

    async function handleRegisterVestuario(e) {
        e.preventDefault();


        if (nomeVestuario === '' || categoriaVestuario === '' || origemVestuario === '' || qtdVestuario === '') return;

        const quantidadeVestuario = Number(qtdVestuario);

        await addDoc(collection(db, "vestuarios"), {
            nomeVestuario,
            categoriaVestuario,
            origemVestuario,
            quantidadeVestuario
        })
            .then(() => {

                setNomeVestuario('');
                setCategoriaVestuario('');
                setOrigemVestuario('');
                setQtdVestuario('');

                toast.success('Vestuário cadastrado com sucesso!');
            })
            .catch((error) => {
                console.log(error);
                toast.error('Erro ao cadastrar.');
            })

    }


    return (
        <>
            <NavBar />
            <main>
                <h1>Vestuário</h1>
                <div className="card mb-4">
                    <div className="card-header">
                        <FiPlus size={18} style={{ marginRight: 8 }} />

                        Cadastrar Vestuário
                    </div>
                    <div className="card-body">

                        <form onSubmit={handleRegisterVestuario}>
                            <div className="form-group col-md-4">
                                <label htmlFor="nome">Nome do Vestuário:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={nomeVestuario}
                                    onChange={(e) => setNomeVestuario(e.target.value)}
                                    required />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="categoriafood">Categoria do Vestuário:</label>
                                    <select
                                        className="form-control"
                                        id="categoriafood"
                                        name="categoriafood"
                                        value={categoriaVestuario}
                                        onChange={(e) => setCategoriaVestuario(e.target.value)}
                                        required>
                                        <option value="">Selecione</option>
                                        <option value="Camiseta">Camiseta</option>
                                        <option value="Calça">Calça</option>
                                        <option value="Jaqueta">Jaqueta</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="origem">Origem Vestuário:</label>
                                    <select
                                        className="form-control"
                                        id="origem"
                                        name="origem"
                                        value={origemVestuario}
                                        onChange={(e) => setOrigemVestuario(e.target.value)}
                                        required>
                                        <option value="">Selecione</option>
                                        <option value="Doação">Doação</option>
                                        <option value="Compra Comunitária">Compra Comunitária</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="qntd">Quantidade:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="qntd"
                                        name="qntd"
                                        min={1}
                                        value={qtdVestuario}
                                        onChange={(e) => setQtdVestuario(e.target.value)}
                                        required />
                                </div>
                            </div>
                            <br />
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                        </form>

                    </div>
                </div>

                <div className="card mb-4" style={{ marginRight: 20 }}>
                    <div className="card-header">
                        <FaTable size={18} style={{ marginRight: 8 }} />
                        Estoque de Vestuários
                    </div>
                    <div className="card-body">

                        <table id="example" className="table table-striped" style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th>Nome do Vestuário</th>
                                    <th>Categoria do Vestuário</th>
                                    <th>Origem</th>
                                    <th>Quantidade</th>
                                    <th>Deletar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vestuarios.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td data-label='Nome do Vestuário'>{item.nome} </td>
                                            <td data-label='Categoria do Vestuário'>{item.categoria}</td>
                                            <td data-label='Origem'>{item.origem}</td>
                                            <td data-label='Quantidade'>{item.qtd}</td>
                                            <td data-label='#'>
                                                <Button variant="danger" onClick={() => handleDeleteVestuario(item)}>
                                                    <FiTrash2 size={20} />
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>
        </>
    )
}

