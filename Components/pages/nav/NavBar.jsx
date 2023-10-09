import logos from "../files/logo.png";
import face from "../files/face.jpg";
import "../nav/NavBar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`navbar ${show && "nav-black"}`}>
        <div className="nav-one">
          <img className="logos" src={logos} alt="logo" />
          <img className="avtar" src={face} alt="face" />
          <div className="nav-two">
            <button onClick={handleSubmit}>Log out</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
