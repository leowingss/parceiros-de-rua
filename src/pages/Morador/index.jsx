import { useState, useEffect } from "react";

import NavBar from "../../components/Navbar";
import Button from 'react-bootstrap/Button';
import { IMaskInput } from "react-imask";

import { format } from "date-fns";

import { FiTrash, FiPlus } from 'react-icons/fi';

import { db } from '../../services/firebaseConnection';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';


const listRef = collection(db, 'moradores');


export function Morador() {

    const [moradores, setMoradores] = useState([]);

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [sexo, setSexo] = useState('');
    const [cpfMorador, setCpfMorador] = useState('');
    const [dataCadastro, setDataCadastro] = useState(new Date());

    useEffect(() => {

        async function loadMoradores() {
            const query = await getDocs(listRef)
                .then((snapshot) => {
                    let lista = [];

                    snapshot.forEach((doc) => {
                        lista.push({
                            nome: doc.data().nome,
                            idade: doc.data().idade,
                            cpfMorador: doc.data().cpfMorador,
                            sexo: doc.data().sexo,
                            dataCadastro: doc.data().formatDate
                        })
                    })

                    setMoradores(lista);


                })
        }

        loadMoradores();


    }, []);




    function handleDeleteMorador(item) {
        console.log(item);
    }

    async function handleRegisterMorador(e) {
        e.preventDefault();

        if (nome === '' || idade === '' || sexo === '' || cpfMorador === '') return;


        const formatDate = format(dataCadastro, 'dd/MM/yyyy');

        await addDoc(collection(db, "moradores"), {
            nome,
            idade,
            sexo,
            cpfMorador,
            formatDate
        })
            .then(() => {
                setNome('');
                setIdade('');
                setSexo('');
                setCpfMorador('');
                toast.success('Morador cadastrado com sucesso!')
            })
            .catch((error) => {
                console.log(error);
                toast.error('Erro ao cadastrar');
            })



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
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
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
                                    <th>Deletar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {moradores.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td data-label='Nome'>{item.nome} </td>
                                            <td data-label='Idade'>{item.idade}</td>
                                            <td data-label='Sexo'>{item.sexo}</td>
                                            <td data-label='CPF'>{item.cpfMorador}</td>
                                            <td data-label='Data Cadastro'>{item.dataCadastro}</td>
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