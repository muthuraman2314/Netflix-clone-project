import LandingPageSlides from "./LandingPageSlide";
import pic1 from "../files/tv.png";
import pic2 from "../files/home-pic-2.jpg";
import pic3 from "../files/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png";
import tvOne from "../files/device-pile-in.png";
import videoOne from "../files/1.mp4";
import videotwo from "../files/2.mp4";
import QandS from "../question&answer/QandS";
import FooterLay from "./footer/Footerlay";
const LandingPage = () => {
  return (
    <>
      <div className="landing-container">
        <div className="landing-one">
          <LandingPageSlides
            className="content"
            title="Enjoy on your TV"
            paragraph="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
            image={pic1}
            video={videoOne}
            tvvideo="tv-video-one" // its the video css name its prope
          />
          <div className="landing-two">
            <LandingPageSlides
              className="content"
              image={pic2}
              title="Create profiles for kids"
              paragraph="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
            />
            <div className="landing-one">
              <LandingPageSlides
                className="content"
                title="Watch everywhere"
                paragraph="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
                image={tvOne}
                video={videotwo}
                tvvideo="tv-video-two" // its the video css name its prope
              />
            </div>
            <div className="landing-two">
              <LandingPageSlides
                className="content"
                image={pic3}
                title="Download your shows to watch offline"
                paragraph="Save your favourites easily and always have something to watch."
              />
            </div>
          </div>
        </div>
        <QandS />
        <div className="footer-main-containerr">
          <div className="fotter-container">
            <p>Questions? Call 000-800-919-1694</p>
            <div className="fotter-container-one">
              <FooterLay Content="FAQ" />
              <FooterLay Content="Ways to Watch" />
              <FooterLay Content="Media Centre" />
              <FooterLay Content="Cookie Preferences" />
              <FooterLay Content="Speed Test" />
              <FooterLay Content="Help Centre" />
              <FooterLay Content="Investor Relations" />
              <FooterLay Content="Terms of Use" />
              <FooterLay Content=" Corporate Information" />
              <FooterLay Content=" Legal Notices" />
              <FooterLay Content=" Account" />
              <FooterLay Content=" Jobs" />
              <FooterLay Content="Privacy" />
              <FooterLay Content=" Contact Us" />
              <FooterLay Content="Only on Netflix" />
            </div>
          </div>
        </div>
      </div>
      <h6 className="footer-span"> NETFLIC clone </h6>
    </>
  );
};
export default LandingPage;
