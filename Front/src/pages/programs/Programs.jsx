import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './programs.css';

const Programs = () => {
    const params = useParams();
    console.log(params.id);
    const [progs, setProgs] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const logged = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(logged);
        const letolt = async () => {
            try {
                const response = await fetch('http://localhost:3500/program');
                const progs = await response.json();
                // console.log(progs);
                const data = progs.filter(
                    (program) => program.id === +params.id
                );
                setProgs(data);
                console.log(data[0].user[0].nev);
            } catch (error) {
                console.log(error.message);
            }
        };

        letolt();
    }, []);

    const jelentkezes = async () => {
        try {
            console.log(progs);

            let vanE = false;

            for (let i = 0; i < progs[0].user.length; i++) {
                if (progs[0].user[i].nev === localStorage.getItem('nev')) {
                    vanE = true;
                    break;
                }
            }

            if (!vanE) {
                const valtoztat = await fetch('http://localhost:3500/program', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: params.id,
                        nev: localStorage.getItem('nev'),
                    }),
                });
                const data = await valtoztat.json();
                window.alert(data.msg);
                navigate('/');
            } else {
                window.alert('Ezzel a névvel már regisztráltak!');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="programs-container">
            {progs.map((prog) => (
                <div className="container-progs" key={prog._id}>
                    <div>
                        <h1>{prog.title}</h1>
                        <p>{prog.info}</p>
                    </div>
                    <div>
                        <h4>Résztvevők: </h4>
                        <ul>
                            {prog.user.map((elem) => (
                                <li key={elem._id}>{elem.nev}</li>
                            ))}
                        </ul>
                    </div>
                    {isLoggedIn ? (
                        <div>
                            <button onClick={jelentkezes}>Jelentkezem</button>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Programs;
