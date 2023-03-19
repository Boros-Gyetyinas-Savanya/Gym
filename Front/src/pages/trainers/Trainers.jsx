import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
// import { trainers } from "../../data";
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import Trainer from '../../components/Trainer';

import './trainers.css';
import { useState, useEffect } from 'react';

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const leker = async () => {
            try {
                const response = await fetch('http://localhost:3500/trainer');
                const data = await response.json();
                setTrainers(data);
                console.log(data);
            } catch (error) {
                console.log(error.message);
            }
        };

        leker();
    }, []);

    return (
        <>
            <Header title="Our Trainers" image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur magni cupiditate, saepe natus odit at maxime atque
                iusto corrupti asperiores?
            </Header>
            <section className="trainers">
                <div className="container trainer__container">
                    {trainers.map((elem) => {
                        return (
                            <Trainer
                                key={elem._id}
                                image={elem.image}
                                name={elem.name}
                                job={elem.job}
                                socials={[
                                    {
                                        icon: <BsInstagram />,
                                        link: elem.socials[0],
                                    },
                                    {
                                        icon: <AiOutlineTwitter />,
                                        link: elem.socials[1],
                                    },
                                    {
                                        icon: <FaFacebookF />,
                                        link: elem.socials[2],
                                    },
                                    {
                                        icon: <FaLinkedin />,
                                        link: elem.socials[3],
                                    },
                                ]}
                            />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Trainers;
