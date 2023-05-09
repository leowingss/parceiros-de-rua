import NavBar from '../../components/Navbar';
import Button from 'react-bootstrap/Button';

import { toast } from 'react-toastify';

import { useState } from 'react';

export function Login() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    function handleRegisterUser(e) {
        e.preventDefault();

        if (nome === '' || email === '' || senha === '' || confirmaSenha === '') return;

        let data = {
            nome,
            email,
            senha,
            confirmaSenha
        };

        console.log(data);

        setNome('')
        setEmail('')
        setSenha('');
        setConfirmaSenha('');

        toast.success('Cadastro realizado com sucesso!');


    }

    return (
        <>
            <NavBar />
            <main style={{ marginLeft: 0 }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header"><h3 className="text-center font-weight-light my-4">Criar Conta</h3></div>
                                <div className="card-body">
                                    <form onSubmit={handleRegisterUser}>
                                        <div className="row mb-3">
                                            <div className="col-md-12">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <input
                                                        className="form-control" id="inputFirstName"
                                                        type="text" placeholder="COloque seu nome aqui"
                                                        value={nome}
                                                        onChange={(e) => setNome(e.target.value)}

                                                    />
                                                    <label htmlFor="inputFirstName">Nome Completo</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                className="form-control" id="inputEmail"
                                                type="email" placeholder="name@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}

                                            />
                                            <label htmlFor="inputEmail">Endereço de email</label>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <input
                                                        className="form-control"
                                                        id="inputPassword"
                                                        type="password" placeholder="Create a password"
                                                        value={senha}
                                                        onChange={(e) => setSenha(e.target.value)}
                                                    />
                                                    <label htmlFor="inputPassword">Senha</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <input
                                                        className="form-control" id="inputPasswordConfirm"
                                                        type="password" placeholder="Confirm password"
                                                        value={confirmaSenha}
                                                        onChange={(e) => setConfirmaSenha(e.target.value)}

                                                    />
                                                    <label htmlFor="inputPasswordConfirm">Confirma sua senha</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 mb-2 ">
                                            <div className="d-grid ">
                                                <Button variant="primary" type='submit'>Criar conta</Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}