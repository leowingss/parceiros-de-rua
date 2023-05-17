import NavBar from "../../components/Navbar";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaTable } from 'react-icons/fa';
import { FiTrash2, FiPlus } from 'react-icons/fi';

import { addDoc, collection, getDocs, deleteDoc, doc, query, limit } from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';

import { toast } from 'react-toastify';


const listRef = collection(db, 'higienes');

export function Higiene() {

    const [higiene, setHigiene] = useState([]);

    const [nomeHigiene, setNomeHigiene] = useState('');
    const [categoriaHigiene, setCategoriaHigiene] = useState('');
    const [origemHigiene, setOrigemHigiene] = useState('');
    const [qtdHigiene, setQtdHigiene] = useState('');

    useEffect(() => {

        async function loadHigienes() {
            const q = query(listRef, limit(5))
            const querySnapshot = await getDocs(q)
                .then((snapshot) => {
                    let lista = [];

                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            nomeHigiene: doc.data().nomeHigiene,
                            categoriaHigiene: doc.data().categoriaHigiene,
                            origemHigiene: doc.data().origemHigiene,
                            qtdHigiene: doc.data().quantidadeHigiene
                        })
                    })

                    setHigiene(lista);
                })
        }

        loadHigienes();

    }, [])

    async function handleDeleteHigine(id) {
        const docRef = doc(db, 'higienes', id);
        await deleteDoc(docRef)
            .then(() => {
                const removeItem = higiene.filter(item => item.id !== id);
                setHigiene(removeItem);
                toast.success('Higiene deletada com sucesso!');
            })
    }

    async function handleRegisterHigiene(e) {
        e.preventDefault();

        if (nomeHigiene === '' || categoriaHigiene === '' || origemHigiene === '' || qtdHigiene === '') return;

        const quantidadeHigiene = Number(qtdHigiene);

        await addDoc(collection(db, "higienes"), {
            nomeHigiene,
            categoriaHigiene,
            origemHigiene,
            quantidadeHigiene
        })
            .then(() => {

                setNomeHigiene('');
                setCategoriaHigiene('');
                setOrigemHigiene('');
                setQtdHigiene('');

                toast.success('Higiene cadastrada com sucesso!');
            })

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
                                            <td data-label='Nome do Higiene'>{item.nomeHigiene} </td>
                                            <td data-label='Categoria do Higiene'>{item.categoriaHigiene}</td>
                                            <td data-label='Origem'>{item.origemHigiene}</td>
                                            <td data-label='Quantidade'>{item.qtdHigiene}</td>
                                            <td data-label='#'>
                                                <Button variant="danger" onClick={() => handleDeleteHigine(item.id)}>
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

