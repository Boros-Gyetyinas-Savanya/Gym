import { useState } from "react";
import { useDispatch } from "react-redux";
import { customerAdd } from "../../redux/cartSlice";

import "./login.css";

const Login = () => {
  const [nev, setNev] = useState("");
  const [cim, setCim] = useState("");
  const dispatch = useDispatch();

  const elkuld = (event) => {
    event.preventDefault();
    dispatch(customerAdd({ nev, cim }));
  };

  return (
    <div className="login-container">
      <form>
        <label htmlFor="nev">Név: </label>
        <input
          type="text"
          name="nev"
          id="nev"
          onChange={(e) => setNev(e.target.value)}
        />
        <label htmlFor="cim">Cím: </label>
        <input
          type="text"
          name="cim"
          id="cim"
          onChange={(e) => setCim(e.target.value)}
        />
        <button onClick={elkuld}>Elküld</button>
      </form>
    </div>
  );
};

export default Login;
