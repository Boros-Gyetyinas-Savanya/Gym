import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./programs.css";

const Programs = () => {
  const params = useParams();
  console.log(params.id);
  const [program, setProgram] = useState([]);

  useEffect(() => {
    const letolt = async () => {
      try {
        const response = await fetch("http://localhost:3500/program");
        const programs = await response.json();
        console.log(programs);
        const data = programs.filter((program) => program.id === +params.id);
        console.log(data);
        setProgram(programs.filter((program) => program.id === +params.id));
      } catch (error) {
        console.log(error.message);
      }
    };

    letolt();
  }, []);

  return (
    <div className="programs-container">
      <h1>{program[0].title}</h1>
      <h1>{program[0].info}</h1>
      {/* <ul>
        {program[0].user.map((elem) => (
          <li>{elem}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Programs;
