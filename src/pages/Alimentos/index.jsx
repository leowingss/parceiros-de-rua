import NavBar from "../../components/Navbar";
import { FiPlus, FiTrash2 } from 'react-icons/fi';

import { FaTable } from 'react-icons/fa';

import { Button } from "react-bootstrap";
import { useState } from "react";


export function Alimentos() {

    const [alimentos, setAlimentos] = useState([
        { nome: 'Arroz', categoria: 'Grão', origem: 'Doação', qtd: '1' },
        { nome: 'Feijão', categoria: 'Grão', origem: 'Compra comunitária', qtd: '2' },
        { nome: 'Carne', categoria: 'Carne', origem: 'Doação', qtd: '1' },
    ]);

    const [nomeAlimento, setNomeAlimento] = useState('');
    const [categoriaAlimento, setCategoriaAlimento] = useState('');
    const [origemAlimento, setOrigemAlimento] = useState('');
    const [qtdAlimento, setQtdAlimento] = useState('');

    function handleDeleteAlimento(item) {
        console.log(item);
    }

    function handleRegisterAlimento(e) {
        e.preventDefault();

        if (nomeAlimento === '' || categoriaAlimento === ''
            || origemAlimento === '' || qtdAlimento === '') return;

        let data = {
            nomeAlimento,
            categoriaAlimento,
            origemAlimento,
            qtdAlimento
        };

        console.log(data);

        setNomeAlimento('');
        setCategoriaAlimento('');
        setOrigemAlimento('');
        setQtdAlimento('');
    }


    return (
        <>
            <NavBar />
            <main>

                <h1>Alimentos</h1>

                <div className="card mb-4" style={{ marginRight: 20 }}>
                    <div className="card-header">
                        <FiPlus size={18} style={{ marginRight: 8 }} />

                        Cadastrar Alimento
                    </div>
                    <div className="card-body">

                        <form onSubmit={handleRegisterAlimento}>
                            <div className="form-group col-md-4">
                                <label htmlFor="nome">Nome do Alimento:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    value={nomeAlimento}
                                    onChange={(e) => setNomeAlimento(e.target.value)}
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="categoriafood">Categoria do Alimento:</label>
                                    <select
                                        value={categoriaAlimento}
                                        className="form-control" id="categoriafood"
                                        name="categoriafood"
                                        onChange={(e) => setCategoriaAlimento(e.target.value)}
                                        required>
                                        <option value="">Selecione</option>
                                        <option value="Grão">Grão</option>
                                        <option value="Carne">Carne</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="origem">Origem Alimento:</label>
                                    <select
                                        value={origemAlimento}
                                        className="form-control"
                                        id="origem" name="origem"
                                        onChange={(e) => setOrigemAlimento(e.target.value)}
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
                                        id="qntd" name="qntd"
                                        min={1}
                                        value={qtdAlimento}
                                        onChange={(e) => setQtdAlimento(e.target.value)}
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
                        Estoque de Alimentos
                    </div>
                    <div className="card-body">

                        <table id="example" className="table table-striped" style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th>Nome do Alimento</th>
                                    <th>Categoria do Alimento</th>
                                    <th>Origem</th>
                                    <th>Quantidade</th>
                                    <th>Deletar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alimentos.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td data-label='Nome do Alimento'>{item.nome} </td>
                                            <td data-label='Categoria do Alimento'>{item.categoria}</td>
                                            <td data-label='Origem'>{item.origem}</td>
                                            <td data-label='Quantidade'>{item.qtd}</td>
                                            <td data-label='#'>
                                                <Button variant="danger" onClick={() => handleDeleteAlimento(item)}>
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

