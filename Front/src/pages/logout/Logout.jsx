import { useDispatch } from 'react-redux';
import {
    customerDelete,
    isLoggedInChange,
    trainerDelete,
    planDelete,
} from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

import './logout.css';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const kilep = () => {
        dispatch(isLoggedInChange());
        dispatch(customerDelete());
        dispatch(trainerDelete());
        dispatch(planDelete());
        navigate('/login');
        localStorage.removeItem('nev');
        localStorage.removeItem('email');
        localStorage.removeItem('isLoggedIn');
    };

    const marad = () => {
        navigate('/');
    };

    return (
        <div className="login-container">
            <p>Tényleg el akarsz hagyni minket?</p>
            <button onClick={kilep}>Igen</button>
            <button onClick={marad}>Nem</button>
        </div>
    );
};

export default Logout;
