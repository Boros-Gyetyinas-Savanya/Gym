import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/", {
        email,
        password,
      })
      .then((res) => {
        if (res.ok) {
          history("/home", { state: { id: email } });
        }
      })
      .catch((e) => console.log(e));
    return (
      <div className="login">
        <h1>Login</h1>
        <form action="POST">
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            name=""
            id=""
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            name=""
            id=""
          />
          <input type="submit" onClick={submit} />
        </form>

        <br />
        <p>OR</p>
        <br />

        <Link to="/login">Login Page</Link>
      </div>
    );
  }
};
export default Signup;
