import NavBar from '../../components/Navbar';

import { Chart } from "react-google-charts";

import { useState } from 'react';

import { FaChartPie } from 'react-icons/fa';


export const options = {
    title: "Recursos em 2023",
};

export function Home() {

    const [alimentos, setAlimentos] = useState(20);

    const data = [
        ["Task", "Hours per Day"],
        ["Alimentos", alimentos],
        ["Vestuários", 5],
        ["Higiene", 12],
    ];

    const [usuarios, setUsuarios] = useState([
        { nome: 'Vinicius Goncalves Barros', idade: 42, sexo: 'Masculino', cpf: '420.391.538-22', data: '07/05/2023' },
        { nome: 'Erick Ribeiro Pereira', idade: 60, sexo: 'Masculino', cpf: '311.431.901-12', data: '08/05/2023' },
        { nome: 'Emily Pereira Carvalho', idade: 29, sexo: 'Feminino', cpf: '874.235.983-90', data: '09/05/2023' },
        { nome: 'Luiza Araujo Azevedo', idade: 39, sexo: 'Feminino', cpf: '231.334.982-14', data: '09/05/2023' },
    ]);


    return (
        <>
            <NavBar />
            <body className='sb-nav-fixed'>

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
                                            {/* <th>Desaparecido</th> */}
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
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </main >
            </body>
        </>
    )
}