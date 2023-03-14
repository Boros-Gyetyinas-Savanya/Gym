import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { useSelector } from "react-redux";

import "./cart.css";

function Cart() {
  const adatok = useSelector((state) => state.kartya.value);
  console.log(adatok.customer);
  return (
    <>
      <div className="cart-container">
        <div className="nev">
          Vevő neve: <span>{adatok.customer.nev}</span>
        </div>
        <div className="cim">
          Vevő címe: <span>{adatok.customer.cim}</span>
        </div>
        <div className="terv">
          Edzésterv: <span>{adatok.plan}</span>
        </div>
        <div className="edzo">
          Edzésterv: <span>{adatok.trainer}</span>
        </div>
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
            </a>{" "}
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
