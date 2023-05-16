import { useState, useEffect } from "react";

import NavBar from "../../components/Navbar";
import Button from 'react-bootstrap/Button';
import { IMaskInput } from "react-imask";

import { format } from "date-fns";

import { FiTrash, FiPlus } from 'react-icons/fi';


export function Morador() {


    const [usuarios, setUsuarios] = useState([
        { nome: 'Vinicius Goncalves Barros', idade: 42, sexo: 'Masculino', cpf: '420.391.538-22', data: '07/05/2023' },
        { nome: 'Erick Ribeiro Pereira', idade: 60, sexo: 'Masculino', cpf: '311.431.901-12', data: '08/05/2023' },
        { nome: 'Emily Pereira Carvalho', idade: 29, sexo: 'Feminino', cpf: '874.235.983-90', data: '09/05/2023' },
        { nome: 'Luiza Araujo Azevedo', idade: 39, sexo: 'Feminino', cpf: '231.334.982-14', data: '09/05/2023' },
    ]);

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [cpfMorador, setCpfMorador] = useState('');
    const [dataCadastro, setDataCadastro] = useState(new Date());

    function handleDeleteMorador(item) {
        console.log(item);
    }

    function handleRegisterMorador(e) {
        e.preventDefault();

        if (nome === '' || idade === '' || sexo === '' || cpfMorador === '') return;


        const formatDate = format(dataCadastro, 'dd/MM/yyyy');

        let data = {
            nome,
            idade,
            sexo,
            cpfMorador,
            formatDate
        }

        console.log(data);

        setNome('');
        setIdade('');
        setSexo('');
        setCpfMorador('');

    }

    function handleChangeSelect(e) {
        setSexo(e.target.value);
    }


    return (
        <>
            <NavBar />
            <main>
                <h1>Cadastro e Consulta</h1>

                <div className="card mb-4" style={{ marginRight: 20 }}>
                    <div className="card-header">
                        {/* <i className="fas fa-table me-1"></i> */}
                        <FiPlus size={18} style={{ marginRight: 8 }} />
                        Cadastrar Morador
                    </div>

                    <form style={{ paddingLeft: 8 }} onSubmit={handleRegisterMorador}>
                        <div className="form-group col-md-4">
                            <label>Nome:</label>
                            <input type="text" className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label >Idade:</label>
                                <input
                                    type="number"
                                    className="form-control" min="0" max='99'
                                    value={idade}
                                    onChange={(e) => setIdade(e.target.value)}
                                    required />
                            </div>
                            <div className="form-group col-md-4">
                                <label >Sexo:</label>
                                <select value={sexo} onChange={handleChangeSelect} className="form-control" required >
                                    <option disabled value="">Selecione</option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Feminino</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4" style={{ marginBottom: 10 }} >
                                <label >CPF:</label>
                                {/* <input type="text" className="form-control" id="cpf" name="cpf" required /> */}
                                <IMaskInput
                                    value={cpfMorador}
                                    type='text'
                                    className='form-control'
                                    mask='000.000.000-00'
                                    required
                                    onChange={(e) => setCpfMorador(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ marginBottom: 10 }}>
                            Cadastrar
                        </button>
                    </form>
                </div >

                <div className="card mb-4" style={{ marginRight: 20 }}>
                    <div className="card-header">
                        <i className="fas fa-table me-1"></i>
                        Moradores Cadastrados
                    </div>
                    <div className="card-body">

                        <table id="example" className="table table-striped" style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Idade</th>
                                    <th>Sexo</th>
                                    <th>CPF</th>
                                    <th>Data Cadastro</th>
                                    {/* <th>Desaparecido</th> */}
                                    <th>Deletar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td data-label='Nome'>{item.nome} </td>
                                            <td data-label='Idade'>{item.idade}</td>
                                            <td data-label='Sexo'>{item.sexo}</td>
                                            <td data-label='CPF'>{item.cpf}</td>
                                            <td data-label='Data Cadastro'>{item.data}</td>
                                            {/* <td data-label='Desaparecido'>{item.desaparecido}</td> */}
                                            <td data-label='#'>
                                                <Button variant="danger" onClick={() => handleDeleteMorador(item)}>
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
            </main >
        </>
    )
}