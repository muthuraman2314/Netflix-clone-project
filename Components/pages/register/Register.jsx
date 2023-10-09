import "../register/Register.css";
import logos from "../files/logo.png";
import Inputfield from "../input field/Inputfield";
import { useState } from "react";
import "../landing page/footer/Footerlay";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
  };
  return (
    <div>
      <div className="reg-back-img">
        <div>
          <img className="reg-logo" src={logos} alt="" srcset="" />
        </div>
        <div className="reg-container">
          <div className="reg-container-one">
            <div className="reg-heading">
              <h1>Sigin Up</h1>
            </div>
            <form
              className="reg-input"
              onSubmit={(submitEvent) => handleSubmit(submitEvent)}
            >
              <Inputfield
                type="email"
                placeholder={"Email or phone number"}
                className=" reg-input-boxs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Inputfield
                type="password"
                placeholder="Password"
                className="reg-input-boxs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input className="reg-submits" type="submit" value="Sign Up" />
            </form>
            <div className="reg-moreabout">
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
              <div>
                <p>
                  Questions? Call <span>000-800-919-1694</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
