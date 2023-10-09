import "./Home.css";
import Inputfield from "../input field/Inputfield";
import { MdArrowForwardIos } from "react-icons/md";
import HomeNavBar from "../home nav bar/HomeNavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LandingPage from "../landing page/LandingPage";

const Home = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    navigate("/register");
  };
  return (
    <>
      <div className="back-img">
        <HomeNavBar />
        <div className="container-one">
          <div className="line">
            <div className="line-one">
              <h1>Unlimited movies, TV shows and more</h1>
            </div>
            <h2 className="line-two">Watch anywhere. Cancel anytime.</h2>
            <h2 className="line-three">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h2>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="inputs">
              <Inputfield
                className="input-box"
                type="email"
                placeholder="Email adders"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input className="submit" type="submit" value="Get started" />
              <MdArrowForwardIos className="arrow-icon" />
            </form>
          </div>
        </div>
      </div>
      <LandingPage />
    </>
  );
};
export default Home;
