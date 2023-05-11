import NavBar from '../../components/Navbar';

import { Chart } from "react-google-charts";

import { useState, useEffect } from 'react';

import { FaChartPie } from 'react-icons/fa';


import { db } from '../../services/firebaseConnection';
import { addDoc, collection, getDocs } from 'firebase/firestore';


export const options = {
    title: "Recursos em 2023",
};


export function Home() {

    const [recursos, setRecursos] = useState([]);

    const [moradores, setMoradores] = useState([]);


    useEffect(() => {

        async function loadRecursos() {

            const listRef = collection(db, 'alimentos');

            const query = await getDocs(listRef)
                .then((snapshot) => {
                    let lista = [];

                    snapshot.forEach((doc) => {
                        lista.push(doc.data().quantidadeAlimento)
                    })

                    const somaAlimentos = lista.reduce((acc, value) => {
                        return acc + value;
                    }, 0)

                    setRecursos(somaAlimentos);
                })

        }

        loadRecursos();
    }, [])

    useEffect(() => {

        async function loadMoradores() {

            const listRef = collection(db, 'moradores');
            const query = await getDocs(listRef)
                .then((snapshot) => {
                    let lista = [];

                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
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


    const data = [
        ["Task", "Hours per Day"],
        ["Alimentos", recursos],
        ["Vestuários", 5],
        ["Higiene", 12],
    ];

    return (
        <>
            <NavBar />

            <main>
                <h1>Dashboard</h1>

                {/* PIE CHART */}

                <div className="col-xl-8 col-md-8">

                    <div className="card mb-4">
                        <div className="card-header">
                            <FaChartPie size={18} style={{ marginRight: 8 }} />

                            Recursos em 2023
                        </div>
                        <div className="card-body">

                            <Chart
                                chartType="PieChart"
                                data={data}
                                width={"90%"}
                                height={"300px"}
                            />

                        </div>
                    </div>
                </div>

                {/* TABELA */}

                <div id='layoutSidenav_content'>

                    <div className="card mb-4" style={{ marginRight: 20 }}>
                        <div className="card-header">
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {moradores.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td data-label='Nome'>{item.nome} </td>
                                                <td data-label='Idade'>{item.idade}</td>
                                                <td data-label='Sexo'>{item.sexo}</td>
                                                <td data-label='CPF'>{item.cpfMorador.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</td>
                                                <td data-label='Data Cadastro'>{item.dataCadastro}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}