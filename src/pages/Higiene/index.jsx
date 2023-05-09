import NavBar from "../../components/Navbar";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaTable } from 'react-icons/fa';
import { FiTrash2, FiPlus } from 'react-icons/fi';

export function Higiene() {

    const [higiene, setHigiene] = useState([
        { nome: 'Desinfetante', categoria: 'Desinfetante', origem: 'Doação', qtd: '1' },
        { nome: 'Água Sanitária', categoria: 'Desinfetante', origem: 'Compra comunitária', qtd: '2' },
    ]);

    const [nomeHigiene, setNomeHigiene] = useState('');
    const [categoriaHigiene, setCategoriaHigiene] = useState('');
    const [origemHigiene, setOrigemHigiene] = useState('');
    const [qtdHigiene, setQtdHigiene] = useState('');

    function handleDeleteHigine(item) {
        console.log(item);
    }

    function handleRegisterHigiene(e) {
        e.preventDefault();

        if (nomeHigiene === '' || categoriaHigiene === '' || origemHigiene === '' || qtdHigiene === '') return;

        let data = {
            nomeHigiene,
            categoriaHigiene,
            origemHigiene,
            qtdHigiene
        };

        console.log(data);

        setNomeHigiene('');
        setCategoriaHigiene('');
        setOrigemHigiene('');
        setQtdHigiene('');
    }


    return (
        <>
            <NavBar />
            <main>
                <h1>Higiene</h1>
                <div className="card mb-4">
                    <div className="card-header">
                        <FiPlus size={18} style={{ marginRight: 8 }} />

                        Cadastrar Higiene
                    </div>
                    <div className="card-body">

                        <form onSubmit={handleRegisterHigiene}>
                            <div className="form-group col-md-4">
                                <label htmlFor="nome">Nome do Higiene:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={nomeHigiene}
                                    onChange={(e) => setNomeHigiene(e.target.value)}
                                    required />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label htmlFor="categoriafood">Categoria do Higiene:</label>
                                    <select
                                        className="form-control"
                                        id="categoriafood"
                                        name="categoriafood"
                                        value={categoriaHigiene}
                                        onChange={(e) => setCategoriaHigiene(e.target.value)}
                                        required>
                                        <option value="">Selecione</option>
                                        <option value="Papéis">Papéis</option>
                                        <option value="Desinfetante">Desinfetante</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="origem">Origem Higiene:</label>
                                    <select
                                        className="form-control"
                                        id="origem"
                                        name="origem"
                                        value={origemHigiene}
                                        onChange={(e) => setOrigemHigiene(e.target.value)}
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
                                        value={qtdHigiene}
                                        onChange={(e) => setQtdHigiene(e.target.value)}
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
                        Estoque de Higiene
                    </div>
                    <div className="card-body">

                        <table id="example" className="table table-striped" style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th>Nome do Higiene</th>
                                    <th>Categoria do Higiene</th>
                                    <th>Origem</th>
                                    <th>Quantidade</th>
                                    <th>Deletar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {higiene.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td data-label='Nome do Higiene'>{item.nome} </td>
                                            <td data-label='Categoria do Higiene'>{item.categoria}</td>
                                            <td data-label='Origem'>{item.origem}</td>
                                            <td data-label='Quantidade'>{item.qtd}</td>
                                            <td data-label='#'>
                                                <Button variant="danger" onClick={() => handleDeleteHigine(item)}>
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

