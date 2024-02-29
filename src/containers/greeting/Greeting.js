import React, {useContext} from "react";
import {Fade} from "react-reveal";
// import emoji from "react-easy-emoji";
import "./Greeting.scss";
// import landingPerson from "../../assets/lottie/landingPerson";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import SocialMedia from "../../components/socialMedia/SocialMedia";

import {
  // illustration, 
  greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <h1
            className={isDark ? "dark-mode greeting-text" : "greeting-text"}
          >
            {" "}
            {greeting.title}{" "}
          </h1>
          {greeting.subTitle.map((subTitle) => (<p
              key={subTitle}
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {subTitle}
          </p>))}
          <SocialMedia />
          <Button className="button-greeting" text="Contact me" href="#contact" />
          
          {/* {greeting.resumeLink && (
            <Button
              className="button-greeting"
              text="See my resume"
              newTab={true}
              href={greeting.resumeLink}
            />
          )} */}
          {/* </div> */}
        </div>
      </div>
    </Fade>
  );
}
