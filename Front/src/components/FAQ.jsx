import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";
const FAQ = ({ question, answer }) => {
  const [inAnswerShowing, setinAnswerShowing] = useState(false);

  return (
    <article
      className="faq"
      onClick={() => setinAnswerShowing((prev) => !prev)}
    >
      <div>
        <h4>{question}</h4>
        <button className="fqa__icon">
          {inAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {inAnswerShowing && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
