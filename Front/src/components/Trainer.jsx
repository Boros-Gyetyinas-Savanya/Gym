import Card from "../UI/Card";
// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { trainerAdd } from "../redux/cartSlice";

const Trainer = ({ image, name, job, socials }) => {
  const dispatch = useDispatch();
  /*const [trainers, settrainers] = useState([]);
  const [icon, setIcon] = useState("");

  useEffect(() => {
    const meghiv = async () => {
      const adat = await fetch("http://localhost:3500/trainer");
      const data = await adat.json();

      if (data.spori.icon === "<SiOpenaigym />") {
        setIcon();
      }
      setPrograms(data.spori);
      console.log(data);
    };
    meghiv();
  }, []);*/
  return (
    <Card className="trainer">
      <div className="trainer__img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="trainer__socials">
        {socials.map(({ icon, link }, index) => {
          return (
            <a key={index} href={link} rel="noreffer noopener">
              {icon}
            </a>
          );
        })}
      </div>
      <button onClick={(e) => dispatch(trainerAdd(name))}>Kosárba</button>
    </Card>
  );
};

export default Trainer;
