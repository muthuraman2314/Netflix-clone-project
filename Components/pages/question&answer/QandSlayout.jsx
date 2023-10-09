import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
const QandSlayout = ({ question, answer }) => {
  const [Show, SetShow] = useState(false);
  return (
    <div className="qands-lay-container">
      <div className="qands-lay" onClick={() => SetShow(!Show)}>
        <h4 className="qands-lay-text">{question}</h4>
        <div className="qands-lay-icon">
          {Show ? <AiOutlineClose /> : <BsPlusLg />}
        </div>
      </div>

      {Show && (
        <div className="qands-lay-container-two">
          <p className="qands-lay-para">{answer}</p>
        </div>
      )}
    </div>
  );
};
export default QandSlayout;
