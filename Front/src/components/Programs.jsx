import { FaCrown } from 'react-icons/fa';
import SectionHead from './SectionHead';
// import { programs } from "../data";
import Card from '../UI/Card';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { SiOpenaigym } from 'react-icons/si';

const Programs = () => {
    const [programs, setPrograms] = useState([]);
    const [icon, setIcon] = useState('');

    useEffect(() => {
        const meghiv = async () => {
            const adat = await fetch('http://localhost:3500/program');
            const data = await adat.json();
            // console.log(data);

            if (data[0].icon === '<SiOpenaigym />') {
                setIcon('<SiOpenaigym />');
            }
            setPrograms(data);
        };
        meghiv();
    }, []);
    return (
        <section className="programs">
            <div className="container programs__container">
                <SectionHead icon={<FaCrown />} title="Programs" />
                <div className="programs__wrapper">
                    {programs.map((elem) => {
                        return (
                            <Card className="programs__program" key={elem._id}>
                                {icon === '<SiOpenaigym />' ? (
                                    <span>
                                        <SiOpenaigym />
                                    </span>
                                ) : (
                                    <span>ff</span>
                                )}
                                <h4>{elem.title}</h4>
                                <small>{elem.info}</small>
                                <Link to={elem.path} className="btn sm">
                                    Learn More <AiFillCaretRight />
                                </Link>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Programs;
