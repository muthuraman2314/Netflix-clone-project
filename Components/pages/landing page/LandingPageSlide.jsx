import "../landing page/LandingPage.css";
const LandingPageSlides = ({
  title,
  paragraph,
  className,
  image,
  video,
  tvvideo,
}) => {
  return (
    <div className="landingslide-container">
      <div className={className}>
        <div className="landingslide-text">
          <h1 className="landingslide-title"> {title}</h1>
          <p className="landingslide-para">{paragraph}</p>
        </div>
        <div>
          <div className="img-container">
            <img className="slide-img" src={image} alt="tv-img" />
          </div>
          {video && (
            <video className={tvvideo} src={video} autoPlay loop muted></video>
          )}
        </div>
      </div>
    </div>
  );
};
export default LandingPageSlides;
