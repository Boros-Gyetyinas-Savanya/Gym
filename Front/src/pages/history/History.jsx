import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./history.css";

const History = () => {
  const adatok = useSelector((state) => state.kartya.value);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const leker = async () => {
      try {
        const response = await fetch("http://localhost:3500/cart");
        const kartyak = await response.json();

        setCarts(
          kartyak.filter((elem) => elem.user.nev === adatok.customer.nev)
        );
        console.log(kartyak);
      } catch (error) {
        console.log(error.message);
      }
    };

    leker();
  }, [adatok.customer.nev]);

  return (
    <div className="history-container">
      <h1>Üdvözlet {adatok.customer.nev}!</h1>
      <p>Eddigi kártyáid:</p>
      {adatok.customer.isLoggedIn
        ? carts.map((elem, index) => (
            <div className="kartya" key={index}>
              <p>Plan neve: {elem.plan.name}</p>
              <p>Edző neve: {elem.trainer.name}</p>
              <p>Plan ára: {elem.plan.price}</p>
              <img
                src={require(`../../images/${elem.trainer.image}.jpg`)}
                alt=""
              />
            </div>
          ))
        : ""}
    </div>
  );
};

export default History;
