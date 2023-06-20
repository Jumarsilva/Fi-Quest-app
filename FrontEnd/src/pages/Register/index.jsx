import React, { useState } from "react";

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import "../Register/css/register.css";

import { Link } from "react-router-dom";
import { auth } from "../../services/firebase";
import animation from '../Register/img/animation.svg';
import logo from '../Register/img/logo.png';


function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);




    function handleSingOut(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);

    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        return (
            <div>
                <p>Registered User: {user.user.email}</p>
            </div>
        );
    }
    return (
        <div className="container">
            <div className="container_left">
                <div className="container_logo">
                    <img className="logo" src={logo} alt="" />
                </div>
                <h1>Seja Bem-vindo!</h1>
                <span>Para se manter conectado conosco, por favor, cadastre suas informações pessoais</span>
                <img className="animation" src={animation} alt="animation" />
            </div>
            <div className="container_right">
                <div className="card_login">
                    <h1>REGISTRO</h1>
                    <div className="textfield">
                        <label htmlFor="usuario">E-mail</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="usuario"
                            placeholder="E-mail" />
                    </div>
                    <div className="textfield">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            placeholder="Senha"
                            id="password" />
                    </div>
                    <button onClick={handleSingOut} className="btn_login">Cadastrar</button>
                    <dir className='footerRegister'>
                        <p>Voce ja tem conta ?</p>
                        <Link className="linkFooterRegister" to='/'>Login aqui...</Link>
                    </dir>
                </div>
            </div>

        </div>
    )

}

export default Register