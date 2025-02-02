import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {
  // illustration, 
  contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      {/* <div className="main contact-margin-top" id="contact"> */}
        <div className="contact-div-main" id="contact">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <a
                  className={isDark ? "dark-mode contact-detail" : "contact-detail"}
                  href={contactInfo.resume} target="_blank" rel="noopener noreferrer"
                  >
                    {"See My Resume"}
              </a>
              <br />
              <br />
              {contactInfo.number && (
                <>
                  <a
                    className={isDark ? "dark-mode contact-detail" : "contact-detail"}
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className={isDark ? "dark-mode contact-detail-email" : "contact-detail-email"}
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          {/* <div className="contact-image-div"> */}
            {/* {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : ( */}
              {/* <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img> */}
            {/* )} */}
          {/* </div> */}
        </div>
      {/* </div> */}
    </Fade>
  );
}
