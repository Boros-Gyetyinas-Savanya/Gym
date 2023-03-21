import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { customerAdd, isLoggedInChange } from '../../redux/cartSlice';

import './login.css';

const Login = () => {
    const [nev, setNev] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const elkuld = (event) => {
        event.preventDefault();

        const leker = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3500/user/login',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ nev, password }),
                    }
                );

                const res = await response.json();
                // console.log(response.ok);

                if (response.ok) {
                    const { nev, email } = res;
                    dispatch(customerAdd({ nev, email }));
                    dispatch(isLoggedInChange());
                    localStorage.setItem('nev', nev);
                    localStorage.setItem('email', email);
                    localStorage.setItem('isLoggedIn', true);
                    navigate('/');
                    // console.log(res);
                    window.alert('Sikeres bejelentkezés!');
                    if (nev === 'admin') {
                        window.location.replace('http://localhost:3500/');
                    }
                } else {
                    window.alert(res.msg);
                }
            } catch (error) {}
        };

        leker();
    };

    return (
        <div className="login-container">
            <h1>Belépés</h1>
            <form>
                <label htmlFor="nev">Név: </label>
                <input
                    type="text"
                    name="nev"
                    id="nev"
                    onChange={(e) => setNev(e.target.value)}
                />
                <label htmlFor="password">Jelszó: </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={elkuld}>Elküld</button>
            </form>
            <div>
                <p>Nem vagy még regisztrálva!</p>
                <NavLink to="/register">Regisztráció</NavLink>
            </div>
        </div>
    );
};

export default Login;
