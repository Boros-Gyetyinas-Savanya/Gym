import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { customerAdd, isLoggedInChange } from '../../redux/cartSlice';

import './register.css';

const Register = () => {
    const [nev, setNev] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const elkuld = (event) => {
        event.preventDefault();

        const feltolt = async () => {
            try {
                const response = await fetch(
                    'http://localhost:3500/user/register',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ nev, email, password }),
                    }
                );

                const res = await response.json();
                console.log(response.ok);

                if (response.ok) {
                    dispatch(customerAdd({ nev, email, password }));
                    dispatch(isLoggedInChange());
                    localStorage.setItem('nev', nev);
                    localStorage.setItem('email', email);
                    localStorage.setItem('isLoggedIn', true);
                    navigate('/');
                    window.alert(res.msg);
                } else {
                    window.alert(res.message);
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        feltolt();
    };

    return (
        <div className="login-container">
            <h1>Regisztráció</h1>
            <form>
                <label htmlFor="nev">Név: </label>
                <input
                    type="text"
                    name="nev"
                    id="nev"
                    onChange={(e) => setNev(e.target.value)}
                />
                <label htmlFor="email">E-mail: </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
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
                <p>Már tag vagy!</p>
                <NavLink to="/login">Belépés</NavLink>
            </div>
        </div>
    );
};

export default Register;
