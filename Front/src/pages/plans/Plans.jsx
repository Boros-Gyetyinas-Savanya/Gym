import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from 'axios';

import "./plans.css";
import { planAdd } from "../../redux/cartSlice";
import { useEffect } from "react";

const Plans = () => {
  const dispatch = useDispatch();
  const [tulajdonsagok, setTulajdonsagok] = useState([]);

  useEffect(() => {
    const leker = async () => {
      try {
        const tulaj = await axios("http://localhost:3500/feature");
        console.log(tulaj);
      } catch (error) {
        console.log(error.messsage);
      }
    };

    leker();
  }, []);

  // const kivalaszt = (e) => {
  //   e.preventDefault();

  //   dispatch(planAdd(plan));
  // };
  return (
    <>
      <Header title="Membership Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
        laborum error facilis dignissimos mollitia nobis!
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {
                  /* Nem Működik*/
                  features.map(({ feature, available }, index) => {
                    return (
                      <p key={index} className={!available ? "disabled" : ""}>
                        {feature}
                      </p>
                    );
                  })
                }
                <button
                  className="btn lg"
                  onClick={(e) => dispatch(planAdd(name))}
                >
                  Choose plan
                </button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
