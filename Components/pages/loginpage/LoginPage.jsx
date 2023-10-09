import "../loginpage/LoginPage.css";
import logos from "../files/logo.png";
import Inputfield from "../input field/Inputfield";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    localStorage.getItem("email", email);
    localStorage.getItem("password", password);
    setEmail("");
    setPassword("");
    navigate("/Moviepage");
  };
  return (
    <div>
      <div className="lg-back-img">
        <div>
          <img className="lg-logo" src={logos} alt="" srcset="" />
        </div>
        <div className="lg-container">
          <div className="lg-container-one">
            <div className="lg-heading">
              <h1>Sigin In</h1>
            </div>
            <form className="lg-input" action="" onSubmit={handleSubmit}>
              <Inputfield
                type="email"
                placeholder={"Email or phone number"}
                className=" lg-input-boxs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Inputfield
                placeholder="Password"
                type="password"
                value={password}
                className="lg-input-boxs"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input className="lg-submits" type="submit" value="Sign in" />
              <div className="lg-checkbox">
                <div className="lg-checkboxs">
                  <input type="checkbox" /> <h5>Rember me</h5>
                </div>
                <h5>Need help?</h5>
              </div>
            </form>
            <div className="lg-moreabout">
              <div className="lg-cont">
                <h4>New to Netflix?</h4>
                <span
                  className="lg-sign-in"
                  onClick={() => {
                    navigate("/Register");
                  }}
                >
                  Sign In
                </span>
              </div>

              <h5>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </h5>
              <h5>
                The information collected by Google reCAPTCHA is subject to the
                Google Privacy Policy and Terms of Service, and is used for
                providing, maintaining, and improving the reCAPTCHA service and
                for general security purposes (it is not used for personalised
                advertising by Google).
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loginpage;
