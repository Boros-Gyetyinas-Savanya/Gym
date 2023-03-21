import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { trainerDelete, planDelete } from '../../redux/cartSlice';

import './cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const adatok = useSelector((state) => state.kartya.value);
    console.log(adatok.customer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const nev = localStorage.getItem('nev');
    const email = localStorage.getItem('email');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    const feldolgoz = () => {
        const feltolt = async () => {
            try {
                const response = await fetch('http://localhost:3500/cart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nev: nev,
                        email: email,
                        terv: adatok.plan,
                        edzo: adatok.trainer,
                    }),
                });

                if (response.ok) {
                    const res = await response.json();
                    window.alert(res.msg);
                    dispatch(trainerDelete());
                    dispatch(planDelete());
                    navigate('/');
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        feltolt();
    };

    return (
        <>
            <div className="cart-container">
                <div className="nev">
                    Ügyfél neve: <span>{nev}</span>
                </div>
                <div className="email">
                    Ügyfél e-mail címe: <span>{email}</span>
                </div>
                <div className="terv">
                    Edzésterv: <span>{adatok.plan}</span>
                </div>
                <div className="edzo">
                    Edző neve: <span>{adatok.trainer}</span>
                </div>
                <button onClick={(event) => feldolgoz(event)}>
                    Esemény lekötése
                </button>
            </div>
            <section className="contact">
                <div className="container contact__container">
                    <div className="contact__wrapper">
                        <a
                            href="https://www.google.com/chrome/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <MdEmail />
                        </a>
                        <a
                            href="https://www.google.com/chrome/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <BsMessenger />
                        </a>{' '}
                        <a
                            href="https://www.google.com/chrome/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;
