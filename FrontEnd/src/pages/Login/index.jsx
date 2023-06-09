import React, { useContext, useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { AuthContext } from "../../contexts/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase";
import "./css/login.css";
import animation from './img/animation.svg';
import logo from './img/logo.png';

// autenticação dos usuarios

function Login() {
    const navigate = useNavigate();
    const { authenticated, loading, login } = useContext(AuthContext);
    const [signInError, setSignInError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        signInLoading,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (authenticated) {
            // Redireciona para o dashboard após autenticar
            navigate('/home');
        }
    }, [authenticated, navigate]);

    const handleSignIn = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            
            login(user.refreshToken);
            navigate('/home');
        } catch (error) {
            console.error(error);
            setSignInError(error.message);
        }
    };


    if (loading) {
        return <p>Loading...</p>;
    }


    if (signInLoading) {
        return <p>Signing in...</p>;
    }

    if (signInError) {
        return (
            <div>
                <p>Error: {signInError}</p>
            </div>
        );
    }

    if (user) {
        console.log(user)

        return (
            <div>
                <p>Registered User: {user.user.email}</p>
                <p>{String(authenticated)}</p>
                <Link to="/home" />
            </div>
        );
    }

    return (
        <div className="containerLogin">
            <div className="containerLogin_left">
                <div className="container_logo">
                    <img className="logo" src={logo} alt="" />
                </div>
                <h1>Seja Bem-vindo de volta!</h1>
                <span>Para se manter conectado conosco, por favor, faça o login com suas informações pessoais</span>
                <img className="animation" src={animation} alt="animation" />
            </div>
            <div className="containerlogin_right">
                <div className="card_login">
                    <h1>LOGIN</h1>
                    <div className="textloginfield">
                        <label htmlFor="usuario">E-mail</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email" placeholder="E-mail" />
                    </div>
                    <div className="textloginfield">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password" placeholder="Senha" />
                    </div>
                    <button className="btn_login" onClick={handleSignIn}>Login</button>
                    <div className="footerLogin">
                        <p>Voce não tem uma conta?</p>
                        <Link to="/register" className="linkFooterLogin">Crie sua conta aqui</Link>
                    </div>

                </div>
            </div>

        </div>
    )

}

export default Login