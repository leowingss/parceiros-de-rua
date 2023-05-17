import { useState, createContext, useEffect } from 'react';

import { auth, db } from '../services/firebaseConnection';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUser() {
            const storageUser = localStorage.getItem('@parceiros');

            if (storageUser) {
                const dataUser = JSON.parse(storageUser);
                setUser(dataUser);
                setLoading(false);
            }

            setLoading(false);
        }

        loadUser();

    }, [])

    async function signIn(email, senha) {
        setLoadingAuth(true);

        await signInWithEmailAndPassword(auth, email, senha)
            .then(async (value) => {
                let uid = value.user.uid;
                const docRef = doc(db, 'usuarios', uid);
                const docSnap = await getDoc(docRef);
                const name = docSnap.data().nome;

                let data = {
                    uid,
                    nome: name,
                    email: value.user.email,
                };


                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
                toast.success(`Bem vindo(a) ${name}`);
                navigate('/');

            })
            .catch((error) => {
                console.log(error);
                setLoadingAuth(false);
                toast.error('Erro ao logar');
            })
    }



    async function signUp(email, senha, nome, formatDate) {
        setLoadingAuth(true);

        await createUserWithEmailAndPassword(auth, email, senha)
            .then(async (value) => {
                let uid = value.user.uid;


                await setDoc(doc(db, "usuarios", uid), {
                    nome: nome,
                    email: value.user.email,
                    data: formatDate
                })
                    .then(() => {

                        let data = {
                            uid,
                            nome,
                            email: value.user.email
                        };

                        setUser(data);
                        storageUser(data);
                        setLoadingAuth(false);
                        navigate('/');
                        toast.success('Cadastro realizado com sucesso!');
                    })
                    .catch((error) => {
                        console.log(error);
                        setLoadingAuth(false);
                        toast.error('Erro ao cadastrar');
                    })
            })

    }

    function storageUser(data) {
        localStorage.setItem('@parceiros', JSON.stringify(data));
    }

    async function logout() {
        await signOut(auth);
        localStorage.removeItem('@parceiros');
        navigate('/');
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                signed: !!user,
                signUp,
                signIn,
                logout,
                loadingAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    )

}