import drawer from "./images/drawers.jpg";
import michelle from "./images/avatar-michelle.jpg";
import share from "./images/icon-share.svg";
import fb from "./images/icon-facebook.svg";
import tw from "./images/icon-twitter.svg";
import pi from "./images/icon-pinterest.svg";

const setActive = (event) => {
  var socialMediaElement = document.getElementsByClassName("article-card-social")[0];

  var isClassActive = socialMediaElement.classList.contains("active");

  if(isClassActive) {
    socialMediaElement.className = "article-card-social";
  } else {
    socialMediaElement.className = "article-card-social active";
  }
};

function App() {
  return (
    <div className="app-container">
      
      <div className={"article-card-container"}>
        <div className={"article-card-image"}>
          <img src={drawer} />
        </div>

        <div className={"article-card-text"}>
          <h4>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h4>
          <p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>
        </div>

        <div className={"article-card-social"}>
          <div className={"article-card-social-img"}>
            <img src={michelle} />
          </div>
          
          {/* hidden until activated*/}
          <div className={"article-card-social-active-share"}>
            <p>SHARE</p>
          </div>

          <div className={"article-card-social-name-date"}>
              <p id={"name"}>Michelle Appleton</p>
              <p id={"date"}>28 Jun 2020</p>
          </div>

          {/* hidden until activated*/}
          <div className={"article-card-social-icons"}>
            <div className={"article-card-social-icon-box"}>
              <img src={fb} />
            </div>
            <div className={"article-card-social-icon-box"}>
              <img src={tw} />
            </div>
            <div className={"article-card-social-icon-box"}>
              <img src={pi} />
            </div>
          </div>

          <div className={"article-card-social-button"} onClick={setActive}>
              <img src={share} />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
