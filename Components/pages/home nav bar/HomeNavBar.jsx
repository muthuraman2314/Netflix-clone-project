import { useNavigate } from "react-router-dom";
import pic from "../files/logo.png";
import "../home nav bar/HomeNavBar.css";
import { TbWorld } from "react-icons/tb";
const HomeNavBar = () => {
  const navigate = useNavigate([]);
  const Navigates = () => {
    navigate("/LoginPage");
  };
  return (
    <div>
      <div className="Home-navBar">
        <img className="logo" src={pic} alt="" />
        <div className="buttons">
          <label>
            <TbWorld className="icon" />
            <select className="option">
              <option className="opt-1" value="English">
                English
              </option>

              <option className="opt-2" value=" हिंदी">
                हिंदी
              </option>
            </select>
          </label>
          <div>
            <label>
              <input
                className="option-two"
                type="button"
                onClick={Navigates}
                value={"sign in"}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeNavBar;
